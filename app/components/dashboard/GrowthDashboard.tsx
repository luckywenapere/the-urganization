"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import Chart from "chart.js/auto";
import type {
  Chart as ChartInstance,
  ChartOptions,
  TooltipItem,
} from "chart.js";

export type WeeklyUserCount = {
  weekLabel: string;
  totalUsers: number;
};

type DashboardWeek = {
  label: string;
  users: number;
};

type ChartPoint = number | null;
type MetricClass = "good" | "great" | "danger" | "neutral";
type VerdictClass = "great" | "good" | "early" | "needs-work";
type DashboardStyle = CSSProperties & Record<`--${string}`, string>;

const dashboardStyle: DashboardStyle = {
  "--color-text-primary": "var(--marketing-text)",
  "--color-text-secondary": "var(--marketing-text-muted)",
  "--color-text-tertiary": "var(--marketing-text-subtle)",
  "--color-background-secondary": "var(--marketing-surface-muted)",
  "--color-border-tertiary": "var(--marketing-border-strong)",
  "--border-radius-md": "8px",
};

function toDashboardWeeks(weeks: WeeklyUserCount[]) {
  return weeks.map((week) => ({
    label: week.weekLabel,
    users: Math.max(0, week.totalUsers),
  }));
}

function wgr(prev: number | null, curr: number) {
  if (!prev || prev === 0) return null;
  return (curr - prev) / prev;
}

function setMetric(val: string, cls: MetricClass) {
  return {
    className: `metric-value ${cls}`,
    value: val,
  };
}

function getTooltipValue(value: unknown) {
  return typeof value === "number" ? value.toLocaleString() : "—";
}

