#!/usr/bin/env python3
"""CLI utility for 2026 MFJ capital-gains tax scenario generation and comparison."""

from __future__ import annotations

import argparse
import csv
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, Iterable, List

STD_DEDUCTION = 32200.0
NIIT_THRESHOLD = 250000.0
NIIT_RATE = 0.038

ORDINARY_BRACKETS = [
    (24800.0, 0.10),
    (100800.0, 0.12),
    (211400.0, 0.22),
    (403550.0, 0.24),
    (512450.0, 0.32),
    (768700.0, 0.35),
    (float("inf"), 0.37),
]

LTCG_ZERO_LIMIT = 98900.0
LTCG_FIFTEEN_LIMIT = 613700.0


@dataclass
class Scenario:
    scenario_id: str
    total_income: float
    stcg_pct: float


@dataclass
class Result:
    scenario_id: str
    total_income: float
    stcg_pct: float
    ltcg_pct: float
    stcg_amount: float
    ltcg_amount: float
    std_deduction: float
    taxable_income: float
    taxable_ordinary: float
    taxable_ltcg: float
    ordinary_tax: float
    ltcg_0_amount: float
    ltcg_15_amount: float
    ltcg_20_amount: float
    ltcg_tax: float
    niit_threshold: float
    magi_excess: float
    nii: float
    niit_base: float
    niit: float
    base_tax: float
    total_federal_tax: float
    effective_rate_pct: float
    after_tax_income: float


def calc_ordinary_tax(taxable_ordinary: float) -> float:
    remaining = taxable_ordinary
    lower = 0.0
    tax = 0.0
    for upper, rate in ORDINARY_BRACKETS:
        span = min(remaining, upper - lower)
        if span <= 0:
            break
        tax += span * rate
        remaining -= span
        lower = upper
    return tax


def calc_ltcg_breakdown(taxable_ordinary: float, taxable_ltcg: float) -> Dict[str, float]:
    if taxable_ltcg <= 0:
        return {"at_0": 0.0, "at_15": 0.0, "at_20": 0.0, "tax": 0.0}

    # Correct stacking: ordinary income fills the LTCG thresholds first.
    zero_room = max(0.0, LTCG_ZERO_LIMIT - taxable_ordinary)
    at_0 = min(taxable_ltcg, zero_room)

    fifteen_room = max(0.0, LTCG_FIFTEEN_LIMIT - taxable_ordinary - at_0)
    at_15 = min(taxable_ltcg - at_0, fifteen_room)

    at_20 = max(0.0, taxable_ltcg - at_0 - at_15)
    tax = at_15 * 0.15 + at_20 * 0.20
    return {"at_0": at_0, "at_15": at_15, "at_20": at_20, "tax": tax}


def run_scenario(s: Scenario) -> Result:
    total_income = max(1.0, s.total_income)
    stcg_pct = min(100.0, max(0.0, s.stcg_pct))
    ltcg_pct = 100.0 - stcg_pct

    stcg_amount = total_income * stcg_pct / 100.0
    ltcg_amount = total_income - stcg_amount

    taxable_income = max(0.0, total_income - STD_DEDUCTION)
    taxable_ordinary = max(0.0, stcg_amount - STD_DEDUCTION)
    taxable_ltcg = max(0.0, taxable_income - taxable_ordinary)

    ordinary_tax = calc_ordinary_tax(taxable_ordinary)
    ltcg = calc_ltcg_breakdown(taxable_ordinary, taxable_ltcg)

    nii = total_income
    magi_excess = max(0.0, total_income - NIIT_THRESHOLD)
    niit_base = min(nii, magi_excess)
    niit = niit_base * NIIT_RATE

    base_tax = ordinary_tax + ltcg["tax"]
    total_federal_tax = base_tax + niit

    return Result(
        scenario_id=s.scenario_id,
        total_income=total_income,
        stcg_pct=stcg_pct,
        ltcg_pct=ltcg_pct,
        stcg_amount=stcg_amount,
        ltcg_amount=ltcg_amount,
        std_deduction=STD_DEDUCTION,
        taxable_income=taxable_income,
        taxable_ordinary=taxable_ordinary,
        taxable_ltcg=taxable_ltcg,
        ordinary_tax=ordinary_tax,
        ltcg_0_amount=ltcg["at_0"],
        ltcg_15_amount=ltcg["at_15"],
        ltcg_20_amount=ltcg["at_20"],
        ltcg_tax=ltcg["tax"],
        niit_threshold=NIIT_THRESHOLD,
        magi_excess=magi_excess,
        nii=nii,
        niit_base=niit_base,
        niit=niit,
        base_tax=base_tax,
        total_federal_tax=total_federal_tax,
        effective_rate_pct=(total_federal_tax / total_income) * 100.0,
        after_tax_income=total_income - total_federal_tax,
    )


