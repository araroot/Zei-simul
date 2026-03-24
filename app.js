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
const FTC_LINE18_15_REDUCTION = 0.5946;
const FTC_LINE18_20_REDUCTION = 0.4595;
const FTC_LINE1A_15_INCLUDE = 1 - FTC_LINE18_15_REDUCTION;
const FTC_LINE1A_20_INCLUDE = 1 - FTC_LINE18_20_REDUCTION;

const HEATMAP_INCOME_BUCKETS = [600000, 800000, 1000000, 1200000, 1400000];
const AFTER_TAX_INCOME_BUCKETS = [
  500000, 600000, 700000, 800000, 900000, 1000000,
  1100000, 1200000, 1300000, 1400000, 1500000
];
const STCG_POINTS = [0, 20, 40, 60, 80, 100];
const SUMMARY_SCENARIO_IDS = ["A", "B", "C", "D", "E"];

const SUMMARY_BASE_SCENARIO_B = {
  stcg: 0,
  ltcg: 741452,
  dividends: 24036,
  qualifiedDividends: 24036,
  interest: 22672,
  other: 75449,
  regularTaxOverride: 127709,
  investmentExpenses: 6467,
  itemizedTaxes: 10000,
  itemizedInterest: 26878,
  itemizedOther: 0,
  usStcg: 0,
  usLtcg: 0,
  usDividends: 0,
  usInterest: 0,
  usOther: 0,
  foreignTaxes: 124000,
  ftcCarryover: 0,
  otherCredits: 0,
  stdDeduction: 31500,
  niitThreshold: 250000,
  capLossCap: 3000,
  amtBondInterest: 0,
  amtLine7Override: 107688,
  amtAdjustments: 0,
  amtFtc: 81143,
  otherTaxes: 0,
  withholding: 0,
  otherPayments: 0,
  penalty: 2089
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

const FORM1040_FIELDS = {
  page2: {
    line11: "topmostSubform[0].Page2[0].f2_02[0]",
    line12: "topmostSubform[0].Page2[0].f2_03[0]",
    line13a: "topmostSubform[0].Page2[0].f2_04[0]",
    line13b: "topmostSubform[0].Page2[0].f2_05[0]",
    line14: "topmostSubform[0].Page2[0].f2_06[0]",
    line15: "topmostSubform[0].Page2[0].f2_07[0]",
    line16: "topmostSubform[0].Page2[0].f2_08[0]",
    line17: "topmostSubform[0].Page2[0].f2_09[0]",
    line18: "topmostSubform[0].Page2[0].f2_10[0]",
    line19: "topmostSubform[0].Page2[0].f2_11[0]",
    line20: "topmostSubform[0].Page2[0].f2_12[0]",
    line21: "topmostSubform[0].Page2[0].f2_13[0]",
    line22: "topmostSubform[0].Page2[0].f2_14[0]",
    line23: "topmostSubform[0].Page2[0].f2_15[0]",
    line24: "topmostSubform[0].Page2[0].f2_16[0]",
    line25d: "topmostSubform[0].Page2[0].f2_20[0]",
    line31: "topmostSubform[0].Page2[0].f2_27[0]",
    line32: "topmostSubform[0].Page2[0].f2_28[0]",
    line33: "topmostSubform[0].Page2[0].f2_29[0]",
    line34: "topmostSubform[0].Page2[0].f2_30[0]",
    line35a: "topmostSubform[0].Page2[0].f2_31[0]",
    line36: "topmostSubform[0].Page2[0].f2_34[0]",
    line37: "topmostSubform[0].Page2[0].f2_35[0]",
    line38: "topmostSubform[0].Page2[0].f2_36[0]"
  }
};

const FORM6251_FIELDS = {
  name: "topmostSubform[0].Page1[0].f1_1[0]",
  ssn: "topmostSubform[0].Page1[0].f1_2[0]",
  line1a: "topmostSubform[0].Page1[0].f1_3[0]",
  line1b: "topmostSubform[0].Page1[0].f1_4[0]",
  line2a: "topmostSubform[0].Page1[0].f1_5[0]",
  line2g: "topmostSubform[0].Page1[0].f1_11[0]",
  line3: "topmostSubform[0].Page1[0].f1_25[0]",
  line4: "topmostSubform[0].Page1[0].f1_26[0]",
  line5: "topmostSubform[0].Page1[0].f1_27[0]",
  line6: "topmostSubform[0].Page1[0].f1_28[0]",
  line7: "topmostSubform[0].Page1[0].f1_29[0]",
  line8: "topmostSubform[0].Page1[0].f1_30[0]",
  line9: "topmostSubform[0].Page1[0].f1_31[0]",
  line10: "topmostSubform[0].Page1[0].f1_32[0]",
  line11: "topmostSubform[0].Page1[0].f1_33[0]"
};

const FORM8960_FIELDS = {
  name: "topmostSubform[0].Page1[0].f1_1[0]",
  ssn: "topmostSubform[0].Page1[0].f1_2[0]",
  line1: "topmostSubform[0].Page1[0].f1_3[0]",
  line2: "topmostSubform[0].Page1[0].f1_4[0]",
  line3: "topmostSubform[0].Page1[0].f1_5[0]",
  line4c: "topmostSubform[0].Page1[0].f1_8[0]",
  line5a: "topmostSubform[0].Page1[0].f1_9[0]",
  line5d: "topmostSubform[0].Page1[0].f1_12[0]",
  line8: "topmostSubform[0].Page1[0].f1_15[0]",
  line9a: "topmostSubform[0].Page1[0].f1_16[0]",
  line9d: "topmostSubform[0].Page1[0].f1_19[0]",
  line11: "topmostSubform[0].Page1[0].f1_21[0]",
  line12: "topmostSubform[0].Page1[0].f1_22[0]",
  line13: "topmostSubform[0].Page1[0].f1_23[0]",
  line14: "topmostSubform[0].Page1[0].f1_24[0]",
  line15: "topmostSubform[0].Page1[0].f1_25[0]",
  line16: "topmostSubform[0].Page1[0].f1_26[0]",
  line17: "topmostSubform[0].Page1[0].f1_27[0]"
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
  regularTaxOverride: document.getElementById("sum-override-line16"),
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
  amtLine7Override: document.getElementById("sum-override-amt-line7"),
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
const sum1040Output = document.getElementById("sum-1040-output");
const sumOutput = document.getElementById("sum-output");
const sumAmtOutput = document.getElementById("sum-amt-output");
const sumNiitOutput = document.getElementById("sum-niit-output");
const sum1116GenerateBtn = document.getElementById("sum1116-generate");
const sum1116Status = document.getElementById("sum1116-status");
const sum1116Preview = document.getElementById("sum1116-preview");
const summaryScenarioTabs = Array.from(document.querySelectorAll("#summary-scenario-tabs .scenario-tab"));

const builderInputs = {
  wagesUs: document.getElementById("builder-wages-us"),
  interestUs: document.getElementById("builder-interest-us"),
  interestForeign: document.getElementById("builder-interest-foreign"),
  dividendsUs: document.getElementById("builder-dividends-us"),
  dividendsForeign: document.getElementById("builder-dividends-foreign"),
  qualifiedDividendsUs: document.getElementById("builder-qualified-dividends-us"),
  qualifiedDividendsForeign: document.getElementById("builder-qualified-dividends-foreign"),
  stGainUs: document.getElementById("builder-st-gain-us"),
  stLossUs: document.getElementById("builder-st-loss-us"),
  ltGainUs: document.getElementById("builder-lt-gain-us"),
  ltLossUs: document.getElementById("builder-lt-loss-us"),
  stGainForeign: document.getElementById("builder-st-gain-foreign"),
  stLossForeign: document.getElementById("builder-st-loss-foreign"),
  ltGainForeign: document.getElementById("builder-lt-gain-foreign"),
  ltLossForeign: document.getElementById("builder-lt-loss-foreign"),
  otherUs: document.getElementById("builder-other-us"),
  foreignPassiveOther: document.getElementById("builder-foreign-passive-other"),
  foreignGeneralIncome: document.getElementById("builder-foreign-general-income"),
  foreignExcludedIncome: document.getElementById("builder-foreign-excluded-income"),
  salt: document.getElementById("builder-salt"),
  mortgageInterest: document.getElementById("builder-mortgage-interest"),
  otherItemized: document.getElementById("builder-other-itemized"),
  investmentExpenses: document.getElementById("builder-investment-expenses"),
  directPassiveDeductions: document.getElementById("builder-direct-passive-deductions"),
  directGeneralDeductions: document.getElementById("builder-direct-general-deductions"),
  amtBondInterest: document.getElementById("builder-amt-bond-interest"),
  amtAdjustments: document.getElementById("builder-amt-adjustments"),
  ftaxPassiveGains: document.getElementById("builder-ftax-passive-gains"),
  ftaxPassiveDividends: document.getElementById("builder-ftax-passive-dividends"),
  ftaxPassiveInterest: document.getElementById("builder-ftax-passive-interest"),
  ftaxPassiveOther: document.getElementById("builder-ftax-passive-other"),
  ftaxGeneral: document.getElementById("builder-ftax-general"),
  ftcCarryPassive: document.getElementById("builder-ftc-carry-passive"),
  ftcCarryGeneral: document.getElementById("builder-ftc-carry-general"),
  amtFtc: document.getElementById("builder-amt-ftc"),
  otherCredits: document.getElementById("builder-other-credits"),
  otherTaxes: document.getElementById("builder-other-taxes"),
  withholding: document.getElementById("builder-withholding"),
  otherPayments: document.getElementById("builder-other-payments"),
  penalty: document.getElementById("builder-penalty"),
  stdDeduction: document.getElementById("builder-std-ded"),
  niitThreshold: document.getElementById("builder-niit-threshold"),
  capLossCap: document.getElementById("builder-caploss-cap")
};

const builderRecalcBtn = document.getElementById("builder-recalc");
const builderRecalcBottomBtn = document.getElementById("builder-recalc-bottom");
const builderResetBtn = document.getElementById("builder-reset");
const builderResetBottomBtn = document.getElementById("builder-reset-bottom");
const builderGeneratePdfBtn = document.getElementById("builder-generate-pdf");
const builderGeneratePdfBottomBtn = document.getElementById("builder-generate-pdf-bottom");
const builderPdfStatus = document.getElementById("builder-pdf-status");
const builderBridgeOutput = document.getElementById("builder-bridge-output");
const builder1040Output = document.getElementById("builder-1040-output");
const builderAmtOutput = document.getElementById("builder-amt-output");
const builderNiitOutput = document.getElementById("builder-niit-output");
const builder1116PassiveOutput = document.getElementById("builder-1116-passive-output");
const builder1116GeneralOutput = document.getElementById("builder-1116-general-output");
const builderAssumptions = document.getElementById("builder-assumptions");
const builderMetricUsIncome = document.getElementById("builder-metric-us-income");
const builderMetricForeignPassive = document.getElementById("builder-metric-foreign-passive");
const builderMetricForeignGeneral = document.getElementById("builder-metric-foreign-general");
const builderMetricDeductions = document.getElementById("builder-metric-deductions");
const builderMetricFtc = document.getElementById("builder-metric-ftc");
const builderMetricAmt = document.getElementById("builder-metric-amt");
const builderMetricTotalTax = document.getElementById("builder-metric-total-tax");
const builderMetricBalance = document.getElementById("builder-metric-balance");
const builderMetricBalanceNote = document.getElementById("builder-metric-balance-note");

const DEFAULT_BUILDER_INPUTS = {
  wagesUs: 0,
  interestUs: 0,
  interestForeign: 22672,
  dividendsUs: 0,
  dividendsForeign: 24036,
  qualifiedDividendsUs: 0,
  qualifiedDividendsForeign: 24036,
  stGainUs: 0,
  stLossUs: 0,
  ltGainUs: 0,
  ltLossUs: 0,
  stGainForeign: 0,
  stLossForeign: 0,
  ltGainForeign: 741452,
  ltLossForeign: 0,
  otherUs: 0,
  foreignPassiveOther: 75449,
  foreignGeneralIncome: 0,
  foreignExcludedIncome: 0,
  salt: 10000,
  mortgageInterest: 26878,
  otherItemized: 0,
  investmentExpenses: 6467,
  directPassiveDeductions: 0,
  directGeneralDeductions: 0,
  amtBondInterest: 0,
  amtAdjustments: 0,
  ftaxPassiveGains: 124000,
  ftaxPassiveDividends: 0,
  ftaxPassiveInterest: 0,
  ftaxPassiveOther: 0,
  ftaxGeneral: 0,
  ftcCarryPassive: 0,
  ftcCarryGeneral: 0,
  amtFtc: 81143,
  otherCredits: 0,
  otherTaxes: 0,
  withholding: 0,
  otherPayments: 0,
  penalty: 2089,
  stdDeduction: 31500,
  niitThreshold: 250000,
  capLossCap: 3000
};

const state = {
  selections: [
    { income: 800000, stPct: 40 },
    { income: 1200000, stPct: 60 }
  ],
  summary: {
    activeScenario: "A",
    scenarios: {},
    form1116Scenarios: {}
  },
  builder: {
    inputs: { ...DEFAULT_BUILDER_INPUTS }
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

function grossPositive(...values) {
  return values.reduce((sum, value) => sum + Math.max(0, Number(value) || 0), 0);
}

function renderRows(target, rows) {
  if (!target) return;
  target.innerHTML = rows
    .map(([label, value, note]) => `<tr><td>${label}</td><td>${value}</td><td>${note}</td></tr>`)
    .join("");
}

function cloneScenario(values) {
  return {
    ...values,
    qualifiedDividends: values.qualifiedDividends === null ? null : Number(values.qualifiedDividends),
    regularTaxOverride: values.regularTaxOverride === null ? null : Number(values.regularTaxOverride),
    amtLine7Override: values.amtLine7Override === null ? null : Number(values.amtLine7Override),
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
  scenario.regularTaxOverride = scenario.regularTaxOverride === null || scenario.regularTaxOverride === "" || Number.isNaN(Number(scenario.regularTaxOverride))
    ? null
    : Math.max(0, Number(scenario.regularTaxOverride));
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
  scenario.amtLine7Override = scenario.amtLine7Override === null || scenario.amtLine7Override === "" || Number.isNaN(Number(scenario.amtLine7Override))
    ? null
    : Math.max(0, Number(scenario.amtLine7Override));
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

function sanitizeBuilderInputs(values) {
  const safe = {
    wagesUs: Math.max(0, Number(values.wagesUs) || 0),
    interestUs: Math.max(0, Number(values.interestUs) || 0),
    interestForeign: Math.max(0, Number(values.interestForeign) || 0),
    dividendsUs: Math.max(0, Number(values.dividendsUs) || 0),
    dividendsForeign: Math.max(0, Number(values.dividendsForeign) || 0),
    qualifiedDividendsUs: Math.max(0, Number(values.qualifiedDividendsUs) || 0),
    qualifiedDividendsForeign: Math.max(0, Number(values.qualifiedDividendsForeign) || 0),
    stGainUs: Math.max(0, Number(values.stGainUs) || 0),
    stLossUs: Math.max(0, Number(values.stLossUs) || 0),
    ltGainUs: Math.max(0, Number(values.ltGainUs) || 0),
    ltLossUs: Math.max(0, Number(values.ltLossUs) || 0),
    stGainForeign: Math.max(0, Number(values.stGainForeign) || 0),
    stLossForeign: Math.max(0, Number(values.stLossForeign) || 0),
    ltGainForeign: Math.max(0, Number(values.ltGainForeign) || 0),
    ltLossForeign: Math.max(0, Number(values.ltLossForeign) || 0),
    otherUs: Number(values.otherUs) || 0,
    foreignPassiveOther: Math.max(0, Number(values.foreignPassiveOther) || 0),
    foreignGeneralIncome: Math.max(0, Number(values.foreignGeneralIncome) || 0),
    foreignExcludedIncome: Math.max(0, Number(values.foreignExcludedIncome) || 0),
    salt: Math.max(0, Number(values.salt) || 0),
    mortgageInterest: Math.max(0, Number(values.mortgageInterest) || 0),
    otherItemized: Math.max(0, Number(values.otherItemized) || 0),
    investmentExpenses: Math.max(0, Number(values.investmentExpenses) || 0),
    directPassiveDeductions: Math.max(0, Number(values.directPassiveDeductions) || 0),
    directGeneralDeductions: Math.max(0, Number(values.directGeneralDeductions) || 0),
    amtBondInterest: Math.max(0, Number(values.amtBondInterest) || 0),
    amtAdjustments: Number(values.amtAdjustments) || 0,
    ftaxPassiveGains: Math.max(0, Number(values.ftaxPassiveGains) || 0),
    ftaxPassiveDividends: Math.max(0, Number(values.ftaxPassiveDividends) || 0),
    ftaxPassiveInterest: Math.max(0, Number(values.ftaxPassiveInterest) || 0),
    ftaxPassiveOther: Math.max(0, Number(values.ftaxPassiveOther) || 0),
    ftaxGeneral: Math.max(0, Number(values.ftaxGeneral) || 0),
    ftcCarryPassive: Math.max(0, Number(values.ftcCarryPassive) || 0),
    ftcCarryGeneral: Math.max(0, Number(values.ftcCarryGeneral) || 0),
    amtFtc: Math.max(0, Number(values.amtFtc) || 0),
    otherCredits: Math.max(0, Number(values.otherCredits) || 0),
    otherTaxes: Math.max(0, Number(values.otherTaxes) || 0),
    withholding: Math.max(0, Number(values.withholding) || 0),
    otherPayments: Math.max(0, Number(values.otherPayments) || 0),
    penalty: Math.max(0, Number(values.penalty) || 0),
    stdDeduction: Math.max(0, Number(values.stdDeduction) || 0),
    niitThreshold: Math.max(0, Number(values.niitThreshold) || 0),
    capLossCap: Math.max(0, Number(values.capLossCap) || 0)
  };

  safe.qualifiedDividendsUs = clamp(safe.qualifiedDividendsUs, 0, safe.dividendsUs);
  safe.qualifiedDividendsForeign = clamp(safe.qualifiedDividendsForeign, 0, safe.dividendsForeign);
  safe.stcgUs = safe.stGainUs - safe.stLossUs;
  safe.stcgForeign = safe.stGainForeign - safe.stLossForeign;
  safe.ltcgUs = safe.ltGainUs - safe.ltLossUs;
  safe.ltcgForeign = safe.ltGainForeign - safe.ltLossForeign;
  return safe;
}

function builderToSummaryInputs(builder) {
  const safe = sanitizeBuilderInputs(builder);
  return sanitizeSummaryScenario({
    stcg: safe.stcgUs + safe.stcgForeign,
    ltcg: safe.ltcgUs + safe.ltcgForeign,
    dividends: safe.dividendsUs + safe.dividendsForeign,
    qualifiedDividends: safe.qualifiedDividendsUs + safe.qualifiedDividendsForeign,
    interest: safe.interestUs + safe.interestForeign,
    other: safe.wagesUs + safe.otherUs + safe.foreignPassiveOther + safe.foreignGeneralIncome,
    regularTaxOverride: null,
    investmentExpenses: safe.investmentExpenses,
    itemizedTaxes: safe.salt,
    itemizedInterest: safe.mortgageInterest,
    itemizedOther: safe.otherItemized,
    usStcg: safe.stcgUs,
    usLtcg: safe.ltcgUs,
    usDividends: safe.dividendsUs,
    usInterest: safe.interestUs,
    usOther: safe.wagesUs + safe.otherUs,
    foreignTaxes: safe.ftaxPassiveGains + safe.ftaxPassiveDividends + safe.ftaxPassiveInterest + safe.ftaxPassiveOther + safe.ftaxGeneral,
    ftcCarryover: safe.ftcCarryPassive + safe.ftcCarryGeneral,
    otherCredits: safe.otherCredits,
    stdDeduction: safe.stdDeduction,
    niitThreshold: safe.niitThreshold,
    capLossCap: safe.capLossCap,
    amtBondInterest: safe.amtBondInterest,
    amtLine7Override: null,
    amtAdjustments: safe.amtAdjustments,
    amtFtc: safe.amtFtc,
    otherTaxes: safe.otherTaxes,
    withholding: safe.withholding,
    otherPayments: safe.otherPayments,
    penalty: safe.penalty
  });
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
      regularTaxOverride: null,
      investmentExpenses: Math.max(0, base.investmentExpenses + randomInt(rand, -3000, 12000)),
      itemizedTaxes: base.itemizedTaxes,
      itemizedInterest: Math.max(0, base.itemizedInterest + randomInt(rand, -15000, 15000)),
      itemizedOther: Math.max(0, base.itemizedOther + randomInt(rand, 0, 12000)),
      foreignTaxes: base.foreignTaxes + randomSignedLargeDelta(rand),
      ftcCarryover: Math.max(0, base.ftcCarryover + randomInt(rand, 0, 50000)),
      otherCredits: Math.max(0, randomInt(rand, 0, 15000)),
      amtBondInterest: Math.max(0, randomInt(rand, 0, 10000)),
      amtLine7Override: null,
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
  const line19 = line18 > 0 ? clamp(line17 / line18, 0, 1) : 0;
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
  const regularTaxComputed = ordinaryTax + ltcgBreakdown.tax;
  const regularTax = inputs.regularTaxOverride ?? regularTaxComputed;

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
  const tentativeMinimumTaxComputed = amtOrdinaryTax + amtLtcgBreakdown.tax;
  const tentativeMinimumTax = inputs.amtLine7Override ?? tentativeMinimumTaxComputed;
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
    regularTaxComputed,
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
    tentativeMinimumTaxComputed,
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
  const regularTaxOverrideRaw = (sumInputs.regularTaxOverride?.value ?? "").trim();
  const amtLine7OverrideRaw = (sumInputs.amtLine7Override?.value ?? "").trim();

  return sanitizeSummaryScenario({
    stcg: parseNumber(sumInputs.stcg),
    ltcg: parseNumber(sumInputs.ltcg),
    dividends: totalDividends,
    qualifiedDividends,
    interest: parseNumber(sumInputs.interest),
    other: parseNumber(sumInputs.other),
    regularTaxOverride: regularTaxOverrideRaw === "" ? null : parseNumber(sumInputs.regularTaxOverride),
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
    amtLine7Override: amtLine7OverrideRaw === "" ? null : parseNumber(sumInputs.amtLine7Override),
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
  const regularTaxOverrideRaw = (sumInputs.regularTaxOverride?.value ?? "").trim();
  const amtLine7OverrideRaw = (sumInputs.amtLine7Override?.value ?? "").trim();
  return {
    stcg: parseNumber(sumInputs.stcg),
    ltcg: parseNumber(sumInputs.ltcg),
    dividends: parseNumber(sumInputs.dividends),
    qualifiedDividends: qualifiedRaw === "" ? null : parseNumber(sumInputs.qualifiedDividends),
    interest: parseNumber(sumInputs.interest),
    other: parseNumber(sumInputs.other),
    regularTaxOverride: regularTaxOverrideRaw === "" ? null : parseNumber(sumInputs.regularTaxOverride),
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
    amtLine7Override: amtLine7OverrideRaw === "" ? null : parseNumber(sumInputs.amtLine7Override),
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
  sumInputs.regularTaxOverride.value = values.regularTaxOverride === null ? "" : String(Math.round(values.regularTaxOverride));
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
  sumInputs.amtLine7Override.value = values.amtLine7Override === null ? "" : String(Math.round(values.amtLine7Override));
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
        ["Tax before AMT and APTC", toMoney(result.regularTax), result.inputs.regularTaxOverride === null ? "Regular 2025 tax with LTCG / qualified dividend stacking" : `Using known Form 1040 line 16 override. Computed amount was ${toMoney(result.regularTaxComputed)}`],
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

function get1040PreviewRows(result) {
  const schedule3Line1 = result.ftcAllowed;
  const schedule3Line8 = result.ftcAllowed + result.otherNonrefundableCreditsAllowed;
  const schedule3Line15 = result.inputs.otherPayments;
  const form1040Line20 = schedule3Line8;
  const form1040Line19 = 0;
  const form1040Line21 = form1040Line19 + form1040Line20;
  const form1040Line22 = result.taxAfterCredits;
  const schedule2Line2 = result.amt;
  const schedule2Line12 = result.niit;
  const schedule2Line21 = result.totalOtherTaxes;
  const form1040Line17 = schedule2Line2;
  const form1040Line18 = result.taxBeforeCredits;
  const form1040Line23 = schedule2Line21;
  const form1040Line24 = result.totalTax;
  const form1040Line25d = result.inputs.withholding;
  const form1040Line31 = schedule3Line15;
  const form1040Line32 = result.totalPayments;
  const form1040Line33 = result.totalPayments;
  const form1040Line34 = result.refund;
  const form1040Line37 = result.amountOwedBeforePenalty;
  const form1040Line38 = result.inputs.penalty;

  return [
    ["Form 1040, line 9. Total income", toMoney(result.totalIncome), "Wages / other ordinary income + interest + dividends + net capital gain or loss included in this model."],
    ["Form 1040, line 10. Adjustments to income", toMoney(0), "No above-the-line adjustments modeled"],
    ["Form 1040, line 11. Adjusted gross income", toMoney(result.agi), "Total income minus modeled above-the-line adjustments. This builder currently assumes no above-the-line adjustments."],
    ["Form 1040, line 12. Standard deduction or itemized deductions", toMoney(result.deductionUsed), `Using ${result.deductionType} deduction`],
    ["Form 1040, line 13. Qualified business income deduction", toMoney(0), "Not modeled"],
    ["Form 1040, line 14. Add lines 12 and 13", toMoney(result.deductionUsed), "Total deductions"],
    ["Form 1040, line 15. Taxable income", toMoney(result.taxableIncome), "AGI minus total deductions"],
    ["Form 1040, line 16. Tax", toMoney(result.regularTax), result.inputs.regularTaxOverride === null ? "Regular tax before Schedule 2 taxes and credits" : `Using known line 16 override. Computed amount was ${toMoney(result.regularTaxComputed)}`],
    ["Schedule 2 (Form 1040), line 2. Alternative minimum tax", toMoney(schedule2Line2), "From the Form 6251 detail"],
    ["Form 1040, line 17. Amount from Schedule 2, line 3", toMoney(form1040Line17), "Schedule 2 tax carried to Form 1040"],
    ["Form 1040, line 18. Add lines 16 and 17", toMoney(form1040Line18), "Tax before credits"],
    ["Schedule 3 (Form 1040), line 1. Foreign tax credit", toMoney(schedule3Line1), "FTC from Form 1116 / limitation math"],
    ["Schedule 3 (Form 1040), line 8. Total nonrefundable credits", toMoney(schedule3Line8), "Credits carried to Form 1040, line 20"],
    ["Form 1040, line 19. Child tax credit or credit for other dependents", toMoney(form1040Line19), "Not modeled"],
    ["Form 1040, line 20. Amount from Schedule 3, line 8", toMoney(form1040Line20), "Total nonrefundable credits"],
    ["Form 1040, line 21. Add lines 19 and 20", toMoney(form1040Line21), "Reserved / not modeled separately here"],
    ["Form 1040, line 22. Subtract line 21 from line 18", toMoney(form1040Line22), "Tax after credits"],
    ["Schedule 2 (Form 1040), line 12. Net investment income tax", toMoney(schedule2Line12), "From the Form 8960 detail"],
    ["Schedule 2 (Form 1040), line 21. Total other taxes", toMoney(schedule2Line21), "NIIT plus any manual other taxes input"],
    ["Form 1040, line 23. Other taxes, including self-employment tax", toMoney(form1040Line23), "Amount from Schedule 2, line 21"],
    ["Form 1040, line 24. Total tax", toMoney(form1040Line24), "Line 22 plus line 23"],
    ["Form 1040, line 25d. Federal income tax withheld", toMoney(form1040Line25d), "Withholding input"],
    ["Schedule 3 (Form 1040), line 15. Other payments and refundable credits", toMoney(schedule3Line15), "Other payments input"],
    ["Form 1040, line 31. Amount from Schedule 3, line 15", toMoney(form1040Line31), "Payments carried from Schedule 3"],
    ["Form 1040, line 32. Add lines 25a through 31", toMoney(form1040Line32), "Total payments and refundable credits"],
    ["Form 1040, line 33. Total payments", toMoney(form1040Line33), "Same as line 32 in this model"],
    ["Form 1040, line 34. Refund", toMoney(form1040Line34), "Shown if payments exceed total tax and penalty"],
    ["Form 1040, line 37. Amount you owe", toMoney(form1040Line37), "Amount owed before underpayment penalty"],
    ["Form 1040, line 38. Estimated tax penalty", toMoney(form1040Line38), "Underpayment penalty input"],
    ["Bottom line after line 38", toMoney(result.amountOwed), "Total amount due including penalty"]
  ];
}

function render1040Preview(result, target = sum1040Output) {
  renderRows(target, get1040PreviewRows(result));
}

function getAmtDetailRows(result) {
  const line2aValue = result.deductionType === "itemized" ? result.inputs.itemizedTaxes : result.stdDeduction;
  return [
    ["Line 1a. Subtract Schedule 1-A (Form 1040), line 37, from Form 1040, line 14", toMoney(result.deductionUsed), "Using the deduction shown on the main return"],
    ["Line 1b. Subtract line 1a from Form 1040, line 11b", toMoney(result.taxableIncome), "Regular taxable income before minimum-tax adjustments"],
    ["Line 2a. Taxes from Schedule A (Form 1040), line 7", toMoney(line2aValue), result.deductionType === "itemized" ? "State and local taxes added back for AMT." : "Standard deduction added back for AMT because this builder run is not itemizing."],
    ["Line 2g. Interest from specified private activity bonds exempt from regular tax", toMoney(result.inputs.amtBondInterest), "Use only if applicable"],
    ["Line 3. Other adjustments, including income-based related adjustments", toMoney(result.inputs.amtAdjustments), "Catch-all AMT adjustment input"],
    ["Line 4. Alternative minimum taxable income", toMoney(result.amtBaseIncome), "Combine taxable income and AMT adjustments"],
    ["Line 5. Exemption", toMoney(result.amtExemption), "2025 MFJ exemption after any phaseout"],
    ["Line 6. Subtract line 5 from line 4", toMoney(result.amtTaxableIncome), "Amount subject to AMT rate computation"],
    ["Line 7. Tax", toMoney(result.tentativeMinimumTax), result.inputs.amtLine7Override === null ? "AMT tax using lower capital-gain/dividend rates where applicable" : `Using known Form 6251 line 7 override. Computed amount was ${toMoney(result.tentativeMinimumTaxComputed)}`],
    ["Line 8. Alternative minimum tax foreign tax credit", toMoney(result.amtFtcUsed), "Separate FTC for AMT"],
    ["Line 9. Tentative minimum tax", toMoney(Math.max(0, result.tentativeMinimumTax - result.amtFtcUsed)), "Line 7 minus line 8"],
    ["Line 10. Regular tax for AMT comparison", toMoney(result.regularTaxForAmtComparison), "Regular tax after regular foreign tax credit"],
    ["Line 11. AMT", toMoney(result.amt), "Line 9 minus line 10, if positive"]
  ];
}

function renderAmtDetail(result, target = sumAmtOutput) {
  renderRows(target, getAmtDetailRows(result));
}

function getNiitDetailRows(result) {
  const netGainForInvestmentTax = Math.max(0, result.capNet.ordinaryCapGain + result.capNet.prefCapGain);
  const totalInvestmentIncome = result.inputs.interest + result.inputs.dividends + netGainForInvestmentTax;

  return [
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
}

function renderNiitDetail(result, target = sumNiitOutput) {
  renderRows(target, getNiitDetailRows(result));
}

function readBuilderInputs() {
  return sanitizeBuilderInputs({
    wagesUs: parseNumber(builderInputs.wagesUs),
    interestUs: parseNumber(builderInputs.interestUs),
    interestForeign: parseNumber(builderInputs.interestForeign),
    dividendsUs: parseNumber(builderInputs.dividendsUs),
    dividendsForeign: parseNumber(builderInputs.dividendsForeign),
    qualifiedDividendsUs: parseNumber(builderInputs.qualifiedDividendsUs),
    qualifiedDividendsForeign: parseNumber(builderInputs.qualifiedDividendsForeign),
    stGainUs: parseNumber(builderInputs.stGainUs),
    stLossUs: parseNumber(builderInputs.stLossUs),
    ltGainUs: parseNumber(builderInputs.ltGainUs),
    ltLossUs: parseNumber(builderInputs.ltLossUs),
    stGainForeign: parseNumber(builderInputs.stGainForeign),
    stLossForeign: parseNumber(builderInputs.stLossForeign),
    ltGainForeign: parseNumber(builderInputs.ltGainForeign),
    ltLossForeign: parseNumber(builderInputs.ltLossForeign),
    otherUs: parseNumber(builderInputs.otherUs),
    foreignPassiveOther: parseNumber(builderInputs.foreignPassiveOther),
    foreignGeneralIncome: parseNumber(builderInputs.foreignGeneralIncome),
    foreignExcludedIncome: parseNumber(builderInputs.foreignExcludedIncome),
    salt: parseNumber(builderInputs.salt),
    mortgageInterest: parseNumber(builderInputs.mortgageInterest),
    otherItemized: parseNumber(builderInputs.otherItemized),
    investmentExpenses: parseNumber(builderInputs.investmentExpenses),
    directPassiveDeductions: parseNumber(builderInputs.directPassiveDeductions),
    directGeneralDeductions: parseNumber(builderInputs.directGeneralDeductions),
    amtBondInterest: parseNumber(builderInputs.amtBondInterest),
    amtAdjustments: parseNumber(builderInputs.amtAdjustments),
    ftaxPassiveGains: parseNumber(builderInputs.ftaxPassiveGains),
    ftaxPassiveDividends: parseNumber(builderInputs.ftaxPassiveDividends),
    ftaxPassiveInterest: parseNumber(builderInputs.ftaxPassiveInterest),
    ftaxPassiveOther: parseNumber(builderInputs.ftaxPassiveOther),
    ftaxGeneral: parseNumber(builderInputs.ftaxGeneral),
    ftcCarryPassive: parseNumber(builderInputs.ftcCarryPassive),
    ftcCarryGeneral: parseNumber(builderInputs.ftcCarryGeneral),
    amtFtc: parseNumber(builderInputs.amtFtc),
    otherCredits: parseNumber(builderInputs.otherCredits),
    otherTaxes: parseNumber(builderInputs.otherTaxes),
    withholding: parseNumber(builderInputs.withholding),
    otherPayments: parseNumber(builderInputs.otherPayments),
    penalty: parseNumber(builderInputs.penalty),
    stdDeduction: parseNumber(builderInputs.stdDeduction, 31500),
    niitThreshold: parseNumber(builderInputs.niitThreshold, 250000),
    capLossCap: parseNumber(builderInputs.capLossCap, 3000)
  });
}

function writeBuilderInputs(values) {
  const safe = sanitizeBuilderInputs(values);
  Object.entries(builderInputs).forEach(([key, input]) => {
    if (!input) return;
    input.value = String(Math.round(safe[key] || 0));
  });
}

function getPreferentialBucketAllocation(qualifiedDividendsTotal, longTermGainTotal, breakdown) {
  let remainingQualified = Math.max(0, qualifiedDividendsTotal);
  let remainingLongTerm = Math.max(0, longTermGainTotal);

  const qd0 = Math.min(remainingQualified, breakdown.atZero);
  remainingQualified -= qd0;
  const lt0 = Math.min(remainingLongTerm, Math.max(0, breakdown.atZero - qd0));
  remainingLongTerm -= lt0;

  const qd15 = Math.min(remainingQualified, breakdown.atFifteen);
  remainingQualified -= qd15;
  const lt15 = Math.min(remainingLongTerm, Math.max(0, breakdown.atFifteen - qd15));
  remainingLongTerm -= lt15;

  const qd20 = Math.min(remainingQualified, breakdown.atTwenty);
  remainingQualified -= qd20;
  const lt20 = Math.min(remainingLongTerm, Math.max(0, breakdown.atTwenty - qd20));

  return { qd0, qd15, qd20, lt0, lt15, lt20 };
}

function getForm1116AdjustedTaxableIncome(result) {
  return Math.max(
    0,
    result.taxableIncome
      - result.ltcgBreakdown.atZero
      - result.ltcgBreakdown.atFifteen * FTC_LINE18_15_REDUCTION
      - result.ltcgBreakdown.atTwenty * FTC_LINE18_20_REDUCTION
  );
}

function getBuilderWorldwideGrossIncome(builder) {
  return Math.max(0, builder.wagesUs)
    + Math.max(0, builder.otherUs)
    + builder.interestUs
    + builder.dividendsUs
    + builder.interestForeign
    + builder.dividendsForeign
    + Math.max(0, builder.foreignPassiveOther)
    + Math.max(0, builder.foreignGeneralIncome)
    + builder.stGainUs
    + builder.ltGainUs
    + builder.stGainForeign
    + builder.ltGainForeign;
}

function getBuilderPassiveGrossIncome(builder) {
  return builder.interestForeign
    + builder.dividendsForeign
    + Math.max(0, builder.foreignPassiveOther)
    + builder.stGainForeign
    + builder.ltGainForeign;
}

function prorateReductionByBucket(buckets, reductionAmount) {
  const total = Object.values(buckets).reduce((sum, value) => sum + Math.max(0, value), 0);
  if (total <= 0 || reductionAmount <= 0) {
    return Object.fromEntries(Object.keys(buckets).map((key) => [key, 0]));
  }

  const reductions = {};
  for (const [key, value] of Object.entries(buckets)) {
    reductions[key] = reductionAmount * (Math.max(0, value) / total);
  }
  return reductions;
}

function computePassive1116CapitalSupport(builder, result) {
  const totalQualified = builder.qualifiedDividendsUs + builder.qualifiedDividendsForeign;
  const totalPositiveLongTerm = Math.max(0, builder.ltcgUs) + Math.max(0, builder.ltcgForeign);
  const allocation = getPreferentialBucketAllocation(totalQualified, totalPositiveLongTerm, result.ltcgBreakdown);

  const foreignLongTermNetGain = Math.max(0, builder.ltcgForeign);
  const foreignLongTermShare = totalPositiveLongTerm > 0 ? foreignLongTermNetGain / totalPositiveLongTerm : 0;
  const foreignQualifiedShare = totalQualified > 0 ? builder.qualifiedDividendsForeign / totalQualified : 0;

  let foreignLt0 = allocation.lt0 * foreignLongTermShare;
  let foreignLt15 = allocation.lt15 * foreignLongTermShare;
  let foreignLt20 = allocation.lt20 * foreignLongTermShare;
  const foreignQd0 = allocation.qd0 * foreignQualifiedShare;
  const foreignQd15 = allocation.qd15 * foreignQualifiedShare;
  const foreignQd20 = allocation.qd20 * foreignQualifiedShare;

  const foreignShortTermNetGain = Math.max(0, builder.stcgForeign);
  const foreignCapitalGainNetIncome = Math.max(0, builder.stcgForeign + builder.ltcgForeign);
  const worldwideCapitalGainNetIncome = Math.max(0, builder.stcgUs + builder.stcgForeign + builder.ltcgUs + builder.ltcgForeign);
  const usCapitalLossAdjustment = Math.max(0, foreignCapitalGainNetIncome - worldwideCapitalGainNetIncome);

  const capBuckets = {
    st: foreignShortTermNetGain,
    lt0: foreignLt0,
    lt15: foreignLt15,
    lt20: foreignLt20
  };
  const usLossReductions = prorateReductionByBucket(capBuckets, usCapitalLossAdjustment);
  const remainingSt = Math.max(0, foreignShortTermNetGain - usLossReductions.st);
  foreignLt0 = Math.max(0, foreignLt0 - usLossReductions.lt0);
  foreignLt15 = Math.max(0, foreignLt15 - usLossReductions.lt15);
  foreignLt20 = Math.max(0, foreignLt20 - usLossReductions.lt20);

  const usNetLongTermLoss = Math.max(0, builder.ltLossUs - builder.ltGainUs);
  const usCapitalLossAppliedToLongTerm = usLossReductions.lt0 + usLossReductions.lt15 + usLossReductions.lt20;
  const usLongTermLossAdjustment = Math.max(0, usNetLongTermLoss - usCapitalLossAppliedToLongTerm);
  const longTermBuckets = { lt0: foreignLt0, lt15: foreignLt15, lt20: foreignLt20 };
  const unadjustedLongTermAllocations = prorateReductionByBucket(longTermBuckets, usLongTermLossAdjustment);

  const line1aLongTerm =
    Math.max(0, foreignLt0 - unadjustedLongTermAllocations.lt0) * 0 + unadjustedLongTermAllocations.lt0 +
    Math.max(0, foreignLt15 - unadjustedLongTermAllocations.lt15) * FTC_LINE1A_15_INCLUDE + unadjustedLongTermAllocations.lt15 +
    Math.max(0, foreignLt20 - unadjustedLongTermAllocations.lt20) * FTC_LINE1A_20_INCLUDE + unadjustedLongTermAllocations.lt20;

  const adjustedForeignQualifiedDividends = foreignQd15 * FTC_LINE1A_15_INCLUDE + foreignQd20 * FTC_LINE1A_20_INCLUDE;
  const passiveForeignNonqualifiedDividends = Math.max(0, builder.dividendsForeign - builder.qualifiedDividendsForeign);

  const foreignShortTermLoss = Math.max(0, builder.stLossForeign - builder.stGainForeign);
  const availableUsShortTermGain = Math.max(0, builder.stcgUs);
  const offsetUsShortTerm = Math.min(foreignShortTermLoss, availableUsShortTermGain);
  let remainingShortTermLoss = Math.max(0, foreignShortTermLoss - offsetUsShortTerm);
  const offset20 = Math.min(remainingShortTermLoss, Math.max(0, allocation.lt20));
  remainingShortTermLoss -= offset20;
  const offset15 = Math.min(remainingShortTermLoss, Math.max(0, allocation.lt15));
  remainingShortTermLoss -= offset15;
  const offset0 = Math.min(remainingShortTermLoss, Math.max(0, allocation.lt0));
  const adjustedForeignCapitalLoss = offsetUsShortTerm + offset20 * FTC_LINE1A_20_INCLUDE + offset15 * FTC_LINE1A_15_INCLUDE + offset0 * 0;

  return {
    totalQualified,
    totalPositiveLongTerm,
    allocation,
    foreignQd0,
    foreignQd15,
    foreignQd20,
    foreignLt0,
    foreignLt15,
    foreignLt20,
    foreignShortTermNetGain,
    remainingSt,
    usCapitalLossAdjustment,
    usLongTermLossAdjustment,
    adjustedForeignQualifiedDividends,
    adjustedForeignLongTerm: line1aLongTerm,
    passiveForeignNonqualifiedDividends,
    adjustedForeignCapitalLoss,
    line1aCapitalPortion: remainingSt + line1aLongTerm
  };
}

function buildBuilderBridgeRows(builder, result) {
  const passiveForm = computeBuilderForm1116(builder, result, "passive");
  const generalForm = computeBuilderForm1116(builder, result, "general");
  const foreignNetCapital = builder.stcgForeign + builder.ltcgForeign;
  const passiveForeignGross = getBuilderPassiveGrossIncome(builder);
  const generalForeignGross = Math.max(0, builder.foreignGeneralIncome);
  const worldwideGross = getBuilderWorldwideGrossIncome(builder);

  return [
    ["Deduction used on Form 1040", toMoney(result.deductionUsed), `Using ${result.deductionType} deduction in this builder run.`],
    ["US ordinary income pool", toMoney(builder.wagesUs + builder.otherUs), "W-2 wages + other ordinary income (US)"],
    ["Total interest used on return", toMoney(builder.interestUs + builder.interestForeign), "US interest + foreign interest"],
    ["Total dividends used on return", toMoney(builder.dividendsUs + builder.dividendsForeign), "US dividends + foreign dividends"],
    ["Qualified dividends used on return", toMoney(builder.qualifiedDividendsUs + builder.qualifiedDividendsForeign), "US qualified dividends + foreign qualified dividends"],
    ["Net short-term gain / loss used on return", toMoney(builder.stcgUs + builder.stcgForeign), "US short-term + foreign short-term"],
    ["Net long-term gain / loss used on return", toMoney(builder.ltcgUs + builder.ltcgForeign), "US long-term + foreign long-term"],
    ["Gross short-term sale profits used for Form 1116", toMoney(builder.stGainUs + builder.stGainForeign), "US short-term profits + foreign short-term profits before subtracting losses"],
    ["Gross long-term sale profits used for Form 1116", toMoney(builder.ltGainUs + builder.ltGainForeign), "US long-term profits + foreign long-term profits before subtracting losses"],
    ["Net foreign capital gain / loss entered", toMoney(foreignNetCapital), "Foreign short-term + foreign long-term. Negative values reduce Form 1040 capital-gain income."],
    ["Foreign passive gross income for Form 1116 ratio", toMoney(passiveForeignGross), "Foreign passive gross income before capital losses: gains, dividends, interest, retirement / annuity"],
    ["Foreign general gross income for Form 1116 ratio", toMoney(generalForeignGross), "Positive foreign earned / business income only"],
    ["Worldwide gross income for Form 1116 ratio", toMoney(worldwideGross), "Gross income from all modeled sources before capital losses. Excluded foreign income / refund is not included."],
    ["Excluded foreign income / refund kept out of return math", toMoney(builder.foreignExcludedIncome), "Tracked for context only. Not included in Form 1040 or either Form 1116 basket in this builder."],
    ["Foreign capital loss adjustment used in Form 1116", toMoney(passiveForm.line5), "If foreign STCG or LTCG is negative, the adjusted loss shows up here rather than on Form 1116 line 1a."],
    ["Total current-year passive foreign taxes", toMoney(builder.ftaxPassiveGains + builder.ftaxPassiveDividends + builder.ftaxPassiveInterest + builder.ftaxPassiveOther), "Foreign taxes entered against passive income components"],
    ["Total current-year general foreign taxes", toMoney(builder.ftaxGeneral), "Foreign taxes entered against general-category income"],
    ["Passive Form 1116 allowed credit", toMoney(passiveForm.line24), "Passive basket line 24 from the current builder run."],
    ["General Form 1116 allowed credit", toMoney(generalForm.line24), "General basket line 24 from the current builder run."],
    ["Regular FTC used in Form 1040 preview", toMoney(result.ftcAllowed), "Limited by regular-tax FTC cap in the current model"],
    ["AMT FTC used in Form 6251 preview", toMoney(result.amtFtcUsed), "Minimum-tax foreign tax credit input capped at tentative minimum tax"]
  ];
}

function computeBuilderForm1116(builder, result, category) {
  const isPassive = category === "passive";
  const passiveGrossForRatio = getBuilderPassiveGrossIncome(builder);
  const generalGrossForRatio = Math.max(0, builder.foreignGeneralIncome);
  const worldwideGross = getBuilderWorldwideGrossIncome(builder);
  const ratioGross = isPassive ? passiveGrossForRatio : generalGrossForRatio;
  const ratio = worldwideGross > 0 ? ratioGross / worldwideGross : 0;

  const passiveCapital = computePassive1116CapitalSupport(builder, result);

  const line1a = isPassive
    ? passiveCapital.line1aCapitalPortion + passiveCapital.adjustedForeignQualifiedDividends + passiveCapital.passiveForeignNonqualifiedDividends + builder.interestForeign + builder.foreignPassiveOther
    : builder.foreignGeneralIncome;
  const line2 = isPassive ? builder.directPassiveDeductions : builder.directGeneralDeductions;
  const line3a = result.deductionType === "itemized"
    ? builder.salt + builder.otherItemized
    : result.stdDeduction;
  const line3b = 0;
  const line3c = Math.max(0, line3a - line3b);
  const line3d = ratioGross;
  const line3e = worldwideGross;
  const line3f = ratio;
  const line3g = line3c * line3f;
  const line4a = result.deductionType === "itemized" ? builder.mortgageInterest * ratio : 0;
  const line4b = 0;
  const line5 = isPassive ? passiveCapital.adjustedForeignCapitalLoss : 0;
  const line6 = line2 + line3g + line4a + line4b + line5;
  const line7 = Math.max(0, line1a - line6);
  const line8 = isPassive
    ? builder.ftaxPassiveGains + builder.ftaxPassiveDividends + builder.ftaxPassiveInterest + builder.ftaxPassiveOther
    : builder.ftaxGeneral;
  const line9 = line8;
  const line10 = isPassive ? builder.ftcCarryPassive : builder.ftcCarryGeneral;
  const line11 = line9 + line10;
  const line12 = 0;
  const line13 = 0;
  const line14 = line11 - line12 + line13;
  const line15 = line7;
  const line16 = 0;
  const line17 = line15 + line16;
  const line18 = getForm1116AdjustedTaxableIncome(result);
  const line19 = line18 > 0 ? line17 / line18 : 0;
  const line20 = result.regularTax;
  const line21 = line20 * line19;
  const line22 = 0;
  const line23 = line21 + line22;
  const line24 = Math.min(line14, line23);

  return {
    category,
    line1a,
    line2,
    line3a,
    line3b,
    line3c,
    line3d,
    line3e,
    line3f,
    line3g,
    line4a,
    line4b,
    line5,
    line6,
    line7,
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
    support: {
      adjustedForeignLongTerm: passiveCapital.adjustedForeignLongTerm,
      adjustedForeignQualifiedDividends: passiveCapital.adjustedForeignQualifiedDividends,
      adjustedForeignCapitalLoss: passiveCapital.adjustedForeignCapitalLoss,
      passiveForeignPositiveSt: passiveCapital.remainingSt,
      passiveForeignNonqualifiedDividends: passiveCapital.passiveForeignNonqualifiedDividends,
      foreignLt0: passiveCapital.foreignLt0,
      foreignLt15: passiveCapital.foreignLt15,
      foreignLt20: passiveCapital.foreignLt20,
      foreignQd0: passiveCapital.foreignQd0,
      foreignQd15: passiveCapital.foreignQd15,
      foreignQd20: passiveCapital.foreignQd20,
      worldwideGross,
      ratioGross
    }
  };
}

function applyBuilderFtcToResult(baseResult, passiveForm, generalForm) {
  const ftcAllowed = Math.min(baseResult.regularTax, passiveForm.line24 + generalForm.line24);
  const ftcAvailable = passiveForm.line14 + generalForm.line14;
  const ftcLimit = passiveForm.line21 + generalForm.line21;
  const otherNonrefundableCreditsAllowed = Math.min(
    Math.max(0, baseResult.inputs.otherCredits),
    Math.max(0, baseResult.regularTax - ftcAllowed)
  );
  const regularTaxForAmtComparison = Math.max(0, baseResult.regularTax - ftcAllowed);
  const amt = Math.max(0, baseResult.tentativeMinimumTax - baseResult.amtFtcUsed - regularTaxForAmtComparison);
  const taxBeforeCredits = baseResult.regularTax + amt;
  const totalCredits = Math.min(taxBeforeCredits, ftcAllowed + otherNonrefundableCreditsAllowed);
  const taxAfterCredits = Math.max(0, taxBeforeCredits - totalCredits);
  const totalOtherTaxes = baseResult.niit + baseResult.inputs.otherTaxes;
  const totalTax = taxAfterCredits + totalOtherTaxes;
  const totalPayments = baseResult.inputs.withholding + baseResult.inputs.otherPayments;
  const amountOwedBeforePenalty = Math.max(0, totalTax - totalPayments);
  const refund = Math.max(0, totalPayments - totalTax - baseResult.inputs.penalty);
  const amountOwed = Math.max(0, totalTax + baseResult.inputs.penalty - totalPayments);
  const effectiveRate = baseResult.totalIncome !== 0 ? (totalTax / baseResult.totalIncome) * 100 : 0;

  return {
    ...baseResult,
    ftcAllowed,
    ftcAvailable,
    ftcLimit,
    otherNonrefundableCreditsAllowed,
    regularTaxForAmtComparison,
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
    usFederalIncomeTax: totalTax,
    effectiveRate,
    afterTaxIncome: baseResult.totalIncome - totalTax
  };
}

function getBuilder1116Rows(builder, result, category) {
  const data = computeBuilderForm1116(builder, result, category);
  const label = category === "passive" ? "Passive" : "General";
  const ratioNote = data.line3e > 0
    ? `${label} basket gross income / worldwide gross income`
    : "No worldwide gross income entered";

  return [
    [`Form 1116 ${label}, line 1a`, toMoney(data.line1a), category === "passive"
      ? "Foreign passive income after the Form 1116 qualified-dividend and capital-gain adjustments. Gross gains and losses are entered separately, then rolled into the IRS adjustment rules."
      : "Foreign earned / business income entered in the general basket."],
    [`Form 1116 ${label}, line 2`, toMoney(data.line2), "Expenses directly tied to this basket, from the builder inputs."],
    [`Form 1116 ${label}, line 3a`, toMoney(data.line3a), result.deductionType === "itemized"
      ? "SALT + other itemized deductions treated as not definitely related to any one income stream."
      : "Standard deduction used because the builder run did not itemize."],
    [`Form 1116 ${label}, line 3c`, toMoney(data.line3c), "Line 3a minus line 3b. Line 3b is currently assumed to be 0."],
    [`Form 1116 ${label}, line 3d`, toMoney(data.line3d), category === "passive"
      ? "Gross foreign passive income before losses: foreign interest, dividends, retirement / annuity income, and gross capital gains before subtracting capital losses."
      : "Positive foreign general gross income for the ratio."],
    [`Form 1116 ${label}, line 3e`, toMoney(data.line3e), "Gross income from all modeled sources before capital losses. Excluded foreign income / refund stays outside this denominator."],
    [`Form 1116 ${label}, line 3f`, data.line3f.toFixed(4), ratioNote],
    [`Form 1116 ${label}, line 3g`, toMoney(data.line3g), "Apportioned share of the unallocated deduction pool."],
    [`Form 1116 ${label}, line 4a`, toMoney(data.line4a), result.deductionType === "itemized"
      ? "Mortgage interest apportioned with the Form 1116 gross-income method using lines 3d and 3e."
      : "0 because this builder run is using the standard deduction instead of itemizing."],
    [`Form 1116 ${label}, line 5`, toMoney(data.line5), category === "passive"
      ? "Foreign capital-loss adjustment. Short-term losses are ordered through the available capital-gain rate buckets before the adjusted amount is carried to line 5."
      : "No separate general-basket capital-loss adjustment modeled."],
    [`Form 1116 ${label}, line 7`, toMoney(data.line7), "Net foreign-source taxable income in this basket before page 2 limits."],
    [`Form 1116 ${label}, line 8`, toMoney(data.line8), "Current-year foreign taxes entered for this basket."],
    [`Form 1116 ${label}, line 10`, toMoney(data.line10), "Carryover entered for this basket."],
    [`Form 1116 ${label}, line 14`, toMoney(data.line14), "Foreign taxes available for credit after lines 12 and 13 (both assumed 0 here)."],
    [`Form 1116 ${label}, line 18`, toMoney(data.line18), "Adjusted taxable income denominator after capital-gain-rate adjustments."],
    [`Form 1116 ${label}, line 20`, toMoney(data.line20), "Form 1040, line 16 tax from the same builder run."],
    [`Form 1116 ${label}, line 21`, toMoney(data.line21), "Maximum credit for this basket: line 20 × line 19."],
    [`Form 1116 ${label}, line 24`, toMoney(data.line24), "Allowed credit for this basket before carryforward."],
    [`Form 1116 ${label}, support`, category === "passive"
      ? toMoney(data.support.adjustedForeignLongTerm + data.support.adjustedForeignQualifiedDividends)
      : toMoney(0), category === "passive"
      ? "Adjusted foreign preferential income included in line 1a."
      : "No foreign preferential-income adjustment needed in the general basket."]
  ];
}

function renderBuilderAssumptions() {
  if (!builderAssumptions) return;
  const assumptions = [
    "This builder uses 2025 MFJ line structure for Form 1040, Form 6251, Form 8960, and Form 1116.",
    "Excluded foreign income / refund is tracked for context but kept out of Form 1040 income and both Form 1116 baskets.",
    "Qualified dividends are the dividend amounts that use the lower capital-gain tax rates.",
    "Capital activity now uses separate sale-profit and sale-loss inputs so Form 1116 lines 3d and 3e can be built from gross gains before losses rather than net capital gain alone.",
    "When foreign qualified dividends and foreign long-term gains share the lower-rate buckets, this builder allocates the 0%, 15%, and 20% buckets to qualified dividends first and then to long-term gains.",
    "If the builder run itemizes, Form 1116 line 3a is modeled as SALT plus other itemized deductions and Form 1116 line 4a is modeled with the Form 1116 gross-income method using lines 3d and 3e.",
    "If the builder run uses the standard deduction, Form 1116 line 3a uses the standard deduction and Form 1116 line 4a is set to 0.",
    "Form 1116 still uses one aggregate passive basket in this builder. If you need country-by-country page 1 columns, the next step is to add country-level passive inputs rather than one aggregate passive basket.",
    "Form 1116 line 2 uses only the basket-specific direct-expense inputs on this tab.",
    "Form 8960 uses investment expenses as the offset against investment income.",
    "Form 6251 uses the AMT foreign tax credit input directly. If that field is blank or low, AMT will usually be overstated.",
    "The regular FTC used on Form 1040 comes from the builder's Form 1116 line 24 totals, so any remaining Form 1116 simplification will still flow into Form 1040 line 20."
  ];
  builderAssumptions.innerHTML = assumptions.map((item) => `<li>${item}</li>`).join("");
}

function updateBuilderMetrics(builder, result) {
  if (!builderMetricUsIncome) return;

  const usIncome = builder.wagesUs + builder.interestUs + builder.dividendsUs + builder.stcgUs + builder.ltcgUs + builder.otherUs;
  const foreignPassiveNet = builder.interestForeign + builder.dividendsForeign + builder.stcgForeign + builder.ltcgForeign + builder.foreignPassiveOther;
  const foreignPassiveGross = getBuilderPassiveGrossIncome(builder);
  const foreignGeneral = builder.foreignGeneralIncome;
  const deductions = builder.salt + builder.mortgageInterest + builder.otherItemized;

  builderMetricUsIncome.textContent = toMoney(usIncome);
  builderMetricForeignPassive.textContent = toMoney(foreignPassiveNet);
  builderMetricForeignPassive.title = `Positive-gross passive basket used for Form 1116 ratio: ${toMoney(foreignPassiveGross)}`;
  builderMetricForeignGeneral.textContent = toMoney(foreignGeneral);
  builderMetricDeductions.textContent = toMoney(deductions);
  builderMetricFtc.textContent = toMoney(result.ftcAllowed);
  builderMetricAmt.textContent = toMoney(result.amt);
  builderMetricTotalTax.textContent = toMoney(result.totalTax);

  if (result.refund > 0) {
    builderMetricBalance.textContent = toMoney(result.refund);
    builderMetricBalanceNote.textContent = "Refund after total tax, payments, and penalty";
  } else {
    builderMetricBalance.textContent = toMoney(result.amountOwed);
    builderMetricBalanceNote.textContent = "Amount due after total tax, payments, and penalty";
  }
}

function recalcBuilder() {
  if (!builder1040Output) return;
  const builder = readBuilderInputs();
  state.builder.inputs = builder;
  const preliminaryResult = calculateSummaryTax(builderToSummaryInputs(builder));
  const passiveForm = computeBuilderForm1116(builder, preliminaryResult, "passive");
  const generalForm = computeBuilderForm1116(builder, preliminaryResult, "general");
  const result = applyBuilderFtcToResult(preliminaryResult, passiveForm, generalForm);

  renderRows(builderBridgeOutput, buildBuilderBridgeRows(builder, result));
  render1040Preview(result, builder1040Output);
  renderAmtDetail(result, builderAmtOutput);
  renderNiitDetail(result, builderNiitOutput);
  renderRows(builder1116PassiveOutput, getBuilder1116Rows(builder, result, "passive"));
  renderRows(builder1116GeneralOutput, getBuilder1116Rows(builder, result, "general"));
  renderBuilderAssumptions();
  updateBuilderMetrics(builder, result);
  setBuilderPdfStatus("Ready to generate a combined packet with Form 1040, Form 6251, Form 8960, and both Form 1116 forms.");
}

function seedBuilderDefaults() {
  if (!builderInputs.wagesUs) return;
  state.builder.inputs = sanitizeBuilderInputs(DEFAULT_BUILDER_INPUTS);
  writeBuilderInputs(state.builder.inputs);
}

function resetBuilder() {
  seedBuilderDefaults();
  recalcBuilder();
}

function setBuilderPdfStatus(message) {
  if (!builderPdfStatus) return;
  builderPdfStatus.textContent = message;
}

async function generateBuilderCombinedPdf() {
  if (!window.PDFLib?.PDFDocument) {
    setBuilderPdfStatus("PDF library failed to load.");
    return;
  }

  try {
    const builder = readBuilderInputs();
    state.builder.inputs = builder;
    const preliminaryResult = calculateSummaryTax(builderToSummaryInputs(builder));
    const passiveForm = computeBuilderForm1116(builder, preliminaryResult, "passive");
    const generalForm = computeBuilderForm1116(builder, preliminaryResult, "general");
    const result = applyBuilderFtcToResult(preliminaryResult, passiveForm, generalForm);

    setBuilderPdfStatus("Generating combined packet: Form 1040, Form 6251, Form 8960, and both Form 1116 pages...");

    const [form1040Pdf, form6251Pdf, form8960Pdf, passive1116Pdf, general1116Pdf] = await Promise.all([
      build1040Pdf(result),
      build6251Pdf(result),
      build8960Pdf(result),
      buildForm1116Pdf(buildBuilderForm1116PdfData(builder, result, "passive"), true),
      buildForm1116Pdf(buildBuilderForm1116PdfData(builder, result, "general"), true)
    ]);

    const combinedPdf = await combinePdfDocuments([
      form1040Pdf,
      form6251Pdf,
      form8960Pdf,
      passive1116Pdf,
      general1116Pdf
    ]);

    triggerPdfDownload(combinedPdf, "return-builder-tax-packet.pdf");
    setBuilderPdfStatus("Combined packet generated: Form 1040, Form 6251, Form 8960, Form 1116 passive, and Form 1116 general.");
  } catch (err) {
    setBuilderPdfStatus(`Combined packet generation failed: ${err.message || String(err)}`);
  }
}

function bindBuilderEvents() {
  if (!builderRecalcBtn) return;
  builderRecalcBtn.addEventListener("click", recalcBuilder);
  if (builderRecalcBottomBtn) {
    builderRecalcBottomBtn.addEventListener("click", recalcBuilder);
  }
  if (builderResetBtn) {
    builderResetBtn.addEventListener("click", resetBuilder);
  }
  if (builderResetBottomBtn) {
    builderResetBottomBtn.addEventListener("click", resetBuilder);
  }
  if (builderGeneratePdfBtn) {
    builderGeneratePdfBtn.addEventListener("click", generateBuilderCombinedPdf);
  }
  if (builderGeneratePdfBottomBtn) {
    builderGeneratePdfBottomBtn.addEventListener("click", generateBuilderCombinedPdf);
  }
  Object.values(builderInputs).forEach((input) => {
    if (!input) return;
    input.placeholder = "0";
    input.addEventListener("input", recalcBuilder);
    input.addEventListener("change", recalcBuilder);
    input.addEventListener("focus", () => {
      input.select?.();
    });
  });
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

function setPdfTextField(form, fieldName, value) {
  if (value === null || value === undefined) return;
  try {
    form.getTextField(fieldName).setText(String(value));
  } catch (err) {
    // Leave missing or unsupported fields blank rather than failing the export.
  }
}

function addSupportingStatementPage(pdfDoc, formData) {
  const page = pdfDoc.addPage([612, 792]);
  const titlePrefix = formData.support?.titlePrefix || "Scenario B";
  const line3aLabel = formData.support?.line3aLabel || "Line 3a allocation pool";
  const mortgageInterestPool = formData.support?.mortgageInterestPool ?? 16500;
  const lines = [
    `Form 1116 Supporting Statement - ${titlePrefix} - ${formData.categoryLabel}`,
    "",
    `Country: ${formData.country}`,
    `Method: ${formData.method}`,
    "",
    `${line3aLabel}:`,
    `${formatPdfAmount(formData.line3a)}`,
    "",
    "Line 4a worksheet:",
    `Gross foreign source income: ${formatPdfAmount(formData.line3d)}`,
    `Gross income from all sources: ${formatPdfAmount(formData.line3e)}`,
    `Ratio: ${formatPdfDecimal(formData.line3f, 4)}`,
    `Deductible home mortgage interest: ${formatPdfAmount(mortgageInterestPool)}`,
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
    lines.push(formData.support?.generalStatement || "General-category income and taxes were taken directly from the builder inputs for this packet.");
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

function buildBuilderForm1116PdfData(builder, result, category) {
  const data = computeBuilderForm1116(builder, result, category);
  const isPassive = category === "passive";
  const totalPassiveTaxes = builder.ftaxPassiveGains + builder.ftaxPassiveDividends + builder.ftaxPassiveInterest + builder.ftaxPassiveOther;
  const line3aLabel = result.deductionType === "itemized"
    ? "Line 3a allocation pool (SALT + other itemized deductions)"
    : "Line 3a allocation pool (standard deduction)";

  return {
    name: "",
    ssn: "",
    category,
    categoryLabel: isPassive ? "Passive category income" : "General category income",
    country: "India",
    method: "accrued",
    line1aText: isPassive
      ? "Adjusted foreign passive income"
      : "Foreign earned or business income",
    line1a: data.line1a,
    line2: data.line2,
    line3a: data.line3a,
    line3b: data.line3b,
    line3c: data.line3c,
    line3d: data.line3d,
    line3e: data.line3e,
    line3f: data.line3f,
    line3g: data.line3g,
    line4a: data.line4a,
    line4b: data.line4b,
    line5: data.line5,
    line6: data.line6,
    line7: data.line7,
    part2: {
      country: "India",
      date: "12/31/2025",
      foreignDividends: isPassive ? builder.ftaxPassiveDividends : 0,
      foreignRents: 0,
      foreignInterest: isPassive ? builder.ftaxPassiveInterest : 0,
      foreignOther: isPassive ? builder.ftaxPassiveGains + builder.ftaxPassiveOther : builder.ftaxGeneral,
      usdDividends: isPassive ? builder.ftaxPassiveDividends : 0,
      usdRents: 0,
      usdInterest: isPassive ? builder.ftaxPassiveInterest : 0,
      usdOther: isPassive ? builder.ftaxPassiveGains + builder.ftaxPassiveOther : builder.ftaxGeneral,
      total: isPassive ? totalPassiveTaxes : builder.ftaxGeneral
    },
    line8: data.line8,
    line9: data.line9,
    line10: data.line10,
    line11: data.line11,
    line12: data.line12,
    line13: data.line13,
    line14: data.line14,
    line15: data.line15,
    line16: data.line16,
    line17: data.line17,
    line18: data.line18,
    line19: data.line19,
    line20: data.line20,
    line21: data.line21,
    line22: data.line22,
    line23: data.line23,
    line24: data.line24,
    summary: {
      line27: data.line24,
      line28: 0,
      line32: data.line24,
      line33: data.line24,
      line34: 0,
      line35: data.line24
    },
    support: {
      titlePrefix: "Return Builder",
      line3aLabel,
      mortgageInterestPool: builder.mortgageInterest,
      adjustedForeignCapitalGain: data.support.adjustedForeignLongTerm + data.support.adjustedForeignQualifiedDividends,
      adjustedForeignCapitalLoss: data.support.adjustedForeignCapitalLoss,
      foreign15Gain: data.support.foreignLt15 + data.support.foreignQd15,
      foreign20Gain: data.support.foreignLt20 + data.support.foreignQd20,
      generalStatement: "General-category income, taxes, and deductions were taken directly from the Return Builder inputs."
    }
  };
}

async function build1040Pdf(result) {
  const { PDFDocument } = window.PDFLib;
  const existingPdfBytes = await fetch("./shared/irs_f1040_2025.pdf").then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const form = pdfDoc.getForm();

  const p2 = FORM1040_FIELDS.page2;
  setPdfTextField(form, p2.line11, formatPdfAmount(result.agi));
  setPdfTextField(form, p2.line12, formatPdfAmount(result.deductionUsed));
  setPdfTextField(form, p2.line13a, formatPdfAmount(0));
  setPdfTextField(form, p2.line13b, formatPdfAmount(0));
  setPdfTextField(form, p2.line14, formatPdfAmount(result.deductionUsed));
  setPdfTextField(form, p2.line15, formatPdfAmount(result.taxableIncome));
  setPdfTextField(form, p2.line16, formatPdfAmount(result.regularTax));
  setPdfTextField(form, p2.line17, formatPdfAmount(result.amt));
  setPdfTextField(form, p2.line18, formatPdfAmount(result.taxBeforeCredits));
  setPdfTextField(form, p2.line19, formatPdfAmount(0));
  setPdfTextField(form, p2.line20, formatPdfAmount(result.ftcAllowed + result.otherNonrefundableCreditsAllowed));
  setPdfTextField(form, p2.line21, formatPdfAmount(result.ftcAllowed + result.otherNonrefundableCreditsAllowed));
  setPdfTextField(form, p2.line22, formatPdfAmount(result.taxAfterCredits));
  setPdfTextField(form, p2.line23, formatPdfAmount(result.totalOtherTaxes));
  setPdfTextField(form, p2.line24, formatPdfAmount(result.totalTax));
  setPdfTextField(form, p2.line25d, formatPdfAmount(result.inputs.withholding));
  setPdfTextField(form, p2.line31, formatPdfAmount(result.inputs.otherPayments));
  setPdfTextField(form, p2.line32, formatPdfAmount(result.totalPayments));
  setPdfTextField(form, p2.line33, formatPdfAmount(result.totalPayments));
  setPdfTextField(form, p2.line34, formatPdfAmount(result.refund));
  setPdfTextField(form, p2.line35a, formatPdfAmount(result.refund));
  setPdfTextField(form, p2.line36, formatPdfAmount(0));
  setPdfTextField(form, p2.line37, formatPdfAmount(result.amountOwedBeforePenalty));
  setPdfTextField(form, p2.line38, formatPdfAmount(result.inputs.penalty));

  form.flatten();
  return pdfDoc.save();
}

async function build6251Pdf(result) {
  const { PDFDocument } = window.PDFLib;
  const existingPdfBytes = await fetch("./shared/irs_f6251_2025.pdf").then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const form = pdfDoc.getForm();
  const line2aValue = result.deductionType === "itemized" ? result.inputs.itemizedTaxes : result.stdDeduction;

  setPdfTextField(form, FORM6251_FIELDS.line1a, formatPdfAmount(result.deductionUsed));
  setPdfTextField(form, FORM6251_FIELDS.line1b, formatPdfAmount(result.taxableIncome));
  setPdfTextField(form, FORM6251_FIELDS.line2a, formatPdfAmount(line2aValue));
  setPdfTextField(form, FORM6251_FIELDS.line2g, formatPdfAmount(result.inputs.amtBondInterest));
  setPdfTextField(form, FORM6251_FIELDS.line3, formatPdfAmount(result.inputs.amtAdjustments));
  setPdfTextField(form, FORM6251_FIELDS.line4, formatPdfAmount(result.amtBaseIncome));
  setPdfTextField(form, FORM6251_FIELDS.line5, formatPdfAmount(result.amtExemption));
  setPdfTextField(form, FORM6251_FIELDS.line6, formatPdfAmount(result.amtTaxableIncome));
  setPdfTextField(form, FORM6251_FIELDS.line7, formatPdfAmount(result.tentativeMinimumTax));
  setPdfTextField(form, FORM6251_FIELDS.line8, formatPdfAmount(result.amtFtcUsed));
  setPdfTextField(form, FORM6251_FIELDS.line9, formatPdfAmount(Math.max(0, result.tentativeMinimumTax - result.amtFtcUsed)));
  setPdfTextField(form, FORM6251_FIELDS.line10, formatPdfAmount(result.regularTaxForAmtComparison));
  setPdfTextField(form, FORM6251_FIELDS.line11, formatPdfAmount(result.amt));

  form.flatten();
  return pdfDoc.save();
}

async function build8960Pdf(result) {
  const { PDFDocument } = window.PDFLib;
  const existingPdfBytes = await fetch("./shared/irs_f8960_2025.pdf").then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const form = pdfDoc.getForm();
  const netGainForInvestmentTax = Math.max(0, result.capNet.ordinaryCapGain + result.capNet.prefCapGain);
  const totalInvestmentIncome = result.inputs.interest + result.inputs.dividends + netGainForInvestmentTax;

  setPdfTextField(form, FORM8960_FIELDS.line1, formatPdfAmount(result.inputs.interest));
  setPdfTextField(form, FORM8960_FIELDS.line2, formatPdfAmount(result.inputs.dividends));
  setPdfTextField(form, FORM8960_FIELDS.line3, formatPdfAmount(0));
  setPdfTextField(form, FORM8960_FIELDS.line4c, formatPdfAmount(0));
  setPdfTextField(form, FORM8960_FIELDS.line5a, formatPdfAmount(netGainForInvestmentTax));
  setPdfTextField(form, FORM8960_FIELDS.line5d, formatPdfAmount(netGainForInvestmentTax));
  setPdfTextField(form, FORM8960_FIELDS.line8, formatPdfAmount(totalInvestmentIncome));
  setPdfTextField(form, FORM8960_FIELDS.line9a, formatPdfAmount(result.investmentExpensesUsed));
  setPdfTextField(form, FORM8960_FIELDS.line9d, formatPdfAmount(result.investmentExpensesUsed));
  setPdfTextField(form, FORM8960_FIELDS.line11, formatPdfAmount(result.investmentExpensesUsed));
  setPdfTextField(form, FORM8960_FIELDS.line12, formatPdfAmount(result.nii));
  setPdfTextField(form, FORM8960_FIELDS.line13, formatPdfAmount(result.agi));
  setPdfTextField(form, FORM8960_FIELDS.line14, formatPdfAmount(result.inputs.niitThreshold));
  setPdfTextField(form, FORM8960_FIELDS.line15, formatPdfAmount(result.magiExcess));
  setPdfTextField(form, FORM8960_FIELDS.line16, formatPdfAmount(result.niitBase));
  setPdfTextField(form, FORM8960_FIELDS.line17, formatPdfAmount(result.niit));

  form.flatten();
  return pdfDoc.save();
}

async function combinePdfDocuments(pdfByteArrays) {
  const { PDFDocument } = window.PDFLib;
  const merged = await PDFDocument.create();

  for (const bytes of pdfByteArrays) {
    const doc = await PDFDocument.load(bytes);
    const copied = await merged.copyPages(doc, doc.getPageIndices());
    copied.forEach((page) => merged.addPage(page));
  }

  return merged.save();
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
  render1040Preview(result);
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
    seedBuilderDefaults();
    bindSummaryEvents();
    bindBuilderEvents();
    renderSummaryAssumptions();
    recalcSummary();
    recalcBuilder();
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
