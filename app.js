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

const AMT_EXEMPTION_2025_MFJ = 137000;
const AMT_EXEMPTION_PHASEOUT_2025_MFJ = 1252700;
const AMT_26_RATE_CEILING_2025_MFJ = 239100;

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
  investmentExpenses: 6467,
  itemizedTaxes: 10000,
  itemizedInterest: 26878,
  itemizedOther: 0,
  usStcg: 0,
  usLtcg: 201184,
  usDividends: 2479,
  usInterest: 16925,
  usOther: 2982,
  foreignTaxes: 143430,
  ftcCarryover: 0,
  otherCredits: 0,
  stdDeduction: 31500,
  niitThreshold: 250000,
  capLossCap: 3000,
  amtBondInterest: 0,
  amtAdjustments: 0,
  amtFtc: 0,
  otherTaxes: 0,
  withholding: 0,
  otherPayments: 0,
  penalty: 0
};

const SCENARIO_B_WORKBOOK_BREAKOUT = {
  foreignPassiveStcg: -290072.2324589123,
  foreignPassiveLtcg: 829971.7403597468,
  foreignPassiveDividends: 19687.617550181907,
  foreignPassiveInterest: 5923.70284507592,
  foreignPassiveRetirement: 72467.17087670573,
  foreignExcludedRefund: 26147.612541861287,
  foreignGeneralOther: 0,
  foreignCurrencyPassiveDividends: 357938.7,
  foreignCurrencyPassiveInterest: 160864,
  foreignCurrencyPassiveOther: 11954411,
  passiveTaxesCapitalGains: 129950.56981855325,
  passiveTaxesDividends: 4107.95794934181,
  passiveTaxesInterest: 1846.1891591016034,
  passiveTaxesRetirement: 7246.7147923289685,
  excludedRefundTaxes: 278.91843503609427,
  generalTaxesOther: 0,
  totalForeignTaxes: 143430.35015436172
};

const FORM1116_LAYOUT = {
  page1: {
    name: [36, 684, 388.05, 698.001],
    id: [389.8, 684, 576, 698.001],
    passiveCheckbox: [194.4, 651, 202.4, 659],
    generalCheckbox: [194.4, 639.001, 202.4, 647.001],
    residentCountry: [166, 624.002, 576, 636.001],
    countryA: [267.4, 540, 337.65, 564.001],
    line1aText: [64.8, 479.999, 259.2, 515.999],
    line1aA: [266.4, 480.002, 337.65, 492.001],
    line1aTotal: [504, 480.002, 576, 492.001],
    line2A: [266.4, 389.999, 337.65, 402],
    line2Total: [504, 389.999, 576, 402],
    line3aA: [266.4, 341.997, 337.65, 353.998],
    line3aTotal: [504, 341.997, 576, 353.998],
    line3bA: [266.4, 329.998, 337.65, 341.997],
    line3bTotal: [504, 329.998, 576, 341.997],
    line3cA: [266.4, 317.999, 337.65, 329.998],
    line3cTotal: [504, 317.999, 576, 329.998],
    line3dA: [266.4, 306, 337.65, 317.999],
    line3dTotal: [504, 306, 576, 317.999],
    line3eA: [266.4, 294.001, 337.65, 306],
    line3eTotal: [504, 294.001, 576, 306],
    line3fA: [266.4, 282.002, 337.65, 294.001],
    line3fTotal: [504, 282.002, 576, 294.001],
    line3gA: [266.4, 270.003, 337.65, 282.002],
    line3gTotal: [504, 270.003, 576, 282.002],
    line4aA: [266.4, 234.003, 337.65, 246.004],
    line4aTotal: [504, 234.003, 576, 246.004],
    line4bA: [266.4, 222.004, 337.65, 234.003],
    line4bTotal: [504, 222.004, 576, 234.003],
    line5A: [266.4, 210.005, 337.65, 222.004],
    line5Total: [504, 210.005, 576, 222.004],
    line6: [504, 198, 576, 209.999],
    line7: [504, 186.001, 576, 198],
    part2Country: [50.4, 90.003, 122.4, 102.002],
    part2Date: [122.4, 90.003, 172.05, 102.002],
    part2ForeignDiv: [172.8, 90.003, 222.45, 102.002],
    part2ForeignRent: [223.2, 90.003, 272.85, 102.002],
    part2ForeignInterest: [273.6, 90.003, 316.05, 102.002],
    part2ForeignOther: [316.8, 90.003, 366.45, 102.002],
    part2UsdDiv: [367.2, 90.003, 416.85, 102.002],
    part2UsdRent: [417.6, 90.003, 460.05, 102.002],
    part2UsdInterest: [460.8, 90.003, 503.25, 102.002],
    part2UsdOther: [504, 90.003, 576, 102.002],
    line8: [504, 54, 576, 65.999]
  },
  page2: {
    line9: [381.6, 708.001, 467.25, 720],
    line10Box: [342.8, 668, 350.8, 676],
    line10: [381.6, 666, 467.25, 677.999],
    line11: [381.6, 630, 467.25, 641.999],
    line12: [385.6, 618.001, 464, 630],
    line13: [381.6, 606.002, 467.25, 618.001],
    line14: [489.6, 594, 576, 605.999],
    line15: [381.6, 558, 467.25, 569.999],
    line16: [381.6, 546.001, 467.25, 558],
    line17: [381.6, 510.001, 467.25, 522],
    line18: [381.6, 462.002, 467.25, 474.001],
    line19: [489.6, 426.002, 576, 438.001],
    line20: [489.6, 402.001, 576, 414],
    line21: [489.6, 366.001, 576, 378],
    line22: [489.6, 354.002, 576, 366.001],
    line23: [489.6, 342, 576, 353.999],
    line24: [489.6, 330.001, 576, 342],
    line25: [381.6, 294.001, 467.25, 306],
    line26: [381.6, 282.002, 467.25, 294.001],
    line27: [381.6, 270, 467.25, 281.999],
    line28: [381.6, 258.001, 467.25, 270],
    line29: [381.6, 246.002, 467.25, 258.001],
    line30: [381.6, 234, 467.25, 245.999],
    line31: [381.6, 222.001, 467.25, 234],
    line32: [489.6, 210.002, 576, 222.001],
    line33: [489.6, 198, 576, 209.999],
    line34: [489.6, 186.001, 576, 198],
    line35: [489.6, 162, 576, 173.999]
  }
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
  investmentExpenses: document.getElementById("sum-investment-expenses"),
  itemizedTaxes: document.getElementById("sum-itemized-taxes"),
  itemizedInterest: document.getElementById("sum-itemized-interest"),
  itemizedOther: document.getElementById("sum-itemized-other"),
  usStcg: document.getElementById("sum-us-stcg"),
  usLtcg: document.getElementById("sum-us-ltcg"),
  usDividends: document.getElementById("sum-us-dividends"),
  usInterest: document.getElementById("sum-us-interest"),
  usOther: document.getElementById("sum-us-other"),
  foreignTaxes: document.getElementById("sum-foreign-taxes"),
  ftcCarry: document.getElementById("sum-ftc-carry"),
  otherCredits: document.getElementById("sum-other-credits"),
  stdDed: document.getElementById("sum-std-ded"),
  niitThreshold: document.getElementById("sum-niit-threshold"),
  capLossCap: document.getElementById("sum-caploss-cap"),
  amtBondInterest: document.getElementById("sum-amt-bond-interest"),
  amtAdjustments: document.getElementById("sum-amt-adjustments"),
  amtFtc: document.getElementById("sum-amt-ftc"),
  otherTaxes: document.getElementById("sum-other-taxes"),
  withholding: document.getElementById("sum-withholding"),
  otherPayments: document.getElementById("sum-other-payments"),
  penalty: document.getElementById("sum-penalty")
};

const sum1116Inputs = {
  name: document.getElementById("sum1116-name"),
  ssn: document.getElementById("sum1116-ssn"),
  category: document.getElementById("sum1116-category"),
  country: document.getElementById("sum1116-country"),
  method: document.getElementById("sum1116-method"),
  carryover: document.getElementById("sum1116-carryover"),
  carryback: document.getElementById("sum1116-carryback"),
  foreignQualifiedDividends: document.getElementById("sum1116-foreign-qualified-dividends"),
  line2: document.getElementById("sum1116-line2"),
  line3a: document.getElementById("sum1116-line3a"),
  line3b: document.getElementById("sum1116-line3b"),
  line3c: document.getElementById("sum1116-line3c"),
  line3d: document.getElementById("sum1116-line3d"),
  line3e: document.getElementById("sum1116-line3e"),
  line3f: document.getElementById("sum1116-line3f"),
  line4a: document.getElementById("sum1116-line4a"),
  line4b: document.getElementById("sum1116-line4b"),
  line5: document.getElementById("sum1116-line5")
};

const sumRecalcBtn = document.getElementById("sum-recalc");
const sumAssumptions = document.getElementById("sum-assumptions");
const sumOutput = document.getElementById("sum-output");
const sumAmtOutput = document.getElementById("sum-amt-output");
const sumNiitOutput = document.getElementById("sum-niit-output");
const sum1116GenerateBtn = document.getElementById("sum1116-generate");
const sum1116Status = document.getElementById("sum1116-status");
const sum1116Preview = document.getElementById("sum1116-preview");
const summaryScenarioTabs = Array.from(document.querySelectorAll("#summary-scenario-tabs .scenario-tab"));

