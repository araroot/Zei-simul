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

const INCOME_BUCKETS = [600000, 800000, 1000000, 1200000, 1400000];
const STCG_POINTS = [0, 20, 40, 60, 80, 100];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const heatmapTable = document.getElementById("heatmapTable");
const taxDueTable = document.getElementById("taxDueTable");
const detailBody = document.getElementById("detailBody");

const state = {
  income: 800000,
  stPct: 40,
  heatmapSelection: { income: 800000, stPct: 40 }
};

function formatNearestThousand(value) {
  return Math.round(value / 1000).toLocaleString("en-US");
}

function formatIncomeThousands(value) {
  return Math.round(value / 1000).toLocaleString("en-US");
}

function calcOrdinaryTax(taxableOrdinary) {
  let remaining = taxableOrdinary;
  let lower = 0;
  let tax = 0;

  for (const bracket of ORDINARY_BRACKETS) {
    const span = Math.min(remaining, bracket.limit - lower);
    if (span <= 0) break;
    tax += span * bracket.rate;
    remaining -= span;
    lower = bracket.limit;
  }
  return tax;
}

function calcLtcgTaxBreakdown(taxableOrdinary, taxableLtcg) {
  if (taxableLtcg <= 0) {
    return { atZero: 0, atFifteen: 0, atTwenty: 0, tax: 0 };
  }

  // Correct stacking: ordinary taxable income fills lower LTCG thresholds first.
  const zeroRoom = Math.max(0, LTCG_THRESHOLDS.zero - taxableOrdinary);
  const atZero = Math.min(taxableLtcg, zeroRoom);

  const fifteenRoom = Math.max(0, LTCG_THRESHOLDS.fifteen - taxableOrdinary - atZero);
  const atFifteen = Math.min(taxableLtcg - atZero, fifteenRoom);

  const atTwenty = Math.max(0, taxableLtcg - atZero - atFifteen);
  const tax = atFifteen * 0.15 + atTwenty * 0.2;

  return { atZero, atFifteen, atTwenty, tax };
}

