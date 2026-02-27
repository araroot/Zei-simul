const STD_DEDUCTION = 32200;
const NIIT_THRESHOLD = 250000;
const NIIT_RATE = 0.038;

const ORDINARY_BRACKETS = [
  { limit: 24800, rate: 0.1 },
  { limit: 100800, rate: 0.12 },
  { limit: 211400, rate: 0.22 },
  { limit: 403550, rate: 0.24 },
  { limit: 512450, rate: 0.32 },
  { limit: 768700, rate: 0.35 },
  { limit: Infinity, rate: 0.37 }
];

const LTCG_THRESHOLDS = {
  zero: 98900,
  fifteen: 613700
};

const ORDINARY_BRACKETS_2025 = [
  { limit: 23850, rate: 0.1 },
  { limit: 96950, rate: 0.12 },
  { limit: 206700, rate: 0.22 },
  { limit: 394600, rate: 0.24 },
  { limit: 501050, rate: 0.32 },
  { limit: 751600, rate: 0.35 },
  { limit: Infinity, rate: 0.37 }
];

const LTCG_THRESHOLDS_2025 = {
  zero: 96700,
  fifteen: 600050
};

const HEATMAP_INCOME_BUCKETS = [600000, 800000, 1000000, 1200000, 1400000];
const AFTER_TAX_INCOME_BUCKETS = [
  500000, 600000, 700000, 800000, 900000, 1000000,
  1100000, 1200000, 1300000, 1400000, 1500000
];
const STCG_POINTS = [0, 20, 40, 60, 80, 100];
const SUMMARY_SCENARIO_IDS = ["A", "B", "C", "D", "E"];

