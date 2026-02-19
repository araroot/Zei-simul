# Tax Calculation Test - Instructions for Other Agent

## Task
Calculate federal income tax for 20 scenarios and return results in CSV format.

---

## Input File
**Location:** `/Users/raviaranke/Desktop/zei_simul/shared/tax_scenarios_2026.csv`

**Format:**
```csv
scenario_id,total_income,st_percentage,description
1,131100,0,At 0% LTCG bracket boundary
2,131100,50,At 0% LTCG bracket, mixed
...
```

---

## Exact Assumptions (CRITICAL - Use These Exactly)

### Tax Year & Filing Status
- **Tax Year:** 2026
- **Filing Status:** Married Filing Jointly (MFJ)

### Standard Deduction
- **Amount:** $32,200

### Long-Term Capital Gains (LTCG) Tax Brackets
Use the **2026 thresholds** (NOT 2025):
- **0% rate:** Taxable income from $0 to $98,900
- **15% rate:** Taxable income from $98,900 to $613,700
- **20% rate:** Taxable income above $613,700

**⚠️ IMPORTANT:** LTCG must be **stacked on top** of ordinary income to determine which rate bracket applies.

### Ordinary Income Tax Brackets
For short-term capital gains (taxed as ordinary income):
| Taxable Income | Rate |
|----------------|------|
| $0 - $24,800 | 10% |
| $24,800 - $100,800 | 12% |
| $100,800 - $211,400 | 22% |
| $211,400 - $403,550 | 24% |
| $403,550 - $512,450 | 32% |
| $512,450 - $768,700 | 35% |
| $768,700+ | 37% |

### Net Investment Income Tax (NIIT)
- **Threshold:** $250,000 (MFJ)
- **Rate:** 3.8%
- **Calculation:** NIIT = 3.8% × min(Net Investment Income, MAGI - $250,000)
- **For these scenarios:** All income is investment income, so NII = total_income

### Income Composition
- **All income is from capital gains only** (no wages, no other income)
- Split between:
  - Short-Term Capital Gains (STCG) - taxed as ordinary income
  - Long-Term Capital Gains (LTCG) - preferential rates

---

## Calculation Steps

For each scenario:

1. **Calculate income split:**
   ```
   STCG_amount = total_income × (st_percentage / 100)
   LTCG_amount = total_income × ((100 - st_percentage) / 100)
   ```

2. **Apply standard deduction:**
   ```
   AGI = total_income
   Taxable_income = max(0, AGI - 32200)
   ```

3. **Allocate standard deduction (ordinary income first):**
   ```
   Taxable_STCG = max(0, STCG_amount - 32200)
   Remaining_deduction = max(0, 32200 - STCG_amount)
   Taxable_LTCG = max(0, LTCG_amount - Remaining_deduction)
   ```

4. **Calculate ordinary income tax on STCG:**
   Apply progressive brackets to Taxable_STCG

5. **Calculate LTCG tax with stacking:**
   - Starting position = Taxable_STCG
   - Apply LTCG rates based on where the gains fall when stacked on top
   - Example: If Taxable_STCG = $200,000 and Taxable_LTCG = $500,000:
     - First $0 at 0% (already above $98,900)
     - Next $413,700 at 15% (from $200k to $613,700)
     - Remaining $86,300 at 20% (above $613,700)

6. **Calculate NIIT:**
   ```
   If AGI > 250000:
     Excess = AGI - 250000
     NIIT_base = min(total_income, Excess)
     NIIT = NIIT_base × 0.038
   Else:
     NIIT = 0
   ```

7. **Calculate totals:**
   ```
   Total_federal_tax = STCG_tax + LTCG_tax + NIIT
   Effective_rate_pct = (Total_federal_tax / total_income) × 100
   After_tax_income = total_income - Total_federal_tax
   ```

---

## Output Format

**Required File:** `/Users/raviaranke/Desktop/zei_simul/shared/tax_results_other_agent.csv`

**Required Columns (exactly these names):**
```csv
scenario_id,total_federal_tax,effective_rate_pct,after_tax_income
```

**Format Requirements:**
- `scenario_id`: Integer (1-20)
- `total_federal_tax`: Dollar amount, rounded to 2 decimal places (no $ sign, no commas)
- `effective_rate_pct`: Percentage, rounded to 2 decimal places (no % sign)
- `after_tax_income`: Dollar amount, rounded to 2 decimal places (no $ sign, no commas)

**Example Output:**
```csv
scenario_id,total_federal_tax,effective_rate_pct,after_tax_income
1,0.00,0.00,131100.00
2,3506.00,2.67,127594.00
12,121324.00,15.80,646676.00
...
```

---

## Critical Test Case (Scenario 12)

**Input:**
- Total Income: $768,000
- STCG %: 0% (100% LTCG)

**Expected Output:**
- Total Federal Tax: **$121,324.00**
- Effective Rate: **15.80%**
- After-Tax Income: **$646,676.00**

**Breakdown:**
- Taxable LTCG: $735,800
- LTCG @ 0%: $98,900 × 0% = $0
- LTCG @ 15%: $514,800 × 15% = $77,220
- LTCG @ 20%: $122,100 × 20% = $24,420
- LTCG Tax: $101,640
- NIIT: ($768,000 - $250,000) × 3.8% = $19,684
- **Total: $121,324**

If your calculation matches this, you're on the right track!

---

## Common Pitfalls to Avoid

❌ **Wrong:** Using 2025 LTCG threshold ($600,050)
✅ **Correct:** Using 2026 LTCG threshold ($613,700)

❌ **Wrong:** Calculating LTCG tax starting from $0
✅ **Correct:** Stacking LTCG on top of ordinary income

❌ **Wrong:** Applying standard deduction separately to STCG and LTCG
✅ **Correct:** Apply to AGI first, then allocate (ordinary income first)

❌ **Wrong:** NIIT on entire income
✅ **Correct:** NIIT on min(NII, MAGI - threshold)

---

## Verification

After completing your calculations, you can verify by running:
```bash
python3 /Users/raviaranke/Desktop/zei_claude/tax_test_suite.py compare /Users/raviaranke/Desktop/zei_simul/shared/tax_results_other_agent.csv
```

This will show any discrepancies between our calculations.

---

## Questions?

If anything is unclear, refer to:
- IRS Revenue Procedure 2025-32
- [IRS 2026 Tax Adjustments](https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill)

Good luck! 🎯