def default_scenarios() -> List[Scenario]:
    incomes = [
        600000.0,
        700000.0,
        800000.0,
        900000.0,
        1000000.0,
        1100000.0,
        1200000.0,
        1300000.0,
        1400000.0,
        1500000.0,
    ]
    pct_pairs = [
        (0.0, 30.0),
        (10.0, 40.0),
        (0.0, 50.0),
        (20.0, 60.0),
        (0.0, 70.0),
        (30.0, 80.0),
        (0.0, 90.0),
        (40.0, 100.0),
        (20.0, 80.0),
        (0.0, 100.0),
    ]

    scenarios: List[Scenario] = []
    i = 1
    for income, pair in zip(incomes, pct_pairs):
        for st_pct in pair:
            scenarios.append(Scenario(scenario_id=f"S{i:02d}", total_income=income, stcg_pct=st_pct))
            i += 1
    return scenarios


def write_generate_csv(path: Path, results: Iterable[Result]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fields = [
        "scenario_id",
        "total_income",
        "stcg_pct",
        "ltcg_pct",
        "stcg_amount",
        "ltcg_amount",
        "std_deduction",
        "taxable_income",
        "taxable_ordinary",
        "taxable_ltcg",
        "ordinary_tax",
        "ltcg_0_amount",
        "ltcg_15_amount",
        "ltcg_20_amount",
        "ltcg_tax",
        "niit_threshold",
        "magi_excess",
        "nii",
        "niit_base",
        "niit",
        "base_tax",
        "total_federal_tax",
        "effective_rate_pct",
        "after_tax_income",
        "other_total_federal_tax",
        "other_effective_rate_pct",
        "other_after_tax_income",
        "diff_total_tax",
        "diff_effective_rate_pct",
        "diff_after_tax_income",
    ]
    with path.open("w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        for r in results:
            writer.writerow(
                {
                    "scenario_id": r.scenario_id,
                    "total_income": f"{r.total_income:.2f}",
                    "stcg_pct": f"{r.stcg_pct:.2f}",
                    "ltcg_pct": f"{r.ltcg_pct:.2f}",
                    "stcg_amount": f"{r.stcg_amount:.2f}",
                    "ltcg_amount": f"{r.ltcg_amount:.2f}",
                    "std_deduction": f"{r.std_deduction:.2f}",
                    "taxable_income": f"{r.taxable_income:.2f}",
                    "taxable_ordinary": f"{r.taxable_ordinary:.2f}",
                    "taxable_ltcg": f"{r.taxable_ltcg:.2f}",
                    "ordinary_tax": f"{r.ordinary_tax:.2f}",
                    "ltcg_0_amount": f"{r.ltcg_0_amount:.2f}",
                    "ltcg_15_amount": f"{r.ltcg_15_amount:.2f}",
                    "ltcg_20_amount": f"{r.ltcg_20_amount:.2f}",
                    "ltcg_tax": f"{r.ltcg_tax:.2f}",
                    "niit_threshold": f"{r.niit_threshold:.2f}",
                    "magi_excess": f"{r.magi_excess:.2f}",
                    "nii": f"{r.nii:.2f}",
                    "niit_base": f"{r.niit_base:.2f}",
                    "niit": f"{r.niit:.2f}",
                    "base_tax": f"{r.base_tax:.2f}",
                    "total_federal_tax": f"{r.total_federal_tax:.2f}",
                    "effective_rate_pct": f"{r.effective_rate_pct:.4f}",
                    "after_tax_income": f"{r.after_tax_income:.2f}",
                    "other_total_federal_tax": "",
                    "other_effective_rate_pct": "",
                    "other_after_tax_income": "",
                    "diff_total_tax": "",
                    "diff_effective_rate_pct": "",
                    "diff_after_tax_income": "",
                }
            )


def read_csv_dict(path: Path) -> List[Dict[str, str]]:
    with path.open(newline="") as f:
        return list(csv.DictReader(f))


def to_float(row: Dict[str, str], keys: List[str]) -> float | None:
    for key in keys:
        if key in row and row[key] not in ("", None):
            try:
                return float(row[key])
            except ValueError:
                return None
    return None


def compare_csv(ours_path: Path, other_path: Path, out_path: Path) -> None:
    ours = read_csv_dict(ours_path)
    other = read_csv_dict(other_path)
    other_index = {r.get("scenario_id", ""): r for r in other}

    out_path.parent.mkdir(parents=True, exist_ok=True)
    fields = ours[0].keys()

    with out_path.open("w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=list(fields))
        writer.writeheader()
        for row in ours:
            sid = row.get("scenario_id", "")
            o = other_index.get(sid, {})

            our_total = to_float(row, ["total_federal_tax"])
            our_rate = to_float(row, ["effective_rate_pct"])
            our_after = to_float(row, ["after_tax_income"])

            other_total = to_float(o, ["total_federal_tax", "other_total_federal_tax"])
            other_rate = to_float(o, ["effective_rate_pct", "other_effective_rate_pct"])
            other_after = to_float(o, ["after_tax_income", "other_after_tax_income"])

            if other_total is not None:
                row["other_total_federal_tax"] = f"{other_total:.2f}"
            if other_rate is not None:
                row["other_effective_rate_pct"] = f"{other_rate:.4f}"
            if other_after is not None:
                row["other_after_tax_income"] = f"{other_after:.2f}"

            if our_total is not None and other_total is not None:
                row["diff_total_tax"] = f"{(other_total - our_total):.2f}"
            if our_rate is not None and other_rate is not None:
                row["diff_effective_rate_pct"] = f"{(other_rate - our_rate):.4f}"
            if our_after is not None and other_after is not None:
                row["diff_after_tax_income"] = f"{(other_after - our_after):.2f}"

            writer.writerow(row)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Generate and compare 2026 MFJ capital-gains tax scenarios")
    sub = parser.add_subparsers(dest="cmd", required=True)

    p_gen = sub.add_parser("generate", help="Generate default 20-scenario CSV with our outputs")
    p_gen.add_argument(
        "--out",
        default="/Users/raviaranke/Desktop/zei_simul/shared/tax_scenarios_2026.csv",
        help="Output CSV path",
    )

    p_cmp = sub.add_parser("compare", help="Merge other-agent outputs by scenario_id and compute diffs")
    p_cmp.add_argument(
        "--ours",
        default="/Users/raviaranke/Desktop/zei_simul/shared/tax_scenarios_2026.csv",
        help="Our CSV path",
    )
    p_cmp.add_argument("--other", required=True, help="Other-agent CSV path")
    p_cmp.add_argument(
        "--out",
        default="/Users/raviaranke/Desktop/zei_simul/shared/tax_scenarios_comparison.csv",
        help="Comparison CSV path",
    )

    return parser.parse_args()


def main() -> None:
    args = parse_args()
    if args.cmd == "generate":
        scenarios = default_scenarios()
        results = [run_scenario(s) for s in scenarios]
        write_generate_csv(Path(args.out), results)
        print(f"Wrote {len(results)} scenarios to {args.out}")
        return

    if args.cmd == "compare":
        compare_csv(Path(args.ours), Path(args.other), Path(args.out))
        print(f"Wrote comparison CSV to {args.out}")
        return


if __name__ == "__main__":
    main()