const state = {
  selections: [
    { income: 800000, stPct: 40 },
    { income: 1200000, stPct: 60 }
  ],
  summary: {
    activeScenario: "A",
    scenarios: {},
    form1116Scenarios: {}
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

function roundWhole(value) {
  return Math.round(value || 0);
}

function formatPdfAmount(value) {
  return roundWhole(value).toLocaleString("en-US");
}

function formatPdfDecimal(value, places = 4) {
  return Number(value || 0).toFixed(places);
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
  scenario.investmentExpenses = Math.max(0, Number(scenario.investmentExpenses) || 0);
  scenario.itemizedTaxes = Math.max(0, Number(scenario.itemizedTaxes) || 0);
  scenario.itemizedInterest = Math.max(0, Number(scenario.itemizedInterest) || 0);
  scenario.itemizedOther = Math.max(0, Number(scenario.itemizedOther) || 0);
  scenario.foreignTaxes = Math.max(0, scenario.foreignTaxes);
  scenario.ftcCarryover = Math.max(0, scenario.ftcCarryover);
  scenario.otherCredits = Math.max(0, Number(scenario.otherCredits) || 0);
  scenario.stdDeduction = Math.max(0, scenario.stdDeduction);
  scenario.niitThreshold = Math.max(0, scenario.niitThreshold);
  scenario.capLossCap = Math.max(0, scenario.capLossCap);
  scenario.amtBondInterest = Math.max(0, Number(scenario.amtBondInterest) || 0);
  scenario.amtAdjustments = Number(scenario.amtAdjustments) || 0;
  scenario.amtFtc = Math.max(0, Number(scenario.amtFtc) || 0);
  scenario.otherTaxes = Math.max(0, Number(scenario.otherTaxes) || 0);
  scenario.withholding = Math.max(0, Number(scenario.withholding) || 0);
  scenario.otherPayments = Math.max(0, Number(scenario.otherPayments) || 0);
  scenario.penalty = Math.max(0, Number(scenario.penalty) || 0);

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
      investmentExpenses: Math.max(0, base.investmentExpenses + randomInt(rand, -3000, 12000)),
      itemizedTaxes: base.itemizedTaxes,
      itemizedInterest: Math.max(0, base.itemizedInterest + randomInt(rand, -15000, 15000)),
      itemizedOther: Math.max(0, base.itemizedOther + randomInt(rand, 0, 12000)),
      foreignTaxes: base.foreignTaxes + randomSignedLargeDelta(rand),
      ftcCarryover: Math.max(0, base.ftcCarryover + randomInt(rand, 0, 50000)),
      otherCredits: Math.max(0, randomInt(rand, 0, 15000)),
      amtBondInterest: Math.max(0, randomInt(rand, 0, 10000)),
      amtAdjustments: randomInt(rand, -50000, 150000),
      amtFtc: Math.max(0, randomInt(rand, 0, 50000)),
      otherTaxes: Math.max(0, randomInt(rand, 0, 10000)),
      withholding: Math.max(0, randomInt(rand, 0, 50000)),
      otherPayments: Math.max(0, randomInt(rand, 0, 20000)),
      penalty: Math.max(0, randomInt(rand, 0, 5000))
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

function defaultForm1116ForScenario(id, scenario) {
  if (id === "B") {
    return {
      name: "",
      ssn: "",
      category: "passive",
      country: "India",
      method: "accrued",
      carryover: 0,
      carryback: 0,
      foreignQualifiedDividends: 0,
      line2: 0,
      line3a: 20000,
      line3b: 0,
      line3c: 0,
      line3d: 0,
      line3e: 0,
      line3f: 0,
      line4a: 16500,
      line4b: 0,
      line5: 0
    };
  }

  return {
    name: "",
    ssn: "",
    category: "passive",
    country: "India",
    method: "",
    carryover: 0,
    carryback: 0,
    foreignQualifiedDividends: 0,
    line2: 0,
    line3a: 0,
    line3b: 0,
    line3c: 0,
    line3d: 0,
    line3e: 0,
    line3f: 0,
    line4a: 0,
    line4b: 0,
    line5: 0
  };
}

function sanitizeForm1116(values) {
  return {
    name: (values.name || "").trim(),
    ssn: (values.ssn || "").trim(),
    category: values.category === "general" ? "general" : "passive",
    country: (values.country || "").trim(),
    method: values.method === "paid" || values.method === "accrued" ? values.method : "",
    carryover: Math.max(0, Number(values.carryover) || 0),
    carryback: Math.max(0, Number(values.carryback) || 0),
    foreignQualifiedDividends: Math.max(0, Number(values.foreignQualifiedDividends) || 0),
    line2: Number(values.line2) || 0,
    line3a: Number(values.line3a) || 0,
    line3b: Number(values.line3b) || 0,
    line3c: Number(values.line3c) || 0,
    line3d: Number(values.line3d) || 0,
    line3e: Number(values.line3e) || 0,
    line3f: Number(values.line3f) || 0,
    line4a: Number(values.line4a) || 0,
    line4b: Number(values.line4b) || 0,
    line5: Number(values.line5) || 0
  };
}

function derive1116Data(scenarioId, scenarioInputs, form1116) {
  const foreignStcg = scenarioInputs.stcg - scenarioInputs.usStcg;
  const foreignLtcg = scenarioInputs.ltcg - scenarioInputs.usLtcg;
  const foreignDividends = scenarioInputs.dividends - scenarioInputs.usDividends;
  const foreignInterest = scenarioInputs.interest - scenarioInputs.usInterest;
  const foreignOther = scenarioInputs.other - scenarioInputs.usOther;

  if (scenarioId === "B") {
    const passiveGross = SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveStcg
      + SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveLtcg
      + SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveDividends
      + SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveInterest
      + SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveRetirement;
    const passiveTaxes = SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesCapitalGains
      + SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesDividends
      + SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesInterest
      + SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesRetirement;

    const categoryGross = form1116.category === "general"
      ? SCENARIO_B_WORKBOOK_BREAKOUT.foreignGeneralOther
      : passiveGross;
    const taxesByType = form1116.category === "general"
      ? {
          dividends: 0,
          interest: 0,
          other: SCENARIO_B_WORKBOOK_BREAKOUT.generalTaxesOther,
          total: SCENARIO_B_WORKBOOK_BREAKOUT.generalTaxesOther
        }
      : {
          dividends: SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesDividends,
          interest: SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesInterest,
          other: SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesCapitalGains + SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesRetirement,
          total: passiveTaxes
        };

    return {
      foreignStcg,
      foreignLtcg,
      foreignDividends,
      foreignInterest,
      foreignOther,
      categoryGross,
      taxesByType,
      line6: form1116.line2 + form1116.line3a + form1116.line3b + form1116.line3c + form1116.line3d + form1116.line3e + form1116.line3f + form1116.line4a + form1116.line4b + form1116.line5,
      line7PreAdjustments: categoryGross - (form1116.line2 + form1116.line3a + form1116.line3b + form1116.line3c + form1116.line3d + form1116.line3e + form1116.line3f + form1116.line4a + form1116.line4b + form1116.line5),
      needsCapitalGainWorksheet: form1116.category === "passive",
      unresolvedQuestions: form1116.category === "general"
        ? [
            "General category is currently zero for Scenario B because EPF was moved to passive and the India tax refund is excluded."
          ]
        : [
            "Scenario B passive export now applies the foreign-capital-gain adjustment path directly in the PDF generator."
          ]
    };
  }

  const passiveGrossApprox = Math.max(0, foreignStcg + foreignLtcg + foreignDividends + foreignInterest);
  const generalGrossApprox = Math.max(0, foreignOther);
  const categoryGross = form1116.category === "general" ? generalGrossApprox : passiveGrossApprox;
  const approxTotalTaxes = Math.max(0, scenarioInputs.foreignTaxes);
  const taxesByType = form1116.category === "general"
    ? { dividends: 0, interest: 0, other: approxTotalTaxes, total: approxTotalTaxes }
    : { dividends: Math.max(0, foreignDividends * 0), interest: Math.max(0, foreignInterest * 0), other: approxTotalTaxes, total: approxTotalTaxes };

  return {
    foreignStcg,
    foreignLtcg,
    foreignDividends,
    foreignInterest,
    foreignOther,
    categoryGross,
    taxesByType,
    line6: form1116.line2 + form1116.line3a + form1116.line3b + form1116.line3c + form1116.line3d + form1116.line3e + form1116.line3f + form1116.line4a + form1116.line4b + form1116.line5,
    line7PreAdjustments: categoryGross - (form1116.line2 + form1116.line3a + form1116.line3b + form1116.line3c + form1116.line3d + form1116.line3e + form1116.line3f + form1116.line4a + form1116.line4b + form1116.line5),
    needsCapitalGainWorksheet: form1116.category === "passive" && (foreignStcg !== 0 || foreignLtcg !== 0),
    unresolvedQuestions: [
      "Scenario B has workbook-level FTC support. Other scenarios still need exact foreign-tax-type sourcing if you want submission-ready PDFs."
    ]
  };
}

function calcLtcgBuckets2025(taxableOrdinary, taxablePref) {
  const zeroRoom = Math.max(0, LTCG_THRESHOLDS_2025.zero - taxableOrdinary);
  const atZero = Math.min(taxablePref, zeroRoom);
  const fifteenRoom = Math.max(0, LTCG_THRESHOLDS_2025.fifteen - taxableOrdinary - atZero);
  const atFifteen = Math.min(taxablePref - atZero, fifteenRoom);
  const atTwenty = Math.max(0, taxablePref - atZero - atFifteen);
  return { atZero, atFifteen, atTwenty };
}

function getScenarioBPassiveGeneralSplit() {
  const passiveLine3d = SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveLtcg
    + SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveDividends
    + SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveInterest
    + SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveRetirement;

  const worldwideGross = passiveLine3d
    + SCENARIO_B_WORKBOOK_BREAKOUT.foreignExcludedRefund
    + SUMMARY_BASE_SCENARIO_B.usLtcg
    + SUMMARY_BASE_SCENARIO_B.usDividends
    + SUMMARY_BASE_SCENARIO_B.usInterest
    + SUMMARY_BASE_SCENARIO_B.usOther;

  const passiveRatio = passiveLine3d / worldwideGross;
  return {
    passiveLine3d,
    worldwideGross,
    passiveRatio
  };
}

function computeScenarioBSummaryCore() {
  const inputs = sanitizeSummaryScenario(cloneScenario(SUMMARY_BASE_SCENARIO_B));
  const result = calculateSummaryTax(inputs);
  const buckets = calcLtcgBuckets2025(result.taxableOrdinary, result.taxablePref);

  return {
    inputs,
    result,
    buckets
  };
}

function computeScenarioBPassiveForm(form1116) {
  const { result, buckets } = computeScenarioBSummaryCore();
  const { passiveLine3d, worldwideGross, passiveRatio } = getScenarioBPassiveGeneralSplit();

  // Foreign qualified dividends are zero under the current user-selected rule.
  const foreignQualifiedDividends = 0;
  const totalLongTermGains = SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveLtcg + SUMMARY_BASE_SCENARIO_B.usLtcg;
  const longTerm15Pool = Math.max(0, buckets.atFifteen - foreignQualifiedDividends - SUMMARY_BASE_SCENARIO_B.usDividends);
  const longTerm20Pool = Math.max(0, totalLongTermGains - longTerm15Pool);
  const foreignLongTermShare = totalLongTermGains > 0
    ? SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveLtcg / totalLongTermGains
    : 0;

  // Inference: foreign LT gains are allocated across the 15% and 20% pools pro rata to the
  // foreign share of total long-term gains once US qualified dividends are carved out.
  const foreign15Gain = longTerm15Pool * foreignLongTermShare;
  const foreign20Gain = longTerm20Pool * foreignLongTermShare;
  const adjustedForeignCapitalGain = foreign15Gain * 0.4054 + foreign20Gain * 0.5405;

  // The foreign ST capital loss offsets the 20% pool first under the Pub. 514 ordering rules.
  const adjustedForeignCapitalLoss = Math.abs(SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveStcg) * 0.5405;

  const line1a = adjustedForeignCapitalGain
    + SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveDividends
    + SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveInterest
    + SCENARIO_B_WORKBOOK_BREAKOUT.foreignPassiveRetirement;

  const line3a = form1116.line3a;
  const line3b = form1116.line3b;
  const line3c = line3a + line3b;
  const line3f = passiveRatio;
  const line3g = line3c * line3f;
  const line4a = form1116.line4a * passiveRatio;
  const line4b = form1116.line4b;
  const line5 = adjustedForeignCapitalLoss;
  const line6 = form1116.line2 + line3g + line4a + line4b + line5;
  const line7 = line1a - line6;

  const line8 = SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesCapitalGains
    + SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesDividends
    + SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesInterest
    + SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesRetirement;
  const line9 = line8;
  const line10 = form1116.carryover + form1116.carryback;
  const line11 = line9 + line10;
  const line12 = 0;
  const line13 = 0;
  const line14 = line11 - line12 + line13;
  const line15 = line7;
  const line16 = 0;
  const line17 = line15 + line16;

  const line18 = result.taxableIncome
    - (buckets.atTwenty * 0.4595)
    - (buckets.atFifteen * 0.5946)
    - buckets.atZero;
  const line19 = line18 > 0 ? line17 / line18 : 0;
  const line20 = result.regularTax;
  const line21 = line20 * line19;
  const line22 = 0;
  const line23 = line21 + line22;
  const line24 = Math.min(line14, line23);

  return {
    name: form1116.name || "",
    ssn: form1116.ssn || "",
    category: "passive",
    categoryLabel: "Passive category income",
    country: form1116.country || "India",
    method: form1116.method || "accrued",
    line1aText: "Capital gains, dividends, interest, EPF withdrawal",
    line1a,
    line2: form1116.line2,
    line3a,
    line3b,
    line3c,
    line3d: passiveLine3d,
    line3e: worldwideGross,
    line3f,
    line3g,
    line4a,
    line4b,
    line5,
    line6,
    line7,
    part2: {
      country: form1116.country || "India",
      date: "12/31/2025",
      foreignDividends: SCENARIO_B_WORKBOOK_BREAKOUT.foreignCurrencyPassiveDividends,
      foreignRents: 0,
      foreignInterest: SCENARIO_B_WORKBOOK_BREAKOUT.foreignCurrencyPassiveInterest,
      foreignOther: SCENARIO_B_WORKBOOK_BREAKOUT.foreignCurrencyPassiveOther,
      usdDividends: SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesDividends,
      usdRents: 0,
      usdInterest: SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesInterest,
      usdOther: SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesCapitalGains + SCENARIO_B_WORKBOOK_BREAKOUT.passiveTaxesRetirement,
      total: line8
    },
    line8,
    line9,
    line10,
    line11,
    line12,
    line13,
    line14,
    line15,
    line16,
    line17,
    line18,
    line19,
    line20,
    line21,
    line22,
    line23,
    line24,
    summary: {
      line27: line24,
      line28: 0,
      line32: line24,
      line33: line24,
      line34: 0,
      line35: line24
    },
    support: {
      passiveRatio,
      adjustedForeignCapitalGain,
      adjustedForeignCapitalLoss,
      foreign15Gain,
      foreign20Gain
    }
  };
}

function computeScenarioBGeneralForm(form1116) {
  const { result, buckets } = computeScenarioBSummaryCore();
  const { worldwideGross } = getScenarioBPassiveGeneralSplit();
  const line18 = result.taxableIncome
    - (buckets.atTwenty * 0.4595)
    - (buckets.atFifteen * 0.5946)
    - buckets.atZero;

  return {
    name: form1116.name || "",
    ssn: form1116.ssn || "",
    category: "general",
    categoryLabel: "General category income",
    country: form1116.country || "India",
    method: form1116.method || "accrued",
    line1aText: "No general-category foreign-source income in Scenario B",
    line1a: 0,
    line2: 0,
    line3a: form1116.line3a,
    line3b: form1116.line3b,
    line3c: form1116.line3a + form1116.line3b,
    line3d: 0,
    line3e: worldwideGross,
    line3f: 0,
    line3g: 0,
    line4a: 0,
    line4b: 0,
    line5: 0,
    line6: 0,
    line7: 0,
    part2: {
      country: form1116.country || "India",
      date: "12/31/2025",
      foreignDividends: 0,
      foreignRents: 0,
      foreignInterest: 0,
      foreignOther: 0,
      usdDividends: 0,
      usdRents: 0,
      usdInterest: 0,
      usdOther: 0,
      total: 0
    },
    line8: 0,
    line9: 0,
    line10: 0,
    line11: 0,
    line12: 0,
    line13: 0,
    line14: 0,
    line15: 0,
    line16: 0,
    line17: 0,
    line18,
    line19: 0,
    line20: result.regularTax,
    line21: 0,
    line22: 0,
    line23: 0,
    line24: 0,
    summary: null,
    support: {
      passiveRatio: 0
    }
  };
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

function calcAmtOrdinaryTax(taxableAmtOrdinary) {
  if (taxableAmtOrdinary <= 0) return 0;
  const lowerPortion = Math.min(taxableAmtOrdinary, AMT_26_RATE_CEILING_2025_MFJ);
  const upperPortion = Math.max(0, taxableAmtOrdinary - AMT_26_RATE_CEILING_2025_MFJ);
  return lowerPortion * 0.26 + upperPortion * 0.28;
}

function calcOrdinaryMarginalRate(taxableOrdinary, brackets) {
  if (taxableOrdinary <= 0) {
    return brackets[0].rate;
  }

  for (const bracket of brackets) {
    if (taxableOrdinary <= bracket.limit) {
      return bracket.rate;
    }
  }

  return brackets[brackets.length - 1].rate;
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
  const totalItemizedDeductions = inputs.itemizedTaxes + inputs.itemizedInterest + inputs.itemizedOther;
  const deductionUsed = Math.max(inputs.stdDeduction, totalItemizedDeductions);

  const taxableIncome = Math.max(0, agi - deductionUsed);
  const taxableOrdinary = Math.max(0, ordinaryIncomeBeforeDed - deductionUsed);
  const taxablePref = Math.max(0, taxableIncome - taxableOrdinary);

  const ordinaryTax = calcOrdinaryTax(taxableOrdinary, ORDINARY_BRACKETS_2025);
  const ltcgBreakdown = calcLtcgTaxBreakdown(taxableOrdinary, taxablePref, LTCG_THRESHOLDS_2025);
  const regularTax = ordinaryTax + ltcgBreakdown.tax;

  const investmentIncomeGross = Math.max(0, capNet.ordinaryCapGain + capNet.prefCapGain + inputs.dividends + inputs.interest);
  const investmentExpensesUsed = Math.min(investmentIncomeGross, Math.max(0, inputs.investmentExpenses));
  const nii = Math.max(0, investmentIncomeGross - investmentExpensesUsed);
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
  const otherNonrefundableCreditsAllowed = Math.min(Math.max(0, inputs.otherCredits), Math.max(0, regularTax - ftcAllowed));

  const amtDeductionAddback = deductionUsed > inputs.stdDeduction
    ? inputs.itemizedTaxes
    : inputs.stdDeduction;
  const amtBaseIncome = Math.max(0, taxableIncome + amtDeductionAddback + inputs.amtBondInterest + inputs.amtAdjustments);
  const amtExemptionReduction = Math.max(0, amtBaseIncome - AMT_EXEMPTION_PHASEOUT_2025_MFJ) * 0.25;
  const amtExemption = Math.max(0, AMT_EXEMPTION_2025_MFJ - amtExemptionReduction);
  const amtTaxableIncome = Math.max(0, amtBaseIncome - amtExemption);
  const amtPrefIncome = taxablePref;
  const amtTaxableOrdinary = Math.max(0, amtTaxableIncome - amtPrefIncome);
  const amtLtcgBreakdown = calcLtcgTaxBreakdown(amtTaxableOrdinary, amtPrefIncome, LTCG_THRESHOLDS_2025);
  const amtOrdinaryTax = calcAmtOrdinaryTax(amtTaxableOrdinary);
  const tentativeMinimumTax = amtOrdinaryTax + amtLtcgBreakdown.tax;
  const regularTaxForAmtComparison = Math.max(0, regularTax - ftcAllowed);
  const amtFtcUsed = Math.min(Math.max(0, inputs.amtFtc), tentativeMinimumTax);
  const amt = Math.max(0, tentativeMinimumTax - amtFtcUsed - regularTaxForAmtComparison);

  const taxBeforeCredits = regularTax + amt;
  const totalCredits = Math.min(taxBeforeCredits, ftcAllowed + otherNonrefundableCreditsAllowed);
  const taxAfterCredits = Math.max(0, taxBeforeCredits - totalCredits);
  const totalOtherTaxes = niit + inputs.otherTaxes;
  const totalTax = taxAfterCredits + totalOtherTaxes;
  const totalPayments = inputs.withholding + inputs.otherPayments;
  const amountOwedBeforePenalty = Math.max(0, totalTax - totalPayments);
  const refund = Math.max(0, totalPayments - totalTax - inputs.penalty);
  const amountOwed = Math.max(0, totalTax + inputs.penalty - totalPayments);
  const usFederalIncomeTax = totalTax;
  const effectiveRate = totalIncome !== 0 ? (totalTax / totalIncome) * 100 : 0;
  const ordinaryMarginalRate = calcOrdinaryMarginalRate(taxableOrdinary, ORDINARY_BRACKETS_2025);

  return {
    inputs,
    capNet,
    totalItemizedDeductions,
    deductionUsed,
    deductionType: deductionUsed === totalItemizedDeductions && totalItemizedDeductions > inputs.stdDeduction ? "itemized" : "standard",
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
    investmentIncomeGross,
    investmentExpensesUsed,
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
    otherNonrefundableCreditsAllowed,
    amtDeductionAddback,
    amtBaseIncome,
    amtExemption,
    amtTaxableIncome,
    amtTaxableOrdinary,
    amtOrdinaryTax,
    amtLtcgBreakdown,
    tentativeMinimumTax,
    regularTaxForAmtComparison,
    amtFtcUsed,
    amt,
    taxBeforeCredits,
    totalCredits,
    taxAfterCredits,
    totalOtherTaxes,
    totalTax,
    totalPayments,
    amountOwedBeforePenalty,
    refund,
    amountOwed,
    ordinaryMarginalRate,
    usFederalIncomeTax,
    effectiveRate,
    afterTaxIncome: totalIncome - totalTax
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
    investmentExpenses: parseNumber(sumInputs.investmentExpenses),
    itemizedTaxes: parseNumber(sumInputs.itemizedTaxes),
    itemizedInterest: parseNumber(sumInputs.itemizedInterest),
    itemizedOther: parseNumber(sumInputs.itemizedOther),
    usStcg: parseNumber(sumInputs.usStcg),
    usLtcg: parseNumber(sumInputs.usLtcg),
    usDividends,
    usInterest: parseNumber(sumInputs.usInterest),
    usOther: parseNumber(sumInputs.usOther),
    foreignTaxes: parseNumber(sumInputs.foreignTaxes),
    ftcCarryover: parseNumber(sumInputs.ftcCarry),
    otherCredits: parseNumber(sumInputs.otherCredits),
    stdDeduction: parseNumber(sumInputs.stdDed, 31500),
    niitThreshold: parseNumber(sumInputs.niitThreshold, 250000),
    capLossCap: parseNumber(sumInputs.capLossCap, 3000),
    amtBondInterest: parseNumber(sumInputs.amtBondInterest),
    amtAdjustments: parseNumber(sumInputs.amtAdjustments),
    amtFtc: parseNumber(sumInputs.amtFtc),
    otherTaxes: parseNumber(sumInputs.otherTaxes),
    withholding: parseNumber(sumInputs.withholding),
    otherPayments: parseNumber(sumInputs.otherPayments),
    penalty: parseNumber(sumInputs.penalty)
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
    investmentExpenses: parseNumber(sumInputs.investmentExpenses),
    itemizedTaxes: parseNumber(sumInputs.itemizedTaxes),
    itemizedInterest: parseNumber(sumInputs.itemizedInterest),
    itemizedOther: parseNumber(sumInputs.itemizedOther),
    usStcg: parseNumber(sumInputs.usStcg),
    usLtcg: parseNumber(sumInputs.usLtcg),
    usDividends: parseNumber(sumInputs.usDividends),
    usInterest: parseNumber(sumInputs.usInterest),
    usOther: parseNumber(sumInputs.usOther),
    foreignTaxes: parseNumber(sumInputs.foreignTaxes),
    ftcCarryover: parseNumber(sumInputs.ftcCarry),
    otherCredits: parseNumber(sumInputs.otherCredits),
    stdDeduction: parseNumber(sumInputs.stdDed, 31500),
    niitThreshold: parseNumber(sumInputs.niitThreshold, 250000),
    capLossCap: parseNumber(sumInputs.capLossCap, 3000),
    amtBondInterest: parseNumber(sumInputs.amtBondInterest),
    amtAdjustments: parseNumber(sumInputs.amtAdjustments),
    amtFtc: parseNumber(sumInputs.amtFtc),
    otherTaxes: parseNumber(sumInputs.otherTaxes),
    withholding: parseNumber(sumInputs.withholding),
    otherPayments: parseNumber(sumInputs.otherPayments),
    penalty: parseNumber(sumInputs.penalty)
  };
}

function writeSummaryScenarioToForm(values) {
  sumInputs.stcg.value = String(Math.round(values.stcg));
  sumInputs.ltcg.value = String(Math.round(values.ltcg));
  sumInputs.dividends.value = String(Math.round(values.dividends));
  sumInputs.qualifiedDividends.value = values.qualifiedDividends === null ? "" : String(Math.round(values.qualifiedDividends));
  sumInputs.interest.value = String(Math.round(values.interest));
  sumInputs.other.value = String(Math.round(values.other));
  sumInputs.investmentExpenses.value = String(Math.round(values.investmentExpenses));
  sumInputs.itemizedTaxes.value = String(Math.round(values.itemizedTaxes));
  sumInputs.itemizedInterest.value = String(Math.round(values.itemizedInterest));
  sumInputs.itemizedOther.value = String(Math.round(values.itemizedOther));
  sumInputs.usStcg.value = String(Math.round(values.usStcg));
  sumInputs.usLtcg.value = String(Math.round(values.usLtcg));
  sumInputs.usDividends.value = String(Math.round(values.usDividends));
  sumInputs.usInterest.value = String(Math.round(values.usInterest));
  sumInputs.usOther.value = String(Math.round(values.usOther));
  sumInputs.foreignTaxes.value = String(Math.round(values.foreignTaxes));
  sumInputs.ftcCarry.value = String(Math.round(values.ftcCarryover));
  sumInputs.otherCredits.value = String(Math.round(values.otherCredits));
  sumInputs.stdDed.value = String(Math.round(values.stdDeduction));
  sumInputs.niitThreshold.value = String(Math.round(values.niitThreshold));
  sumInputs.capLossCap.value = String(Math.round(values.capLossCap));
  sumInputs.amtBondInterest.value = String(Math.round(values.amtBondInterest));
  sumInputs.amtAdjustments.value = String(Math.round(values.amtAdjustments));
  sumInputs.amtFtc.value = String(Math.round(values.amtFtc));
  sumInputs.otherTaxes.value = String(Math.round(values.otherTaxes));
  sumInputs.withholding.value = String(Math.round(values.withholding));
  sumInputs.otherPayments.value = String(Math.round(values.otherPayments));
  sumInputs.penalty.value = String(Math.round(values.penalty));
}

function readForm1116DraftFromForm() {
  return sanitizeForm1116({
    name: sum1116Inputs.name?.value || "",
    ssn: sum1116Inputs.ssn?.value || "",
    category: sum1116Inputs.category?.value || "passive",
    country: sum1116Inputs.country?.value || "",
    method: sum1116Inputs.method?.value || "",
    carryover: parseNumber(sum1116Inputs.carryover),
    carryback: parseNumber(sum1116Inputs.carryback),
    foreignQualifiedDividends: parseNumber(sum1116Inputs.foreignQualifiedDividends),
    line2: parseNumber(sum1116Inputs.line2),
    line3a: parseNumber(sum1116Inputs.line3a),
    line3b: parseNumber(sum1116Inputs.line3b),
    line3c: parseNumber(sum1116Inputs.line3c),
    line3d: parseNumber(sum1116Inputs.line3d),
    line3e: parseNumber(sum1116Inputs.line3e),
    line3f: parseNumber(sum1116Inputs.line3f),
    line4a: parseNumber(sum1116Inputs.line4a),
    line4b: parseNumber(sum1116Inputs.line4b),
    line5: parseNumber(sum1116Inputs.line5)
  });
}

function writeForm1116ToForm(values) {
  const safe = sanitizeForm1116(values);
  sum1116Inputs.name.value = safe.name;
  sum1116Inputs.ssn.value = safe.ssn;
  sum1116Inputs.category.value = safe.category;
  sum1116Inputs.country.value = safe.country;
  sum1116Inputs.method.value = safe.method;
  sum1116Inputs.carryover.value = String(Math.round(safe.carryover));
  sum1116Inputs.carryback.value = String(Math.round(safe.carryback));
  sum1116Inputs.foreignQualifiedDividends.value = String(Math.round(safe.foreignQualifiedDividends));
  sum1116Inputs.line2.value = String(Math.round(safe.line2));
  sum1116Inputs.line3a.value = String(Math.round(safe.line3a));
  sum1116Inputs.line3b.value = String(Math.round(safe.line3b));
  sum1116Inputs.line3c.value = String(Math.round(safe.line3c));
  sum1116Inputs.line3d.value = String(Math.round(safe.line3d));
  sum1116Inputs.line3e.value = String(Math.round(safe.line3e));
  sum1116Inputs.line3f.value = String(Math.round(safe.line3f));
  sum1116Inputs.line4a.value = String(Math.round(safe.line4a));
  sum1116Inputs.line4b.value = String(Math.round(safe.line4b));
  sum1116Inputs.line5.value = String(Math.round(safe.line5));
}

function renderSummaryAssumptions() {
  if (!sumAssumptions) return;
  const assumptions = [
    "Tax year is treated as 2025 MFJ for this tab (2025 brackets and LTCG thresholds).",
    "Dividends taxed at lower rates default to US-source dividends when the input is left blank.",
    "The calculator now follows a Form 1040-style waterfall: regular tax, AMT, credits, other taxes, payments, and amount due / refund.",
    "The larger of itemized deductions or the standard deduction is used for regular tax.",
    "AMT is modeled with the 2025 MFJ exemption, phaseout, and 26% / 28% rates; capital gains and qualified dividends keep preferential rates.",
    "AMT adds back SALT if itemized deductions are used. Other AMT adjustments / preferences are user inputs.",
    "Tax-free bond interest that counts for AMT is a separate input because it can raise minimum tax even when it is not part of regular taxable income.",
    "AMT foreign tax credit is a separate user input. If left at 0, AMT may be overstated relative to a prepared return.",
    "FTC is applied only against regular tax (not NIIT) using a proportional limitation approximation.",
    "Foreign-source income is derived from total minus US-source components by category.",
    "Foreign taxable income for FTC limit is approximated by proportional allocation: taxable income × (foreign gross / worldwide gross).",
    "NIIT is placed in Other Taxes, not inside regular tax, and is not reduced by FTC.",
    "NIIT uses MAGI ≈ AGI assumption in this model.",
    "Investment income for NIIT starts with net capital gains + dividends + interest, then subtracts the input field for expenses tied to investing.",
    "APTC / Form 8962 and other uncommon Schedule 2 / Schedule 3 items are included only if entered manually in the generic input fields."
  ];
  sumAssumptions.innerHTML = assumptions.map((a) => `<li>${a}</li>`).join("");
}

function renderSummaryOutput(result) {
  if (!sumOutput) return;
  const sections = [
    {
      title: "Income",
      rows: [
        ["Wages, salaries, tips, etc.", toMoney(0), "Not separately modeled in this workbook-derived scenario set"],
        ["Interest income", toMoney(result.inputs.interest), "Input amount"],
        ["Dividend income", toMoney(result.inputs.dividends), "Ordinary + qualified dividends"],
        ["Qualified dividends", toMoney(result.qualifiedDividends), "These are the dividends that use the lower capital-gains tax rates"],
        ["Capital gain or loss", toMoney(result.capNet.ordinaryCapGain + result.capNet.prefCapGain - result.capNet.capLossDeduction), "Net capital result after current-year loss deduction"],
        ["Short-term capital gain or loss", toMoney(result.inputs.stcg), "Used in ordinary-income tax brackets"],
        ["Long-term capital gain or loss", toMoney(result.inputs.ltcg), "Used in lower capital-gains tax rates"],
        ["Other income", toMoney(result.inputs.other), "Residual ordinary income input"],
        ["Total income", toMoney(result.totalIncome), "STCG + LTCG + dividends + interest + other"],
        ["Total adjustments", toMoney(0), "No above-the-line adjustments modeled"],
        ["Adjusted gross income", toMoney(result.agi), "Income after modeled adjustments"]
      ]
    },
    {
      title: "Itemized Deductions",
      rows: [
        ["Taxes", toMoney(result.inputs.itemizedTaxes), "Schedule A style SALT input"],
        ["Interest", toMoney(result.inputs.itemizedInterest), "Schedule A style mortgage / investment interest input"],
        ["Other itemized deductions", toMoney(result.inputs.itemizedOther), "Additional itemized deduction input"],
        ["Total itemized deductions", toMoney(result.totalItemizedDeductions), "Taxes + interest + other itemized"]
      ]
    },
    {
      title: "Tax Computation",
      rows: [
        ["Standard deduction", toMoney(result.stdDeduction), "MFJ input"],
        ["Larger of itemized or standard deduction", toMoney(result.deductionUsed), `Using ${result.deductionType} deduction for regular tax`],
        ["Taxable income", toMoney(result.taxableIncome), "AGI - deduction used"],
        ["Tax before AMT and APTC", toMoney(result.regularTax), "Regular 2025 tax with LTCG / qualified dividend stacking"],
        ["Alternative minimum tax", toMoney(result.amt), `Tentative minimum tax ${toMoney(result.tentativeMinimumTax)} less regular tax for AMT comparison ${toMoney(result.regularTaxForAmtComparison)} and AMT FTC ${toMoney(result.amtFtcUsed)}`],
        ["Tax before credits", toMoney(result.taxBeforeCredits), "Regular tax + AMT"],
        ["Ordinary income tax bracket", `${(result.ordinaryMarginalRate * 100).toFixed(1)}%`, "Based on taxable ordinary income"]
      ]
    },
    {
      title: "Credits",
      rows: [
        ["Foreign tax credit", toMoney(result.ftcAllowed), "Regular-tax FTC used in this model"],
        ["Other nonrefundable credits", toMoney(result.otherNonrefundableCreditsAllowed), "Generic credit input"],
        ["Total credits", toMoney(result.totalCredits), "FTC + other nonrefundable credits actually used"],
        ["Tax after credits", toMoney(result.taxAfterCredits), "Tax before credits - total credits"]
      ]
    },
    {
      title: "Other Taxes",
      rows: [
        ["Net investment income tax", toMoney(result.niit), "Schedule 2 style NIIT layer"],
        ["Other taxes", toMoney(result.inputs.otherTaxes), "Manual additional taxes besides NIIT"],
        ["Total other taxes", toMoney(result.totalOtherTaxes), "NIIT + other taxes"],
        ["Total tax", toMoney(result.totalTax), "Tax after credits + total other taxes"]
      ]
    },
    {
      title: "Payments & Refundable Credits",
      rows: [
        ["Federal income tax withheld", toMoney(result.inputs.withholding), "Input amount"],
        ["Other payments / refundable credits", toMoney(result.inputs.otherPayments), "Generic payment / refundable credit input"],
        ["Total payments", toMoney(result.totalPayments), "Withholding + other payments"]
      ]
    },
    {
      title: "Refund Or Amount Due",
      rows: [
        ["Underpayment penalty", toMoney(result.inputs.penalty), "Manual penalty input"],
        ["Amount owed before penalty", toMoney(result.amountOwedBeforePenalty), "max(total tax - total payments, 0)"],
        ["Amount you owe", toMoney(result.amountOwed), "Total tax + penalty - total payments"],
        ["Refund", toMoney(result.refund), "Shown when payments exceed tax and penalty"]
      ]
    },
    {
      title: "Tax Rates And Detail",
      rows: [
        ["Taxable ordinary income", toMoney(result.taxableOrdinary), "Ordinary base for regular tax"],
        ["Taxable LTCG / qualified dividends", toMoney(result.taxablePref), "Preferential base after stacking"],
        ["LTCG taxed at 0%", toMoney(result.ltcgBreakdown.atZero), "Regular tax stacking bucket"],
        ["LTCG taxed at 15%", toMoney(result.ltcgBreakdown.atFifteen), "Regular tax stacking bucket"],
        ["LTCG taxed at 20%", toMoney(result.ltcgBreakdown.atTwenty), "Regular tax stacking bucket"],
        ["AMT exemption used", toMoney(result.amtExemption), "2025 MFJ exemption after phaseout"],
        ["AMT bond-interest addback", toMoney(result.inputs.amtBondInterest), "Tax-free bond interest that still counts for AMT"],
        ["AMT taxable income", toMoney(result.amtTaxableIncome), "AMTI after exemption"],
        ["AMT taxable ordinary income", toMoney(result.amtTaxableOrdinary), "AMTI ordinary portion after exemption"],
        ["Derived foreign gross income", toMoney(result.foreignIncomeDerived), "FTC numerator on gross basis"],
        ["Worldwide gross income", toMoney(result.worldwideIncomeForLimit), "FTC denominator on gross basis"],
        ["Foreign / worldwide ratio", toPercent(result.foreignIncomeRatio * 100), "Used for approximate FTC limitation"],
        ["Approx foreign taxable income", toMoney(result.foreignTaxableIncomeApprox), "Taxable income × foreign gross / worldwide gross"],
        ["FTC limit", toMoney(result.ftcLimit), "Regular tax × foreign taxable income ratio"],
        ["FTC available", toMoney(result.ftcAvailable), "Foreign taxes + carryover input"],
        ["Investment income before expenses", toMoney(result.investmentIncomeGross), "Interest + dividends + net gains before investment expenses"],
        ["Expenses tied to investing used", toMoney(result.investmentExpensesUsed), "Reduces net investment income for NIIT"],
        ["NII used for NIIT", toMoney(result.nii), "Net investment income after expenses"],
        ["MAGI excess over NIIT threshold", toMoney(result.magiExcess), "AGI - NIIT threshold"],
        ["Effective tax rate", toPercent(result.effectiveRate), "Total tax / total income"],
        ["After-tax income", toMoney(result.afterTaxIncome), "Total income - total tax"]
      ]
    }
  ];

  sumOutput.innerHTML = sections.map((section) => {
    const header = `<tr class="summary-section-row"><td colspan="3">${section.title}</td></tr>`;
    const rows = section.rows
      .map(([k, v, n]) => `<tr><td>${k}</td><td>${v}</td><td>${n}</td></tr>`)
      .join("");
    return header + rows;
  }).join("");
}

function renderAmtDetail(result) {
  if (!sumAmtOutput) return;

  const rows = [
    ["Line 1a. Subtract Schedule 1-A (Form 1040), line 37, from Form 1040, line 14", toMoney(result.deductionUsed), "Using the deduction shown on the main return"],
    ["Line 1b. Subtract line 1a from Form 1040, line 11b", toMoney(result.taxableIncome), "Regular taxable income before minimum-tax adjustments"],
    ["Line 2a. Taxes from Schedule A (Form 1040), line 7", toMoney(result.inputs.itemizedTaxes), "State and local taxes added back for AMT"],
    ["Line 2g. Interest from specified private activity bonds exempt from regular tax", toMoney(result.inputs.amtBondInterest), "Use only if applicable"],
    ["Line 3. Other adjustments, including income-based related adjustments", toMoney(result.inputs.amtAdjustments), "Catch-all AMT adjustment input"],
    ["Line 4. Alternative minimum taxable income", toMoney(result.amtBaseIncome), "Combine taxable income and AMT adjustments"],
    ["Line 5. Exemption", toMoney(result.amtExemption), "2025 MFJ exemption after any phaseout"],
    ["Line 6. Subtract line 5 from line 4", toMoney(result.amtTaxableIncome), "Amount subject to AMT rate computation"],
    ["Line 7. Tax", toMoney(result.tentativeMinimumTax), "AMT tax using lower capital-gain/dividend rates where applicable"],
    ["Line 8. Alternative minimum tax foreign tax credit", toMoney(result.amtFtcUsed), "Separate FTC for AMT"],
    ["Line 9. Tentative minimum tax", toMoney(Math.max(0, result.tentativeMinimumTax - result.amtFtcUsed)), "Line 7 minus line 8"],
    ["Line 10. Regular tax for AMT comparison", toMoney(result.regularTaxForAmtComparison), "Regular tax after regular foreign tax credit"],
    ["Line 11. AMT", toMoney(result.amt), "Line 9 minus line 10, if positive"]
  ];

  sumAmtOutput.innerHTML = rows
    .map(([k, v, n]) => `<tr><td>${k}</td><td>${v}</td><td>${n}</td></tr>`)
    .join("");
}

function renderNiitDetail(result) {
  if (!sumNiitOutput) return;

  const netGainForInvestmentTax = Math.max(0, result.capNet.ordinaryCapGain + result.capNet.prefCapGain);
  const totalInvestmentIncome = result.inputs.interest + result.inputs.dividends + netGainForInvestmentTax;

  const rows = [
    ["Line 1. Taxable interest", toMoney(result.inputs.interest), "Taxable interest included in net investment income"],
    ["Line 2. Ordinary dividends", toMoney(result.inputs.dividends), "Total ordinary dividends"],
    ["Line 3. Annuities", toMoney(0), "Not separately modeled"],
    ["Line 4c. Combine lines 4a and 4b", toMoney(0), "Business / rental investment income not separately modeled"],
    ["Line 5d. Combine lines 5a through 5c", toMoney(netGainForInvestmentTax), "Net gain or loss from disposition of property"],
    ["Line 8. Total investment income", toMoney(totalInvestmentIncome), "Combine lines 1, 2, 3, 4c, 5d, 6, and 7"],
    ["Line 9a. Investment interest expenses", toMoney(result.investmentExpensesUsed), "Investment expenses allocated to investment income"],
    ["Line 11. Total deductions and modifications", toMoney(result.investmentExpensesUsed), "Add lines 9d and 10"],
    ["Line 12. Net investment income", toMoney(result.nii), "Line 8 minus line 11"],
    ["Line 13. Modified adjusted gross income", toMoney(result.agi), "This model uses AGI as the modified amount"],
    ["Line 14. Threshold based on filing status", toMoney(result.inputs.niitThreshold), "MFJ threshold"],
    ["Line 15. Subtract line 14 from line 13", toMoney(result.magiExcess), "Modified AGI minus threshold"],
    ["Line 16. Enter the smaller of line 12 or line 15", toMoney(result.niitBase), "Amount subject to NIIT"],
    ["Line 17. Net investment income tax for individuals", toMoney(result.niit), "3.8% of line 16"]
  ];

  sumNiitOutput.innerHTML = rows
    .map(([k, v, n]) => `<tr><td>${k}</td><td>${v}</td><td>${n}</td></tr>`)
    .join("");
}

function render1116Status(message) {
  if (!sum1116Status) return;
  sum1116Status.textContent = message;
}

function get1116ReadyMessage() {
  const scenarioId = state.summary.activeScenario;
  const form1116 = state.summary.form1116Scenarios[scenarioId];
  if (!form1116) {
    return "Form 1116 status unavailable.";
  }

  const missing = [];
  if (!form1116.country) missing.push("country");
  if (!form1116.method) missing.push("paid vs accrued election");

  if (missing.length) {
    return `Need ${missing.join(", ")} before an exact IRS Form 1116 PDF can be generated for Scenario ${scenarioId}.`;
  }

  if (scenarioId !== "B") {
    return `Exact Form 1116 PDF export is currently wired only for Scenario B. Switch to Scenario B to generate the passive and general forms.`;
  }

  return "Scenario B is ready. Generate will export a passive Form 1116 and a zero-income general Form 1116.";
}

function format1116BlockingMessage(derived) {
  if (!derived.unresolvedQuestions.length) {
    return "Form 1116 PDF generation can proceed.";
  }

  if (derived.needsCapitalGainWorksheet) {
    return "The remaining blocker is internal IRS worksheet math for foreign capital gains. You do not need to provide more input for that specific item.";
  }

  return `Remaining blocker: ${derived.unresolvedQuestions.join(" ")}`;
}

function render1116Preview() {
  if (!sum1116Preview) return;
  const scenarioId = state.summary.activeScenario;
  const scenarioInputs = state.summary.scenarios[scenarioId];
  const form1116 = state.summary.form1116Scenarios[scenarioId];
  if (!scenarioInputs || !form1116) {
    sum1116Preview.innerHTML = `<tr><td>Form 1116</td><td>Not available</td><td>No scenario selected.</td></tr>`;
    return;
  }

  let rows;
  if (scenarioId === "B") {
    const passive = computeScenarioBPassiveForm(form1116);
    const general = computeScenarioBGeneralForm(form1116);
    rows = [
      ["Scenario", scenarioId, "Current summary scenario"],
      ["Country", form1116.country || "Missing", "Part I, line h / line i"],
      ["Claim method", form1116.method || "Missing", "Part II header requires paid or accrued"],
      ["Passive line 1a", toMoney(passive.line1a), "Adjusted capital gains + dividends + interest + EPF withdrawal"],
      ["Passive line 3a", toMoney(passive.line3a), "Itemized deductions allocated per your input"],
      ["Passive line 3d", toMoney(passive.line3d), "Gross foreign-source passive income used in ratio"],
      ["Passive line 3e", toMoney(passive.line3e), "Worldwide gross income used in ratio"],
      ["Passive line 3f", passive.line3f.toFixed(4), "Line 3d / line 3e"],
      ["Passive line 3g", toMoney(passive.line3g), "Allocated line 3 deductions"],
      ["Passive line 4a", toMoney(passive.line4a), "Allocated home mortgage interest"],
      ["Passive line 5", toMoney(passive.line5), "Adjusted foreign-source capital loss"],
      ["Passive line 7", toMoney(passive.line7), "Net foreign-source taxable income before page 2 adjustments"],
      ["Passive line 8 / 9", toMoney(passive.line8), "Passive foreign taxes accrued"],
      ["Passive line 14", toMoney(passive.line14), "Foreign taxes available for credit"],
      ["Passive line 18", toMoney(passive.line18), "Capital-gain-rate-adjusted FTC denominator"],
      ["Passive line 20", toMoney(passive.line20), "2025 Form 1040 tax before FTC"],
      ["Passive line 21", toMoney(passive.line21), "Maximum passive-basket credit"],
      ["Passive line 24", toMoney(passive.line24), "Allowed passive FTC"],
      ["General line 1a", toMoney(general.line1a), "Zero because Scenario B has no general-category foreign-source income"],
      ["General line 24", toMoney(general.line24), "Zero allowed general-category FTC for Scenario B"],
      ["Status", "Ready", "Scenario B export now fills the official PDF directly"]
    ];
  } else {
    const derived = derive1116Data(scenarioId, scenarioInputs, form1116);
    rows = [
      ["Scenario", scenarioId, "Current summary scenario"],
      ["Category", form1116.category === "general" ? "General category income" : "Passive category income", "Separate Form 1116 required per category"],
      ["Country", form1116.country || "Missing", "Part I, line i"],
      ["Claim method", form1116.method || "Missing", "Part II header requires paid or accrued"],
      ["Foreign ST capital gain", toMoney(derived.foreignStcg), "Scenario-level foreign-source amount"],
      ["Foreign LT capital gain", toMoney(derived.foreignLtcg), "Scenario-level foreign-source amount"],
      ["Foreign dividends", toMoney(derived.foreignDividends), "Scenario-level foreign-source amount"],
      ["Foreign interest", toMoney(derived.foreignInterest), "Scenario-level foreign-source amount"],
      ["Foreign other income", toMoney(derived.foreignOther), "Needed mainly for general category"],
      ["Line 1a candidate gross income", toMoney(derived.categoryGross), derived.needsCapitalGainWorksheet ? "Capital-gain / qualified-dividend worksheet still applies" : "Current category gross income"],
      ["Part II taxes on dividends", toMoney(derived.taxesByType.dividends), "Form 1116 Part II dividend tax bucket"],
      ["Part II taxes on interest", toMoney(derived.taxesByType.interest), "Form 1116 Part II interest tax bucket"],
      ["Part II other foreign taxes", toMoney(derived.taxesByType.other), "Capital gains or other category taxes"],
      ["Part II total foreign taxes", toMoney(derived.taxesByType.total), "Before line 12 reductions"],
      ["Line 10 carryover + carryback", toMoney(form1116.carryover + form1116.carryback), "Carryover plus carryback into 2025"],
      ["Line 6 total deductions", toMoney(derived.line6), "Sum of lines 2 through 5 inputs currently entered"],
      ["Line 7 pre-adjustment amount", toMoney(derived.line7PreAdjustments), "Line 1a minus entered deductions"],
      ["Blocking items", String(derived.unresolvedQuestions.length), derived.unresolvedQuestions.join(" ")]
    ];
  }

  sum1116Preview.innerHTML = rows.map(([k, v, n]) => `<tr><td>${k}</td><td>${v}</td><td>${n}</td></tr>`).join("");
  render1116Status(get1116ReadyMessage());
}

function drawRectText(page, rect, text, options = {}) {
  if (text === null || text === undefined || text === "") return;
  const [x1, y1, x2, y2] = rect;
  const fontSize = options.fontSize || 9;
  const padX = options.padX ?? 2;
  const padY = options.padY ?? 2;
  const align = options.align || "left";
  const textWidth = (text.length || 1) * fontSize * 0.5;

  let x = x1 + padX;
  if (align === "right") x = x2 - padX - textWidth;
  if (align === "center") x = x1 + ((x2 - x1) - textWidth) / 2;

  page.drawText(String(text), {
    x,
    y: y1 + padY,
    size: fontSize
  });
}

function drawCheckMark(page, rect) {
  const [x1, y1, x2, y2] = rect;
  page.drawText("X", {
    x: x1 + 0.7,
    y: y1 - 0.4,
    size: 10
  });
}

function drawPdfAmount(page, rect, value) {
  drawRectText(page, rect, formatPdfAmount(value), { align: "right" });
}

function drawPdfDecimal(page, rect, value, places = 4) {
  drawRectText(page, rect, formatPdfDecimal(value, places), { align: "right" });
}

function addSupportingStatementPage(pdfDoc, formData) {
  const page = pdfDoc.addPage([612, 792]);
  const lines = [
    `Form 1116 Supporting Statement - Scenario B - ${formData.categoryLabel}`,
    "",
    `Country: ${formData.country}`,
    `Method: ${formData.method}`,
    "",
    "Line 3a detail:",
    `Real estate taxes for home: ${formatPdfAmount(formData.line3a)}`,
    "",
    "Line 4a worksheet:",
    `Gross foreign source income: ${formatPdfAmount(formData.line3d)}`,
    `Gross income from all sources: ${formatPdfAmount(formData.line3e)}`,
    `Ratio: ${formatPdfDecimal(formData.line3f, 4)}`,
    `Deductible home mortgage interest: ${formatPdfAmount(16500)}`,
    `Line 4a apportioned amount: ${formatPdfAmount(formData.line4a)}`,
    ""
  ];

  if (formData.category === "passive") {
    lines.push(
      "Passive-category notes:",
      `Adjusted foreign capital gain included on line 1a: ${formatPdfAmount(formData.support.adjustedForeignCapitalGain)}`,
      `Adjusted foreign capital loss included on line 5: ${formatPdfAmount(formData.support.adjustedForeignCapitalLoss)}`,
      `Foreign LT gain allocated to 15% group: ${formatPdfAmount(formData.support.foreign15Gain)}`,
      `Foreign LT gain allocated to 20% group: ${formatPdfAmount(formData.support.foreign20Gain)}`,
      "India tax refund was excluded from FTC income and foreign taxes."
    );
  } else {
    lines.push("Scenario B has no general-category foreign-source income after moving EPF to passive and excluding the India tax refund.");
  }

  let y = 748;
  lines.forEach((line, idx) => {
    page.drawText(line, {
      x: 48,
      y,
      size: idx === 0 ? 13 : 10
    });
    y -= idx === 0 ? 24 : 16;
  });
}

async function buildForm1116Pdf(formData, summaryMode) {
  if (!window.PDFLib?.PDFDocument) {
    throw new Error("PDF library failed to load.");
  }

  const { PDFDocument } = window.PDFLib;
  const existingPdfBytes = await fetch("./shared/irs_f1116_2025.pdf").then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const form = pdfDoc.getForm();
  const [page1, page2] = pdfDoc.getPages();
  const p1 = FORM1116_LAYOUT.page1;
  const p2 = FORM1116_LAYOUT.page2;

  form.getTextField("topmostSubform[0].Page1[0].f1_01[0]").setText(formData.name || "");
  form.getTextField("topmostSubform[0].Page1[0].f1_02[0]").setText(formData.ssn || "");
  const passiveBox = form.getCheckBox("topmostSubform[0].Page1[0].LineC-D_ReadOrder[0].c1_1[0]");
  const generalBox = form.getCheckBox("topmostSubform[0].Page1[0].LineC-D_ReadOrder[0].c1_1[1]");
  if (formData.category === "passive") {
    passiveBox.check();
    generalBox.uncheck();
  } else {
    generalBox.check();
    passiveBox.uncheck();
  }
  const paidBox = form.getCheckBox("topmostSubform[0].Page1[0].Part2[0].ActiveHeaderElements[0].c1_3[0]");
  const accruedBox = form.getCheckBox("topmostSubform[0].Page1[0].Part2[0].ActiveHeaderElements[0].c1_3[1]");
  if (formData.method === "paid") {
    paidBox.check();
    accruedBox.uncheck();
  } else {
    accruedBox.check();
    paidBox.uncheck();
  }
  drawRectText(page1, p1.residentCountry, formData.country);
  drawRectText(page1, p1.countryA, formData.country);
  drawRectText(page1, p1.line1aText, formData.line1aText, { fontSize: 8 });
  drawPdfAmount(page1, p1.line1aA, formData.line1a);
  drawPdfAmount(page1, p1.line1aTotal, formData.line1a);
  drawPdfAmount(page1, p1.line2A, formData.line2);
  drawPdfAmount(page1, p1.line2Total, formData.line2);
  drawPdfAmount(page1, p1.line3aA, formData.line3a);
  drawPdfAmount(page1, p1.line3aTotal, formData.line3a);
  drawPdfAmount(page1, p1.line3bA, formData.line3b);
  drawPdfAmount(page1, p1.line3bTotal, formData.line3b);
  drawPdfAmount(page1, p1.line3cA, formData.line3c);
  drawPdfAmount(page1, p1.line3cTotal, formData.line3c);
  drawPdfAmount(page1, p1.line3dA, formData.line3d);
  drawPdfAmount(page1, p1.line3dTotal, formData.line3d);
  drawPdfAmount(page1, p1.line3eA, formData.line3e);
  drawPdfAmount(page1, p1.line3eTotal, formData.line3e);
  drawPdfDecimal(page1, p1.line3fA, formData.line3f);
  drawPdfDecimal(page1, p1.line3fTotal, formData.line3f);
  drawPdfAmount(page1, p1.line3gA, formData.line3g);
  drawPdfAmount(page1, p1.line3gTotal, formData.line3g);
  drawPdfAmount(page1, p1.line4aA, formData.line4a);
  drawPdfAmount(page1, p1.line4aTotal, formData.line4a);
  drawPdfAmount(page1, p1.line4bA, formData.line4b);
  drawPdfAmount(page1, p1.line4bTotal, formData.line4b);
  drawPdfAmount(page1, p1.line5A, formData.line5);
  drawPdfAmount(page1, p1.line5Total, formData.line5);
  drawPdfAmount(page1, p1.line6, formData.line6);
  drawPdfAmount(page1, p1.line7, formData.line7);
  drawRectText(page1, p1.part2Country, formData.part2.country);
  drawRectText(page1, p1.part2Date, formData.part2.date);
  drawPdfAmount(page1, p1.part2ForeignDiv, formData.part2.foreignDividends);
  drawPdfAmount(page1, p1.part2ForeignRent, formData.part2.foreignRents);
  drawPdfAmount(page1, p1.part2ForeignInterest, formData.part2.foreignInterest);
  drawPdfAmount(page1, p1.part2ForeignOther, formData.part2.foreignOther);
  drawPdfAmount(page1, p1.part2UsdDiv, formData.part2.usdDividends);
  drawPdfAmount(page1, p1.part2UsdRent, formData.part2.usdRents);
  drawPdfAmount(page1, p1.part2UsdInterest, formData.part2.usdInterest);
  drawPdfAmount(page1, p1.part2UsdOther, formData.part2.usdOther);
  drawPdfAmount(page1, p1.line8, formData.line8);

  drawPdfAmount(page2, p2.line9, formData.line9);
  drawPdfAmount(page2, p2.line10, formData.line10);
  drawPdfAmount(page2, p2.line11, formData.line11);
  drawPdfAmount(page2, p2.line12, formData.line12);
  drawPdfAmount(page2, p2.line13, formData.line13);
  drawPdfAmount(page2, p2.line14, formData.line14);
  drawPdfAmount(page2, p2.line15, formData.line15);
  drawPdfAmount(page2, p2.line16, formData.line16);
  drawPdfAmount(page2, p2.line17, formData.line17);
  drawPdfAmount(page2, p2.line18, formData.line18);
  drawPdfDecimal(page2, p2.line19, formData.line19);
  drawPdfAmount(page2, p2.line20, formData.line20);
  drawPdfAmount(page2, p2.line21, formData.line21);
  drawPdfAmount(page2, p2.line22, formData.line22);
  drawPdfAmount(page2, p2.line23, formData.line23);
  drawPdfAmount(page2, p2.line24, formData.line24);

  if (summaryMode && formData.summary) {
    drawPdfAmount(page2, p2.line27, formData.summary.line27);
    drawPdfAmount(page2, p2.line28, formData.summary.line28);
    drawPdfAmount(page2, p2.line32, formData.summary.line32);
    drawPdfAmount(page2, p2.line33, formData.summary.line33);
    drawPdfAmount(page2, p2.line34, formData.summary.line34);
    drawPdfAmount(page2, p2.line35, formData.summary.line35);
  }

  addSupportingStatementPage(pdfDoc, formData);
  form.flatten();
  return pdfDoc.save();
}

function triggerPdfDownload(bytes, filename) {
  const blob = new Blob([bytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function recalcSummary() {
  const inputs = readSummaryInputs();
  const result = calculateSummaryTax(inputs);
  renderSummaryOutput(result);
  renderAmtDetail(result);
  renderNiitDetail(result);
  render1116Preview();
}

function saveActiveSummaryScenario() {
  const activeId = state.summary.activeScenario;
  if (!activeId) return;
  state.summary.scenarios[activeId] = sanitizeSummaryScenario(readSummaryDraftFromForm());
}

function saveActiveForm1116Scenario() {
  const activeId = state.summary.activeScenario;
  if (!activeId) return;
  state.summary.form1116Scenarios[activeId] = sanitizeForm1116(readForm1116DraftFromForm());
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
  if (!state.summary.form1116Scenarios[id]) {
    state.summary.form1116Scenarios[id] = defaultForm1116ForScenario(id, scenario);
  }
  writeForm1116ToForm(state.summary.form1116Scenarios[id]);
  recalcSummary();
}

function switchSummaryScenario(id) {
  if (!state.summary.scenarios[id]) return;
  saveActiveSummaryScenario();
  saveActiveForm1116Scenario();
  loadSummaryScenario(id);
}

function seedSummaryDefaults() {
  if (!sumInputs.stcg) return;
  state.summary.scenarios = buildSimulatedSummaryScenarios();
  state.summary.form1116Scenarios = Object.fromEntries(
    Object.entries(state.summary.scenarios).map(([id, scenario]) => [id, defaultForm1116ForScenario(id, scenario)])
  );
  loadSummaryScenario("A");
}

function bindSummaryEvents() {
  if (!sumRecalcBtn) return;

  sumRecalcBtn.addEventListener("click", () => {
    saveActiveSummaryScenario();
    saveActiveForm1116Scenario();
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

  Object.values(sum1116Inputs).forEach((input) => {
    if (!input) return;
    input.addEventListener("input", () => {
      saveActiveForm1116Scenario();
      render1116Preview();
    });
    input.addEventListener("change", () => {
      saveActiveForm1116Scenario();
      render1116Preview();
    });
  });

  if (sum1116GenerateBtn) {
    sum1116GenerateBtn.addEventListener("click", async () => {
      saveActiveSummaryScenario();
      saveActiveForm1116Scenario();

      const scenarioId = state.summary.activeScenario;
      const form1116 = state.summary.form1116Scenarios[scenarioId];
      const missing = [];

      if (!form1116.country) missing.push("country");
      if (!form1116.method) missing.push("paid vs accrued election");

      if (missing.length) {
        render1116Status(`Need ${missing.join(", ")} before an exact IRS Form 1116 PDF can be generated for Scenario ${scenarioId}.`);
        return;
      }

      if (scenarioId !== "B") {
        render1116Status(`Exact Form 1116 PDF export is currently wired only for Scenario B. Switch to Scenario B to generate the passive and general forms.`);
        return;
      }

      try {
        render1116Status("Generating Scenario B passive and general Form 1116 PDFs...");
        const passiveData = computeScenarioBPassiveForm(form1116);
        const generalData = computeScenarioBGeneralForm(form1116);
        const passivePdf = await buildForm1116Pdf(passiveData, true);
        const generalPdf = await buildForm1116Pdf(generalData, false);
        triggerPdfDownload(passivePdf, "scenario-b-form1116-passive-summary.pdf");
        setTimeout(() => {
          triggerPdfDownload(generalPdf, "scenario-b-form1116-general.pdf");
        }, 250);
        render1116Status("Scenario B Form 1116 PDFs generated: passive summary form and general form.");
      } catch (err) {
        render1116Status(`Form 1116 PDF generation failed: ${err.message || String(err)}`);
      }
    });
  }
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