export default function GrowthDashboard({
  weeks,
}: {
  weeks: WeeklyUserCount[];
}) {
  const [weekRows, setWeekRows] = useState<DashboardWeek[]>(() =>
    toDashboardWeeks(weeks),
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef =
    useRef<ChartInstance<"line", ChartPoint[], string> | null>(null);

  useEffect(() => {
    setWeekRows(toDashboardWeeks(weeks));
  }, [weeks]);

  const dashboardState = useMemo(() => {
    const n = weekRows.length;
    const weekChanges = weekRows.map((week, index) => {
      const prev = index > 0 ? weekRows[index - 1].users : null;
      const rate = wgr(prev, week.users);
      const rateStr =
        rate !== null
          ? `${rate >= 0 ? "+" : ""}${(rate * 100).toFixed(1)}%`
          : "—";
      const cls = rate !== null ? (rate >= 0 ? "pos" : "neg") : "";

      return {
        ...week,
        cls,
        rateStr,
      };
    });

    if (n < 2) {
      return {
        avgRate: null,
        barColor: "#1D9E75",
        barPct: "0",
        bvYours: "—",
        chartData: [] as number[],
        chartLabels: [] as string[],
        latest: undefined,
        metrics: {
          avg: setMetric("—", "neutral"),
          projected: setMetric("—", "neutral"),
          total: setMetric(n > 0 ? weekRows[n - 1].users.toLocaleString() : "—", "neutral"),
          weeklyGrowth: setMetric("—", "neutral"),
        },
        verdict:
          "Two weeks of signup data will unlock Urganize's growth readout.",
        verdictClass: "early" as VerdictClass,
        weekChanges,
      };
    }

    const lastRate = wgr(weekRows[n - 2].users, weekRows[n - 1].users);
    const numericLastRate = lastRate ?? 0;
    const window4 = Math.min(n - 1, 4);
    const rates = [];

    for (let i = n - window4; i < n; i += 1) {
      const r = wgr(weekRows[i - 1].users, weekRows[i].users);
      if (r !== null) rates.push(r);
    }

    const avgRate =
      rates.length > 0 ? rates.reduce((a, b) => a + b, 0) / rates.length : 0;
    const latest = weekRows[n - 1].users;
    const projected = Math.round(latest * Math.pow(1 + avgRate, 12));

    const lastRateClass: MetricClass =
      numericLastRate >= 0.1
        ? "great"
        : numericLastRate >= 0.05
          ? "good"
          : numericLastRate >= 0
            ? "neutral"
            : "danger";
    const avgClass: MetricClass =
      avgRate >= 0.1
        ? "great"
        : avgRate >= 0.05
          ? "good"
          : avgRate >= 0
            ? "neutral"
            : "danger";

    const barPct = Math.min(Math.max((avgRate / 0.2) * 100, 0), 100).toFixed(1);
    const barColor =
      avgRate >= 0.1
        ? "#0F6E56"
        : avgRate >= 0.05
          ? "#1D9E75"
          : avgRate >= 0
            ? "#888780"
            : "#D85A30";

    let verdict: string;
    let verdictClass: VerdictClass;

    if (avgRate >= 0.1) {
      verdict =
        "Breakout signal. Urganize is growing at 10%+ week over week, which means the signup curve is compounding fast enough to deserve serious focus.";
      verdictClass = "great";
    } else if (avgRate >= 0.05) {
      verdict =
        "Healthy momentum. Urganize is in the 5–7% weekly zone, a strong pace for turning early demand into a repeatable growth loop.";
      verdictClass = "good";
    } else if (avgRate >= 0.01) {
      verdict =
        "Building momentum. Signups are moving, but Urganize is not yet in the weekly range that compounds quickly. Double down on the channels creating real pull.";
      verdictClass = "early";
    } else if (avgRate >= 0) {
      verdict =
        "Mostly flat. The current signup pace is close to zero, so the next priority is finding the message, audience, or release workflow that creates sharper demand.";
      verdictClass = "early";
    } else {
      verdict =
        "Softening. The cumulative curve dipped week over week, so Urganize should treat this as a signal to inspect acquisition quality and recent signup sources.";
      verdictClass = "needs-work";
    }

    return {
      avgRate,
      barColor,
      barPct,
      bvYours: `${(avgRate * 100).toFixed(1)}%`,
      chartData: weekRows.map((week) => week.users),
      chartLabels: weekRows.map((week) => week.label),
      latest,
      metrics: {
        avg: setMetric(`${(avgRate * 100).toFixed(1)}%`, avgClass),
        projected: setMetric(projected.toLocaleString(), avgClass),
        total: setMetric(latest.toLocaleString(), "neutral"),
        weeklyGrowth: setMetric(
          `${(numericLastRate * 100).toFixed(1)}%`,
          lastRateClass,
        ),
      },
      verdict,
      verdictClass,
      weekChanges,
    };
  }, [weekRows]);

  useEffect(() => {
    function updateChart(
      labels: string[],
      data: number[],
      avgRate: number | null,
      latest?: number,
    ) {
      if (!canvasRef.current) {
        return;
      }

      const ctx = canvasRef.current.getContext("2d");

      if (!ctx) {
        return;
      }

      const projLabels = [];
      const projData = [];

      if (avgRate !== null && latest !== undefined && labels.length > 0) {
        const lastLabel = labels[labels.length - 1];

        for (let i = 0; i <= 5; i += 1) {
          projLabels.push(i === 0 ? lastLabel : `+${i}w`);
          projData.push(Math.round(latest * Math.pow(1 + avgRate, i)));
        }
      }

      const allLabels = [...labels, ...projLabels.slice(1)];
      const actualPad = new Array(
        Math.max(allLabels.length - labels.length, 0),
      ).fill(null);
      const projPad = new Array(Math.max(labels.length - 1, 0)).fill(null);

      if (chartRef.current) chartRef.current.destroy();

      const options: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx: TooltipItem<"line">) =>
                ` ${ctx.dataset.label}: ${getTooltipValue(ctx.raw)}`,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              font: { size: 11 },
              color: "#888780",
              autoSkip: false,
              maxRotation: 45,
            },
            grid: { color: "rgba(136,135,128,0.12)" },
          },
          y: {
            ticks: {
              font: { size: 11 },
              color: "#888780",
              callback: (v) =>
                Number(v) >= 1000 ? `${(Number(v) / 1000).toFixed(1)}k` : v,
            },
            grid: { color: "rgba(136,135,128,0.12)" },
          },
        },
      };

      chartRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: allLabels,
          datasets: [
            {
              label: "Actual users",
              data: [...data, ...actualPad],
              borderColor: "#1D9E75",
              backgroundColor: "rgba(29,158,117,0.08)",
              borderWidth: 2,
              pointRadius: 4,
              pointBackgroundColor: "#1D9E75",
              tension: 0.3,
              fill: true,
            },
            {
              label: "Projected (current rate)",
              data: projLabels.length > 0 ? [...projPad, ...projData] : [],
              borderColor: "#888780",
              borderWidth: 1.5,
              borderDash: [5, 4],
              pointRadius: 3,
              pointBackgroundColor: "#888780",
              tension: 0.3,
              fill: false,
            },
          ],
        },
        options,
      });
    }

    updateChart(
      dashboardState.chartLabels,
      dashboardState.chartData,
      dashboardState.avgRate,
      dashboardState.latest,
    );

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [dashboardState]);

  function render() {
    const {
      barColor,
      barPct,
      bvYours,
      metrics,
      verdict,
      verdictClass,
      weekChanges,
    } = dashboardState;

    return (
      <>
        <h2 className="sr-only">
          Urganize growth dashboard showing weekly signup momentum, cumulative
          users, benchmark progress, and projected growth.
        </h2>

        <style>{`
  .dash { padding: 1.5rem 0; font-family: var(--font-sans); }
  .section-label { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-tertiary); margin: 0 0 10px; font-weight: 500; }
  .metric-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin-bottom: 1.5rem; }
  .metric { background: var(--color-background-secondary); border-radius: var(--border-radius-md); padding: 14px 16px; }
  .metric-label { font-size: 12px; color: var(--color-text-secondary); margin: 0 0 4px; }
  .metric-value { font-size: 22px; font-weight: 500; color: var(--color-text-primary); margin: 0; }
  .metric-sub { font-size: 11px; color: var(--color-text-tertiary); margin: 2px 0 0; }
  .metric-value.good { color: #1D9E75; }
  .metric-value.great { color: #0F6E56; }
  .metric-value.danger { color: #D85A30; }
  .metric-value.neutral { color: var(--color-text-primary); }
  .input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 0.75rem; }
  .week-input { display: flex; flex-direction: column; gap: 4px; }
  .week-input label { font-size: 12px; color: var(--color-text-secondary); }
  .week-input input { width: 100%; box-sizing: border-box; }
  .add-week-btn { margin-top: 6px; width: 100%; cursor: pointer; font-size: 13px; }
  .divider { border: none; border-top: 0.5px solid var(--color-border-tertiary); margin: 1.25rem 0; }
  .pg-bar { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
  .pg-bar-label { font-size: 12px; color: var(--color-text-secondary); min-width: 80px; }
  .pg-bar-track { flex: 1; height: 6px; background: var(--color-background-secondary); border-radius: 3px; overflow: hidden; }
  .pg-bar-fill { height: 100%; border-radius: 3px; transition: width 0.4s ease; }
  .pg-bar-val { font-size: 12px; font-weight: 500; min-width: 36px; text-align: right; color: var(--color-text-primary); }
  .verdict { border-radius: var(--border-radius-md); padding: 12px 16px; font-size: 13px; line-height: 1.5; margin-top: 1rem; }
  .verdict.great { background: #E1F5EE; color: #085041; }
  .verdict.good { background: #EAF3DE; color: #27500A; }
  .verdict.early { background: var(--color-background-secondary); color: var(--color-text-secondary); }
  .verdict.needs-work { background: #FAECE7; color: #4A1B0C; }
  .chart-wrap { position: relative; width: 100%; height: 220px; margin-top: 1rem; }
  .weeks-list { display: flex; flex-direction: column; gap: 6px; margin-bottom: 1rem; }
  .week-row { display: flex; align-items: center; gap: 8px; font-size: 13px; }
  .week-row span { color: var(--color-text-secondary); min-width: 56px; }
  .week-row strong { color: var(--color-text-primary); min-width: 60px; }
  .week-row .change { font-size: 12px; }
  .week-row .change.pos { color: #1D9E75; }
  .week-row .change.neg { color: #D85A30; }
  .week-row button { margin-left: auto; background: none; border: none; cursor: pointer; font-size: 13px; color: var(--color-text-tertiary); padding: 2px 6px; }
  .pg-label { font-size: 12px; color: var(--color-text-tertiary); text-align: right; }
`}</style>

        <div className="dash" style={dashboardStyle}>
          <div
            style={{
              alignItems: "baseline",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1.25rem",
            }}
          >
            <div>
              <p
                style={{
                  color: "var(--color-text-primary)",
                  fontSize: "16px",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Urganize growth dashboard
              </p>
              <p
                style={{
                  color: "var(--color-text-tertiary)",
                  fontSize: "12px",
                  margin: "2px 0 0",
                }}
              >
                Weekly signup momentum from the live Urganize database
              </p>
            </div>
            <div
              id="goal-badge"
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "12px",
              }}
            />
          </div>

          <div className="metric-grid" id="metrics">
            <div className="metric">
              <p className="metric-label">Weekly growth</p>
              <p className={metrics.weeklyGrowth.className} id="m-wgr">
                {metrics.weeklyGrowth.value}
              </p>
              <p className="metric-sub">latest week</p>
            </div>
            <div className="metric">
              <p className="metric-label">4-week momentum</p>
              <p className={metrics.avg.className} id="m-avg">
                {metrics.avg.value}
              </p>
              <p className="metric-sub">rolling pace</p>
            </div>
            <div className="metric">
              <p className="metric-label">Signed-up users</p>
              <p className={metrics.total.className} id="m-total">
                {metrics.total.value}
              </p>
              <p className="metric-sub">waitlist total</p>
            </div>
            <div className="metric">
              <p className="metric-label">12-week outlook</p>
              <p className={metrics.projected.className} id="m-proj">
                {metrics.projected.value}
              </p>
              <p className="metric-sub">at current pace</p>
            </div>
          </div>

          <hr className="divider" />

          <p className="section-label">Growth benchmarks</p>
          <div id="benchmarks">
            <div className="pg-bar">
              <span className="pg-bar-label">Urganize pace</span>
              <div className="pg-bar-track">
                <div
                  className="pg-bar-fill"
                  id="bar-yours"
                  style={{ background: barColor, width: `${barPct}%` }}
                />
              </div>
              <span className="pg-bar-val" id="bv-yours">
                {bvYours}
              </span>
            </div>
            <div className="pg-bar">
              <span className="pg-bar-label">Healthy (5–7%)</span>
              <div className="pg-bar-track">
                <div
                  className="pg-bar-fill"
                  style={{ background: "#9FE1CB", width: "35%" }}
                />
              </div>
              <span className="pg-bar-val pg-label">5–7%</span>
            </div>
            <div className="pg-bar">
              <span className="pg-bar-label">Breakout (10%)</span>
              <div className="pg-bar-track">
                <div
                  className="pg-bar-fill"
                  style={{ background: "#5DCAA5", width: "50%" }}
                />
              </div>
              <span className="pg-bar-val pg-label">10%</span>
            </div>
          </div>

          <div id="verdict" className={`verdict ${verdictClass}`}>
            {verdict}
          </div>

          <hr className="divider" />

          <p className="section-label">Weekly data</p>
          <div id="weeks-list" className="weeks-list">
            {weekChanges.length === 0 ? (
              <p
                style={{
                  color: "var(--color-text-tertiary)",
                  fontSize: "13px",
                  margin: 0,
                }}
              >
                No signup data yet.
              </p>
            ) : (
              weekChanges.map((week, index) => (
                <div className="week-row" key={`${week.label}-${index}`}>
                  <span>{week.label}</span>
                  <strong>{week.users.toLocaleString()}</strong>
                  <span className={`change ${week.cls}`}>{week.rateStr}</span>
                </div>
              ))
            )}
          </div>

          <hr className="divider" />
          <p className="section-label">Growth curve</p>
          <div className="chart-wrap">
            <canvas
              id="growthChart"
              ref={canvasRef}
              role="img"
              aria-label="Line chart showing user growth over time with a projected trend line."
            >
              Urganize weekly signup data.
            </canvas>
          </div>
        </div>

        <div
          id="chart-legend"
          style={{
            color: "var(--color-text-secondary)",
            display: "flex",
            fontSize: "12px",
            gap: "16px",
            marginTop: "8px",
            ...dashboardStyle,
          }}
        >
          <span style={{ alignItems: "center", display: "flex", gap: "4px" }}>
            <span
              style={{
                background: "#1D9E75",
                borderRadius: "2px",
                height: "10px",
                width: "10px",
              }}
            />
            Actual
          </span>
          <span style={{ alignItems: "center", display: "flex", gap: "4px" }}>
            <span
              style={{
                background: "#888780",
                height: "3px",
                width: "10px",
              }}
            />
            Projected
          </span>
        </div>
      </>
    );
  }

  return render();
}
