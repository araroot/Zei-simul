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
const detailBodyA = document.getElementById("detailBodyA");
const detailBodyB = document.getElementById("detailBodyB");

const state = {
  selections: [
    { income: 800000, stPct: 40 },
    { income: 1200000, stPct: 60 }
  ]
};

function formatNearestThousand(value) {
  return Math.round(value / 1000).toLocaleString("en-US");
}

function formatIncomeThousands(value) {
  return Math.round(value / 1000).toLocaleString("en-US");
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

function selectionClass(income, stPct) {
  const idx = selectionIndex(income, stPct);
  if (idx === 0) return " sel-1";
  if (idx === 1) return " sel-2";
  return "";
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
          const cls = `heat-cell${selectionClass(income, stPct)}`;
          return `<td class="${cls}" data-income="${income}" data-stpct="${stPct}" style="background:${colorForRate(scenario.effectiveRate, min, max)}">${Math.round(scenario.effectiveRate)}%</td>`;
        }).join("");

        return `<tr><td class="row-label">${formatIncomeThousands(income)}</td>${row}</tr>`;
      }).join("")}
    </tbody>
  `;

  heatmapTable.innerHTML = thead + tbody;

  heatmapTable.querySelectorAll(".heat-cell").forEach((cell) => {
    cell.addEventListener("click", () => {
      toggleSelection(Number(cell.dataset.income), Number(cell.dataset.stpct));
      refreshAll();
    });
  });
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
      ${INCOME_BUCKETS.map((income) => {
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
      refreshAll();
    });
  });
}

function renderScenarioDetails(slotIndex, targetBody, label) {
  if (!targetBody) return;
  const sel = state.selections[slotIndex];
  if (!sel) {
    targetBody.innerHTML = `<tr><td>${label}</td><td>No selection</td></tr>`;
    return;
  }

  const s = calcScenario(sel.income, sel.stPct);
  const rows = [
    ["Scenario Income (editable)", `<input id="detailIncome-${slotIndex}" class="detail-input" type="number" min="1" step="1000" value="${Math.round(s.income)}" />`],
    ["Scenario STCG % (editable)", `<input id="detailStPct-${slotIndex}" class="detail-input" type="number" min="0" max="100" step="1" value="${Math.round(s.stPct)}" />`],
    ["Action", `<button id="recalcBtn-${slotIndex}" class="btn">Recalculate</button>`],
    ["Selected Income", currency.format(Math.round(s.income))],
    ["STCG %", `${Math.round(s.stPct)}%`],
    ["LTCG %", `${Math.round(s.ltcgPct)}%`],
    ["Short-Term Amount", currency.format(Math.round(s.stcg))],
    ["Long-Term Amount", currency.format(Math.round(s.ltcg))],
    ["Taxable Income", currency.format(Math.round(s.taxableIncome))],
    ["Taxable Ordinary Income", currency.format(Math.round(s.taxableOrdinary))],
    ["Taxable LTCG", currency.format(Math.round(s.taxableLtcg))],
    ["LTCG in 0% bucket", currency.format(Math.round(s.ltcgBreakdown.atZero))],
    ["LTCG in 15% bucket", currency.format(Math.round(s.ltcgBreakdown.atFifteen))],
    ["LTCG in 20% bucket", currency.format(Math.round(s.ltcgBreakdown.atTwenty))],
    ["Ordinary Tax", currency.format(Math.round(s.ordinaryTax))],
    ["LTCG Tax", currency.format(Math.round(s.ltcgTax))],
    ["NIIT (3.8%)", currency.format(Math.round(s.niit))],
    ["Total Federal Tax", currency.format(Math.round(s.totalTax))],
    ["Effective Tax Rate", `${Math.round(s.effectiveRate)}%`],
    ["After-Tax Income", currency.format(Math.round(s.afterTax))]
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
    refreshAll();
  });
}

function renderDetails() {
  renderScenarioDetails(0, detailBodyA, "Scenario A");
  renderScenarioDetails(1, detailBodyB, "Scenario B");
}

function refreshAll() {
  renderHeatmap();
  renderAfterTaxMatrix();
  renderDetails();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", refreshAll);
} else {
  refreshAll();
}