const SUMMARY_BASE_SCENARIO_B = {
  stcg: -290072,
  ltcg: 1031155,
  dividends: 22166,
  qualifiedDividends: 2479,
  interest: 22849,
  other: 101597,
  usStcg: 0,
  usLtcg: 201184,
  usDividends: 2479,
  usInterest: 16925,
  usOther: 2982,
  foreignTaxes: 143430,
  ftcCarryover: 0,
  stdDeduction: 31500,
  niitThreshold: 250000,
  capLossCap: 3000
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const heatmapTable = document.getElementById("heatmapTable");
const taxDueTable = document.getElementById("taxDueTable");
const detailBodyA = document.getElementById("detailBodyA");
const detailBodyB = document.getElementById("detailBodyB");

const topTabs = Array.from(document.querySelectorAll(".top-tab"));
const topPanels = Array.from(document.querySelectorAll(".tab-panel"));

const sumInputs = {
  stcg: document.getElementById("sum-stcg"),
  ltcg: document.getElementById("sum-ltcg"),
  dividends: document.getElementById("sum-dividends"),
  qualifiedDividends: document.getElementById("sum-qualified-dividends"),
  interest: document.getElementById("sum-interest"),
  other: document.getElementById("sum-other"),
  usStcg: document.getElementById("sum-us-stcg"),
  usLtcg: document.getElementById("sum-us-ltcg"),
  usDividends: document.getElementById("sum-us-dividends"),
  usInterest: document.getElementById("sum-us-interest"),
  usOther: document.getElementById("sum-us-other"),
  foreignTaxes: document.getElementById("sum-foreign-taxes"),
  ftcCarry: document.getElementById("sum-ftc-carry"),
  stdDed: document.getElementById("sum-std-ded"),
  niitThreshold: document.getElementById("sum-niit-threshold"),
  capLossCap: document.getElementById("sum-caploss-cap")
};

const sumRecalcBtn = document.getElementById("sum-recalc");
const sumAssumptions = document.getElementById("sum-assumptions");
const sumOutput = document.getElementById("sum-output");
const summaryScenarioTabs = Array.from(document.querySelectorAll("#summary-scenario-tabs .scenario-tab"));

const state = {
  selections: [
    { income: 800000, stPct: 40 },
    { income: 1200000, stPct: 60 }
  ],
  summary: {
    activeScenario: "A",
    scenarios: {}
  }
};

function formatNearestThousand(value) {
  return Math.round(value / 1000).toLocaleString("en-US");
}

function formatIncomeThousands(value) {
  return Math.round(value / 1000).toLocaleString("en-US");
}

function toMoney(value) {
  return currency.format(Math.round(value));
}

function toPercent(value) {
  return `${Math.round(value)}%`;
}

function parseNumber(input, fallback = 0) {
  const n = Number(input?.value ?? fallback);
  return Number.isFinite(n) ? n : fallback;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function cloneScenario(values) {
  return {
    ...values,
    qualifiedDividends: values.qualifiedDividends === null ? null : Number(values.qualifiedDividends),
    ftcCarryover: Number(values.ftcCarryover)
  };
}

function seededRng(seedText) {
  let seed = 0;
  for (const ch of seedText) {
    seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
  }
  return () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

function randomInt(rand, min, max) {
  const low = Math.ceil(min);
  const high = Math.floor(max);
  return Math.floor(rand() * (high - low + 1)) + low;
}

function randomSignedLargeDelta(rand) {
  const magnitude = randomInt(rand, 50000, 500000);
  return rand() < 0.5 ? -magnitude : magnitude;
}

function randomShare(rand, min, max) {
  return min + (max - min) * rand();
}

function sanitizeSummaryScenario(s) {
  const scenario = cloneScenario(s);

  scenario.ltcg = Math.max(0, scenario.ltcg);
  scenario.dividends = Math.max(0, scenario.dividends);
  scenario.interest = Math.max(0, scenario.interest);
  scenario.other = Math.max(0, scenario.other);
  scenario.foreignTaxes = Math.max(0, scenario.foreignTaxes);
  scenario.ftcCarryover = Math.max(0, scenario.ftcCarryover);
  scenario.stdDeduction = Math.max(0, scenario.stdDeduction);
  scenario.niitThreshold = Math.max(0, scenario.niitThreshold);
  scenario.capLossCap = Math.max(0, scenario.capLossCap);

  // US-source components cannot exceed totals in each category.
  scenario.usStcg = scenario.stcg > 0 ? clamp(Math.max(0, scenario.usStcg), 0, scenario.stcg) : 0;
  scenario.usLtcg = clamp(Math.max(0, scenario.usLtcg), 0, scenario.ltcg);
  scenario.usDividends = clamp(Math.max(0, scenario.usDividends), 0, scenario.dividends);
  scenario.usInterest = clamp(Math.max(0, scenario.usInterest), 0, scenario.interest);
  scenario.usOther = clamp(Math.max(0, scenario.usOther), 0, scenario.other);

  if (scenario.qualifiedDividends !== null) {
    scenario.qualifiedDividends = clamp(Math.max(0, scenario.qualifiedDividends), 0, scenario.dividends);
  }

  return scenario;
}

function buildSimulatedSummaryScenarios() {
  const scenarios = {
    B: sanitizeSummaryScenario(cloneScenario(SUMMARY_BASE_SCENARIO_B))
  };

  for (const id of SUMMARY_SCENARIO_IDS) {
    if (id === "B") continue;

    const rand = seededRng(`summary-${id}`);
    const base = cloneScenario(SUMMARY_BASE_SCENARIO_B);
    const scenario = {
      ...base,
      stcg: base.stcg + randomSignedLargeDelta(rand),
      ltcg: base.ltcg + randomSignedLargeDelta(rand),
      dividends: base.dividends + randomSignedLargeDelta(rand),
      interest: base.interest + randomSignedLargeDelta(rand),
      other: base.other + randomSignedLargeDelta(rand),
      foreignTaxes: base.foreignTaxes + randomSignedLargeDelta(rand),
      ftcCarryover: Math.max(0, base.ftcCarryover + randomSignedLargeDelta(rand))
    };

    scenario.ltcg = Math.max(0, scenario.ltcg);
    scenario.dividends = Math.max(0, scenario.dividends);
    scenario.interest = Math.max(0, scenario.interest);
    scenario.other = Math.max(0, scenario.other);

    scenario.usStcg = scenario.stcg > 0
      ? Math.round(scenario.stcg * randomShare(rand, 0.08, 0.45))
      : 0;
    scenario.usLtcg = Math.round(scenario.ltcg * randomShare(rand, 0.08, 0.45));
    scenario.usDividends = Math.round(scenario.dividends * randomShare(rand, 0.1, 0.6));
    scenario.usInterest = Math.round(scenario.interest * randomShare(rand, 0.08, 0.75));
    scenario.usOther = Math.round(scenario.other * randomShare(rand, 0.05, 0.35));

    // Keep this blank so default rule applies (qualified = US-source dividends).
    scenario.qualifiedDividends = null;
    scenarios[id] = sanitizeSummaryScenario(scenario);
  }

  return scenarios;
}

function keyFor(income, stPct) {
  return `${income}|${stPct}`;
}

function selectionIndex(income, stPct) {
  const key = keyFor(income, stPct);
  return state.selections.findIndex((s) => keyFor(s.income, s.stPct) === key);
}

function normalizeSelections() {
  const seen = new Set();
  state.selections = state.selections.filter((s) => {
    if (!s) return false;
    const key = keyFor(s.income, s.stPct);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  state.selections = state.selections.slice(0, 2);
}

function toggleSelection(income, stPct) {
  const idx = selectionIndex(income, stPct);
  if (idx >= 0) {
    state.selections.splice(idx, 1);
  } else if (state.selections.length < 2) {
    state.selections.push({ income, stPct });
  } else {
    state.selections.shift();
    state.selections.push({ income, stPct });
  }
  normalizeSelections();
}

function calcOrdinaryTax(taxableOrdinary, brackets) {
  let remaining = taxableOrdinary;
  let lower = 0;
  let tax = 0;

  for (const bracket of brackets) {
    const span = Math.min(remaining, bracket.limit - lower);
    if (span <= 0) break;
    tax += span * bracket.rate;
    remaining -= span;
    lower = bracket.limit;
  }
  return tax;
}

function calcLtcgTaxBreakdown(taxableOrdinary, taxableLtcg, thresholds) {
  if (taxableLtcg <= 0) {
    return { atZero: 0, atFifteen: 0, atTwenty: 0, tax: 0 };
  }

  // Correct stacking: ordinary taxable income fills lower LTCG thresholds first.
  const zeroRoom = Math.max(0, thresholds.zero - taxableOrdinary);
  const atZero = Math.min(taxableLtcg, zeroRoom);

  const fifteenRoom = Math.max(0, thresholds.fifteen - taxableOrdinary - atZero);
  const atFifteen = Math.min(taxableLtcg - atZero, fifteenRoom);

  const atTwenty = Math.max(0, taxableLtcg - atZero - atFifteen);
  return { atZero, atFifteen, atTwenty, tax: atFifteen * 0.15 + atTwenty * 0.2 };
}

function calcScenario(totalIncome, stPct) {
  const boundedIncome = Math.max(1, totalIncome);
  const boundedStPct = Math.max(0, Math.min(100, stPct));

  const stcg = boundedIncome * (boundedStPct / 100);
  const ltcg = boundedIncome - stcg;

  const taxableIncome = Math.max(0, boundedIncome - STD_DEDUCTION);
  const taxableOrdinary = Math.max(0, stcg - STD_DEDUCTION);
  const taxableLtcg = Math.max(0, taxableIncome - taxableOrdinary);

  const ordinaryTax = calcOrdinaryTax(taxableOrdinary, ORDINARY_BRACKETS);
  const ltcgBreakdown = calcLtcgTaxBreakdown(taxableOrdinary, taxableLtcg, LTCG_THRESHOLDS);

  const nii = boundedIncome;
  const magiExcess = Math.max(0, boundedIncome - NIIT_THRESHOLD);
  const niitBase = Math.min(nii, magiExcess);
  const niit = niitBase * NIIT_RATE;

  const totalTax = ordinaryTax + ltcgBreakdown.tax + niit;

  return {
    income: boundedIncome,
    stPct: boundedStPct,
    ltcgPct: 100 - boundedStPct,
    stcg,
    ltcg,
    taxableIncome,
    taxableOrdinary,
    taxableLtcg,
    ordinaryTax,
    ltcgTax: ltcgBreakdown.tax,
    ltcgBreakdown,
    nii,
    magiExcess,
    niitBase,
    niit,
    totalTax,
    effectiveRate: (totalTax / boundedIncome) * 100,
    afterTax: boundedIncome - totalTax
  };
}

function colorForRate(rate, min, max) {
  const ratio = max === min ? 0.5 : (rate - min) / (max - min);
  const hue = 130 - ratio * 120;
  return `hsl(${hue}, 65%, 55%)`;
}

function selectionClass(income, stPct) {
  const idx = selectionIndex(income, stPct);
  if (idx === 0) return " sel-1";
  if (idx === 1) return " sel-2";
  return "";
}

function renderHeatmap() {
  if (!heatmapTable) return;
  const values = [];
  for (const income of HEATMAP_INCOME_BUCKETS) {
    for (const stPct of STCG_POINTS) {
      values.push(calcScenario(income, stPct).effectiveRate);
    }
  }

  const min = Math.min(...values);
  const max = Math.max(...values);

  const thead = `
    <thead>
      <tr>
        <th>Income (k USD) ↓ / ST →</th>
        ${STCG_POINTS.map((p) => `<th>${p}%</th>`).join("")}
      </tr>
    </thead>
  `;

  const tbody = `
    <tbody>
      ${HEATMAP_INCOME_BUCKETS.map((income) => {
        const row = STCG_POINTS.map((stPct) => {
          const scenario = calcScenario(income, stPct);
          return `<td class="heat-cell" style="background:${colorForRate(scenario.effectiveRate, min, max)}">${Math.round(scenario.effectiveRate)}%</td>`;
        }).join("");

        return `<tr><td class="row-label">${formatIncomeThousands(income)}</td>${row}</tr>`;
      }).join("")}
    </tbody>
  `;

  heatmapTable.innerHTML = thead + tbody;
}

function renderAfterTaxMatrix() {
  if (!taxDueTable) return;
  const thead = `
    <thead>
      <tr>
        <th>Income (k USD) ↓ / ST →</th>
        ${STCG_POINTS.map((p) => `<th>${p}%</th>`).join("")}
      </tr>
    </thead>
  `;

  const tbody = `
    <tbody>
      ${AFTER_TAX_INCOME_BUCKETS.map((income) => {
        const row = STCG_POINTS.map((stPct) => {
          const scenario = calcScenario(income, stPct);
          const cls = `tax-cell${selectionClass(income, stPct)}`;
          return `<td class="${cls}" data-income="${income}" data-stpct="${stPct}">${formatNearestThousand(scenario.afterTax)}</td>`;
        }).join("");
        return `<tr><td class="row-label">${formatIncomeThousands(income)}</td>${row}</tr>`;
      }).join("")}
    </tbody>
  `;

  taxDueTable.innerHTML = thead + tbody;

  taxDueTable.querySelectorAll(".tax-cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      toggleSelection(Number(cell.dataset.income), Number(cell.dataset.stpct));
      refreshHeatmapTab();
    });
  });
}

function renderScenarioDetails(slotIndex, targetBody) {
  if (!targetBody) return;
  const sel = state.selections[slotIndex];
  if (!sel) {
    targetBody.innerHTML = `<tr><td>Scenario</td><td>No selection</td></tr>`;
    return;
  }

  const s = calcScenario(sel.income, sel.stPct);
  const rows = [
    ["Scenario Income (editable)", `<input id="detailIncome-${slotIndex}" class="detail-input" type="number" min="1" step="1000" value="${Math.round(s.income)}" />`],
    ["Scenario STCG % (editable)", `<input id="detailStPct-${slotIndex}" class="detail-input" type="number" min="0" max="100" step="1" value="${Math.round(s.stPct)}" />`],
    ["Action", `<button id="recalcBtn-${slotIndex}" class="btn">Recalculate</button>`],
    ["Selected Income", toMoney(s.income)],
    ["STCG %", `${Math.round(s.stPct)}%`],
    ["LTCG %", `${Math.round(s.ltcgPct)}%`],
    ["Short-Term Amount", toMoney(s.stcg)],
    ["Long-Term Amount", toMoney(s.ltcg)],
    ["Taxable Income", toMoney(s.taxableIncome)],
    ["Taxable Ordinary Income", toMoney(s.taxableOrdinary)],
    ["Taxable LTCG", toMoney(s.taxableLtcg)],
    ["LTCG in 0% bucket", toMoney(s.ltcgBreakdown.atZero)],
    ["LTCG in 15% bucket", toMoney(s.ltcgBreakdown.atFifteen)],
    ["LTCG in 20% bucket", toMoney(s.ltcgBreakdown.atTwenty)],
    ["Ordinary Tax", toMoney(s.ordinaryTax)],
    ["LTCG Tax", toMoney(s.ltcgTax)],
    ["NIIT (3.8%)", toMoney(s.niit)],
    ["Total Federal Tax", toMoney(s.totalTax)],
    ["Effective Tax Rate", `${Math.round(s.effectiveRate)}%`],
    ["After-Tax Income", toMoney(s.afterTax)]
  ];

  targetBody.innerHTML = rows.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("");

  document.getElementById(`recalcBtn-${slotIndex}`).addEventListener("click", () => {
    const income = Number(document.getElementById(`detailIncome-${slotIndex}`).value);
    const stPct = Number(document.getElementById(`detailStPct-${slotIndex}`).value);

    state.selections[slotIndex] = {
      income: Math.max(1, income || sel.income),
      stPct: Math.max(0, Math.min(100, stPct || 0))
    };

    normalizeSelections();
    refreshHeatmapTab();
  });
}

function renderDetails() {
  renderScenarioDetails(0, detailBodyA);
  renderScenarioDetails(1, detailBodyB);
}

function refreshHeatmapTab() {
  renderHeatmap();
  renderAfterTaxMatrix();
  renderDetails();
}

function netCapital(stcg, ltcg, capLossCap) {
  let ordinaryCapGain = 0;
  let prefCapGain = 0;
  let capLossDeduction = 0;
  let capLossCarryover = 0;

  if (stcg >= 0 && ltcg >= 0) {
    ordinaryCapGain = stcg;
    prefCapGain = ltcg;
  } else if (stcg <= 0 && ltcg <= 0) {
    const netLoss = Math.abs(stcg + ltcg);
    capLossDeduction = Math.min(capLossCap, netLoss);
    capLossCarryover = Math.max(0, netLoss - capLossDeduction);
  } else {
    const net = stcg + ltcg;
    if (net >= 0) {
      if (stcg > 0) {
        ordinaryCapGain = net;
      } else {
        prefCapGain = net;
      }
    } else {
      const netLoss = Math.abs(net);
      capLossDeduction = Math.min(capLossCap, netLoss);
      capLossCarryover = Math.max(0, netLoss - capLossDeduction);
    }
  }

  return { ordinaryCapGain, prefCapGain, capLossDeduction, capLossCarryover };
}

function calculateSummaryTax(inputs) {
  const qualifiedDividends = Math.max(0, Math.min(inputs.qualifiedDividends, inputs.dividends));
  const ordinaryDividends = inputs.dividends - qualifiedDividends;

  const capNet = netCapital(inputs.stcg, inputs.ltcg, inputs.capLossCap);

  const ordinaryOther = ordinaryDividends + inputs.interest + inputs.other;
  const ordinaryIncomeBeforeDed = ordinaryOther + capNet.ordinaryCapGain - capNet.capLossDeduction;
  const prefIncomeBeforeDed = capNet.prefCapGain + qualifiedDividends;
  const agi = ordinaryIncomeBeforeDed + prefIncomeBeforeDed;
  const totalIncome = inputs.stcg + inputs.ltcg + inputs.dividends + inputs.interest + inputs.other;

  const taxableIncome = Math.max(0, agi - inputs.stdDeduction);
  const taxableOrdinary = Math.max(0, ordinaryIncomeBeforeDed - inputs.stdDeduction);
  const taxablePref = Math.max(0, taxableIncome - taxableOrdinary);

  const ordinaryTax = calcOrdinaryTax(taxableOrdinary, ORDINARY_BRACKETS_2025);
  const ltcgBreakdown = calcLtcgTaxBreakdown(taxableOrdinary, taxablePref, LTCG_THRESHOLDS_2025);
  const regularTax = ordinaryTax + ltcgBreakdown.tax;

  const nii = Math.max(0, capNet.ordinaryCapGain + capNet.prefCapGain + inputs.dividends + inputs.interest);
  const magiExcess = Math.max(0, agi - inputs.niitThreshold);
  const niitBase = Math.min(nii, magiExcess);
  const niit = niitBase * NIIT_RATE;

  const foreignStcg = inputs.stcg - inputs.usStcg;
  const foreignLtcg = inputs.ltcg - inputs.usLtcg;
  const foreignDividends = inputs.dividends - inputs.usDividends;
  const foreignInterest = inputs.interest - inputs.usInterest;
  const foreignOther = inputs.other - inputs.usOther;
  const foreignIncomeDerived = foreignStcg + foreignLtcg + foreignDividends + foreignInterest + foreignOther;
  const foreignIncomeForLimit = Math.max(0, foreignIncomeDerived);
  const worldwideIncomeForLimit = Math.max(0, totalIncome);
  const foreignIncomeRatio = worldwideIncomeForLimit > 0
    ? foreignIncomeForLimit / worldwideIncomeForLimit
    : 0;
  const foreignTaxableIncomeApprox = worldwideIncomeForLimit > 0
    ? taxableIncome * foreignIncomeRatio
    : 0;

  const ftcLimit = taxableIncome > 0
    ? (regularTax * Math.min(foreignTaxableIncomeApprox, taxableIncome)) / taxableIncome
    : 0;
  const ftcAvailable = Math.max(0, inputs.foreignTaxes + inputs.ftcCarryover);
  const ftcAllowed = Math.min(Math.max(0, ftcLimit), ftcAvailable, regularTax);

  const usFederalIncomeTax = regularTax - ftcAllowed + niit;
  const effectiveRate = totalIncome !== 0 ? (usFederalIncomeTax / totalIncome) * 100 : 0;

  return {
    capNet,
    stdDeduction: inputs.stdDeduction,
    qualifiedDividends,
    ordinaryDividends,
    ordinaryOther,
    ordinaryIncomeBeforeDed,
    prefIncomeBeforeDed,
    agi,
    totalIncome,
    taxableIncome,
    taxableOrdinary,
    taxablePref,
    ordinaryTax,
    ltcgBreakdown,
    regularTax,
    nii,
    magiExcess,
    niitBase,
    niit,
    foreignStcg,
    foreignLtcg,
    foreignDividends,
    foreignInterest,
    foreignOther,
    foreignIncomeDerived,
    worldwideIncomeForLimit,
    foreignIncomeRatio,
    foreignTaxableIncomeApprox,
    ftcLimit,
    ftcAvailable,
    ftcAllowed,
    usFederalIncomeTax,
    effectiveRate,
    afterTaxIncome: totalIncome - usFederalIncomeTax
  };
}

function readSummaryInputs() {
  const totalDividends = parseNumber(sumInputs.dividends);
  const usDividends = parseNumber(sumInputs.usDividends);
  const qualifiedRaw = (sumInputs.qualifiedDividends?.value ?? "").trim();
  const qualifiedDividends = qualifiedRaw === ""
    ? usDividends
    : parseNumber(sumInputs.qualifiedDividends);

  return sanitizeSummaryScenario({
    stcg: parseNumber(sumInputs.stcg),
    ltcg: parseNumber(sumInputs.ltcg),
    dividends: totalDividends,
    qualifiedDividends,
    interest: parseNumber(sumInputs.interest),
    other: parseNumber(sumInputs.other),
    usStcg: parseNumber(sumInputs.usStcg),
    usLtcg: parseNumber(sumInputs.usLtcg),
    usDividends,
    usInterest: parseNumber(sumInputs.usInterest),
    usOther: parseNumber(sumInputs.usOther),
    foreignTaxes: parseNumber(sumInputs.foreignTaxes),
    ftcCarryover: parseNumber(sumInputs.ftcCarry),
    stdDeduction: parseNumber(sumInputs.stdDed, 31500),
    niitThreshold: parseNumber(sumInputs.niitThreshold, 250000),
    capLossCap: parseNumber(sumInputs.capLossCap, 3000)
  });
}

function readSummaryDraftFromForm() {
  const qualifiedRaw = (sumInputs.qualifiedDividends?.value ?? "").trim();
  return {
    stcg: parseNumber(sumInputs.stcg),
    ltcg: parseNumber(sumInputs.ltcg),
    dividends: parseNumber(sumInputs.dividends),
    qualifiedDividends: qualifiedRaw === "" ? null : parseNumber(sumInputs.qualifiedDividends),
    interest: parseNumber(sumInputs.interest),
    other: parseNumber(sumInputs.other),
    usStcg: parseNumber(sumInputs.usStcg),
    usLtcg: parseNumber(sumInputs.usLtcg),
    usDividends: parseNumber(sumInputs.usDividends),
    usInterest: parseNumber(sumInputs.usInterest),
    usOther: parseNumber(sumInputs.usOther),
    foreignTaxes: parseNumber(sumInputs.foreignTaxes),
    ftcCarryover: parseNumber(sumInputs.ftcCarry),
    stdDeduction: parseNumber(sumInputs.stdDed, 31500),
    niitThreshold: parseNumber(sumInputs.niitThreshold, 250000),
    capLossCap: parseNumber(sumInputs.capLossCap, 3000)
  };
}

function writeSummaryScenarioToForm(values) {
  sumInputs.stcg.value = String(Math.round(values.stcg));
  sumInputs.ltcg.value = String(Math.round(values.ltcg));
  sumInputs.dividends.value = String(Math.round(values.dividends));
  sumInputs.qualifiedDividends.value = values.qualifiedDividends === null ? "" : String(Math.round(values.qualifiedDividends));
  sumInputs.interest.value = String(Math.round(values.interest));
  sumInputs.other.value = String(Math.round(values.other));
  sumInputs.usStcg.value = String(Math.round(values.usStcg));
  sumInputs.usLtcg.value = String(Math.round(values.usLtcg));
  sumInputs.usDividends.value = String(Math.round(values.usDividends));
  sumInputs.usInterest.value = String(Math.round(values.usInterest));
  sumInputs.usOther.value = String(Math.round(values.usOther));
  sumInputs.foreignTaxes.value = String(Math.round(values.foreignTaxes));
  sumInputs.ftcCarry.value = String(Math.round(values.ftcCarryover));
  sumInputs.stdDed.value = String(Math.round(values.stdDeduction));
  sumInputs.niitThreshold.value = String(Math.round(values.niitThreshold));
  sumInputs.capLossCap.value = String(Math.round(values.capLossCap));
}

function renderSummaryAssumptions() {
  if (!sumAssumptions) return;
  const assumptions = [
    "Tax year is treated as 2025 MFJ for this tab (2025 brackets and LTCG thresholds).",
    "Qualified dividends default to US-source dividends when the input is left blank.",
    "AMT, itemized deductions, QBI, payroll taxes, and phaseouts are not modeled.",
    "FTC is applied only against regular tax (not NIIT) using the standard limitation ratio.",
    "Foreign-source income is derived from total minus US-source components by category.",
    "Foreign taxable income for FTC limit is approximated by proportional allocation: taxable income × (foreign gross / worldwide gross).",
    "NIIT uses MAGI ≈ AGI assumption in this simplified model.",
    "Investment income for NIIT is approximated as net capital gains + dividends + interest."
  ];
  sumAssumptions.innerHTML = assumptions.map((a) => `<li>${a}</li>`).join("");
}

function renderSummaryOutput(result) {
  if (!sumOutput) return;
  const rows = [
    ["Total input income", toMoney(result.totalIncome), "STCG + LTCG + dividends + interest + other"],
    ["Net ordinary capital gain", toMoney(result.capNet.ordinaryCapGain), "After ST/LT netting"],
    ["Net preferential capital gain", toMoney(result.capNet.prefCapGain), "After ST/LT netting"],
    ["Qualified dividends used", toMoney(result.qualifiedDividends), "Defaults to US-source dividends when blank"],
    ["Ordinary dividends", toMoney(result.ordinaryDividends), "Total dividends - qualified dividends"],
    ["Capital loss deduction used", toMoney(result.capNet.capLossDeduction), "Capped by input limit"],
    ["Capital loss carryover", toMoney(result.capNet.capLossCarryover), "Carryforward estimate"],
    ["Ordinary income before deduction", toMoney(result.ordinaryIncomeBeforeDed), "Other ordinary + ordinary cap gain - cap loss deduction"],
    ["Preferential income before deduction", toMoney(result.prefIncomeBeforeDed), "Net LTCG + qualified dividends"],
    ["AGI", toMoney(result.agi), "Simplified AGI"],
    ["Standard deduction applied", toMoney(result.stdDeduction), "Applied to ordinary income first in this model"],
    ["Taxable ordinary income", toMoney(result.taxableOrdinary), "Ordinary base for bracket tax"],
    ["Taxable total income", toMoney(result.taxableIncome), "AGI - standard deduction"],
    ["Taxable LTCG/qualified", toMoney(result.taxablePref), "Preferential base after stacking"],
    ["Ordinary tax", toMoney(result.ordinaryTax), "2025 MFJ ordinary brackets"],
    ["LTCG taxed at 0%", toMoney(result.ltcgBreakdown.atZero), "Stacking with ordinary income"],
    ["LTCG taxed at 15%", toMoney(result.ltcgBreakdown.atFifteen), "Stacking with ordinary income"],
    ["LTCG taxed at 20%", toMoney(result.ltcgBreakdown.atTwenty), "Stacking with ordinary income"],
    ["LTCG tax", toMoney(result.ltcgBreakdown.tax), "Preferential capital-gains tax"],
    ["Regular tax (ordinary + LTCG)", toMoney(result.regularTax), "Before FTC and NIIT"],
    ["NII used for NIIT", toMoney(result.nii), "Simplified NII from gains/dividends/interest"],
    ["MAGI excess over NIIT threshold", toMoney(result.magiExcess), "AGI - threshold"],
    ["NIIT base", toMoney(result.niitBase), "min(NII, MAGI excess)"],
    ["NIIT (3.8%)", toMoney(result.niit), "Not reduced by FTC"],
    ["Derived foreign STCG", toMoney(result.foreignStcg), "Total STCG - US STCG"],
    ["Derived foreign LTCG", toMoney(result.foreignLtcg), "Total LTCG - US LTCG"],
    ["Derived foreign dividends", toMoney(result.foreignDividends), "Total dividends - US dividends"],
    ["Derived foreign interest", toMoney(result.foreignInterest), "Total interest - US interest"],
    ["Derived foreign other", toMoney(result.foreignOther), "Total other - US other"],
    ["Derived foreign gross income", toMoney(result.foreignIncomeDerived), "FTC numerator (gross basis)"],
    ["Worldwide gross income", toMoney(result.worldwideIncomeForLimit), "FTC denominator (gross basis)"],
    ["Foreign / worldwide ratio", toPercent(result.foreignIncomeRatio * 100), "Used for taxable-income allocation"],
    ["Approx foreign taxable income", toMoney(result.foreignTaxableIncomeApprox), "Taxable income × foreign gross / worldwide gross"],
    ["FTC limit", toMoney(result.ftcLimit), "Regular tax × (foreign taxable / worldwide taxable)"],
    ["FTC available (paid + carryover)", toMoney(result.ftcAvailable), "Input-driven"],
    ["FTC allowed", toMoney(result.ftcAllowed), "min(limit, available, regular tax)"],
    ["US federal income tax", toMoney(result.usFederalIncomeTax), "Regular tax - FTC allowed + NIIT"],
    ["Effective federal tax rate", toPercent(result.effectiveRate), "Tax / total input income"],
    ["After-tax income", toMoney(result.afterTaxIncome), "Total input income - US federal income tax"]
  ];

  sumOutput.innerHTML = rows.map(([k, v, n]) => `<tr><td>${k}</td><td>${v}</td><td>${n}</td></tr>`).join("");
}

function recalcSummary() {
  const inputs = readSummaryInputs();
  const result = calculateSummaryTax(inputs);
  renderSummaryOutput(result);
}

function saveActiveSummaryScenario() {
  const activeId = state.summary.activeScenario;
  if (!activeId) return;
  state.summary.scenarios[activeId] = sanitizeSummaryScenario(readSummaryDraftFromForm());
}

function setActiveSummaryTabButton(id) {
  summaryScenarioTabs.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.scenario === id);
  });
}