function calcScenario(totalIncome, stPct) {
  const boundedIncome = Math.max(1, totalIncome);
  const boundedStPct = Math.max(0, Math.min(100, stPct));

  const stcg = boundedIncome * (boundedStPct / 100);
  const ltcg = boundedIncome - stcg;

  const taxableIncome = Math.max(0, boundedIncome - STD_DEDUCTION);
  const taxableOrdinary = Math.max(0, stcg - STD_DEDUCTION);
  const taxableLtcg = Math.max(0, taxableIncome - taxableOrdinary);

  const ordinaryTax = calcOrdinaryTax(taxableOrdinary);
  const ltcgBreakdown = calcLtcgTaxBreakdown(taxableOrdinary, taxableLtcg);

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

function renderHeatmap() {
  if (!heatmapTable) return;
  const values = [];
  for (const income of INCOME_BUCKETS) {
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
      ${INCOME_BUCKETS.map((income) => {
        const row = STCG_POINTS.map((stPct) => {
          const scenario = calcScenario(income, stPct);
          const active =
            state.heatmapSelection &&
            state.heatmapSelection.income === income &&
            state.heatmapSelection.stPct === stPct;

          return `<td class="heat-cell${active ? " active" : ""}" data-income="${income}" data-stpct="${stPct}" style="background:${colorForRate(scenario.effectiveRate, min, max)}">${Math.round(scenario.effectiveRate)}%</td>`;
        }).join("");

        return `<tr><td class="row-label">${formatIncomeThousands(income)}</td>${row}</tr>`;
      }).join("")}
    </tbody>
  `;

  heatmapTable.innerHTML = thead + tbody;

  heatmapTable.querySelectorAll(".heat-cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      const income = Number(cell.dataset.income);
      const stPct = Number(cell.dataset.stpct);
      state.income = income;
      state.stPct = stPct;
      state.heatmapSelection = { income, stPct };
      renderHeatmap();
      renderTaxDueTable();
      renderDetail();
    });
  });
}

function renderTaxDueTable() {
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
      ${INCOME_BUCKETS.map((income) => {
        const row = STCG_POINTS.map((stPct) => {
          const scenario = calcScenario(income, stPct);
          const active =
            state.heatmapSelection &&
            state.heatmapSelection.income === income &&
            state.heatmapSelection.stPct === stPct;
          return `<td class="tax-cell${active ? " active" : ""}">${formatNearestThousand(scenario.afterTax)}</td>`;
        }).join("");

        return `<tr><td class="row-label">${formatIncomeThousands(income)}</td>${row}</tr>`;
      }).join("")}
    </tbody>
  `;

  taxDueTable.innerHTML = thead + tbody;
}

function renderDetail() {
  if (!detailBody) return;
  const scenario = calcScenario(state.income, state.stPct);

  const rows = [
    [
      "Scenario Income (editable)",
      `<input id="detailIncome" class="detail-input" type="number" min="1" step="1000" value="${Math.round(scenario.income)}" />`
    ],
    [
      "Scenario STCG % (editable)",
      `<input id="detailStPct" class="detail-input" type="number" min="0" max="100" step="1" value="${Math.round(scenario.stPct)}" />`
    ],
    ["Action", `<button id="recalcBtn" class="btn">Recalculate</button>`],
    ["Selected Income", currency.format(Math.round(scenario.income))],
    ["STCG %", `${Math.round(scenario.stPct)}%`],
    ["LTCG %", `${Math.round(scenario.ltcgPct)}%`],
    ["Short-Term Amount", currency.format(Math.round(scenario.stcg))],
    ["Long-Term Amount", currency.format(Math.round(scenario.ltcg))],
    ["Standard Deduction (MFJ 2026)", currency.format(STD_DEDUCTION)],
    ["Taxable Income", currency.format(Math.round(scenario.taxableIncome))],
    ["Taxable Ordinary Income", currency.format(Math.round(scenario.taxableOrdinary))],
    ["Taxable LTCG", currency.format(Math.round(scenario.taxableLtcg))],
    ["LTCG in 0% bucket (stacked)", currency.format(Math.round(scenario.ltcgBreakdown.atZero))],
    ["LTCG in 15% bucket (stacked)", currency.format(Math.round(scenario.ltcgBreakdown.atFifteen))],
    ["LTCG in 20% bucket (stacked)", currency.format(Math.round(scenario.ltcgBreakdown.atTwenty))],
    ["Ordinary Tax", currency.format(Math.round(scenario.ordinaryTax))],
    ["LTCG Tax", currency.format(Math.round(scenario.ltcgTax))],
    ["MAGI excess over $250,000", currency.format(Math.round(scenario.magiExcess))],
    ["NII", currency.format(Math.round(scenario.nii))],
    ["NIIT base = min(NII, MAGI excess)", currency.format(Math.round(scenario.niitBase))],
    ["NIIT (3.8%)", currency.format(Math.round(scenario.niit))],
    ["Total Federal Tax", currency.format(Math.round(scenario.totalTax))],
    ["Effective Tax Rate", `${Math.round(scenario.effectiveRate)}%`],
    ["After-Tax Income", currency.format(Math.round(scenario.afterTax))]
  ];

  detailBody.innerHTML = rows.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("");

  document.getElementById("recalcBtn").addEventListener("click", () => {
    const income = Number(document.getElementById("detailIncome").value);
    const stPct = Number(document.getElementById("detailStPct").value);

    state.income = Math.max(1, income || state.income);
    state.stPct = Math.max(0, Math.min(100, stPct || 0));

    const isHeatIncome = INCOME_BUCKETS.includes(state.income);
    const isHeatPct = STCG_POINTS.includes(state.stPct);
    state.heatmapSelection = isHeatIncome && isHeatPct
      ? { income: state.income, stPct: state.stPct }
      : null;

    renderHeatmap();
    renderTaxDueTable();
    renderDetail();
  });
}

function boot() {
  try {
    renderHeatmap();
    renderTaxDueTable();
    renderDetail();
  } catch (err) {
    if (detailBody) {
      detailBody.innerHTML = `<tr><td>Runtime error</td><td>${String(err)}</td></tr>`;
    }
    throw err;
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