function loadSummaryScenario(id) {
  const scenario = state.summary.scenarios[id];
  if (!scenario) return;
  state.summary.activeScenario = id;
  setActiveSummaryTabButton(id);
  writeSummaryScenarioToForm(scenario);
  recalcSummary();
}

function switchSummaryScenario(id) {
  if (!state.summary.scenarios[id]) return;
  saveActiveSummaryScenario();
  loadSummaryScenario(id);
}

function seedSummaryDefaults() {
  if (!sumInputs.stcg) return;
  state.summary.scenarios = buildSimulatedSummaryScenarios();
  loadSummaryScenario("A");
}

function bindSummaryEvents() {
  if (!sumRecalcBtn) return;

  sumRecalcBtn.addEventListener("click", () => {
    saveActiveSummaryScenario();
    recalcSummary();
  });

  summaryScenarioTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      switchSummaryScenario(btn.dataset.scenario);
    });
  });

  Object.values(sumInputs).forEach((input) => {
    if (!input) return;
    input.addEventListener("input", () => {
      saveActiveSummaryScenario();
    });
  });
}

function bindTopTabs() {
  topTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.panel;
      topTabs.forEach((b) => b.classList.toggle("active", b === btn));
      topPanels.forEach((p) => p.classList.toggle("active", p.id === target));
    });
  });
}

function boot() {
  try {
    bindTopTabs();
    refreshHeatmapTab();
    seedSummaryDefaults();
    bindSummaryEvents();
    renderSummaryAssumptions();
    recalcSummary();
  } catch (err) {
    if (sumOutput) {
      sumOutput.innerHTML = `<tr><td>Runtime error</td><td>${String(err)}</td><td>Check console for details.</td></tr>`;
    }
    throw err;
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
