"use client";

import { useState } from "react";

type Step = {
  col: 0 | 1 | 2 | 3 | 4;
  label: string;
  variant?: "ai" | "solana" | "unwired";
};

type Flow = {
  title: string;
  path: string;
  steps: Step[];
};

const COLS = ["UMKM", "BACKEND / API", "AI ENGINE", "DATABASE", "SOLANA"];
const COL_COLORS = ["#2563eb", "#475569", "#f59e0b", "#059669", "#7c3aed"];

const flows: Flow[] = [
  {
    title: "UMKM Onboarding",
    path: "FE → BE → DB",
    steps: [
      { col: 0, label: "UMKM buka /register" },
      { col: 0, label: "POST /api/umkm/register →" },
      { col: 1, label: "Validasi data & create UMKM profile →" },
      { col: 3, label: "Store UMKM record" },
      { col: 1, label: "Trigger KYC via partner API" },
      { col: 1, label: "← Return: approved / pending" },
      { col: 0, label: "← Tampilkan status onboarding" },
    ],
  },
  {
    title: "Cashflow Aggregation",
    path: "FE → BE → DB → AI",
    steps: [
      { col: 0, label: "UMKM hubungkan sumber pembayaran (QRIS, e-commerce, e-wallet)" },
      { col: 0, label: "POST /api/cashflow/connect →" },
      { col: 1, label: "Fetch riwayat transaksi via partner API →" },
      { col: 1, label: "Normalize & struktur data cashflow →" },
      { col: 3, label: "Store cashflow data" },
      { col: 1, label: "Trigger AI scoring →" },
      { col: 2, label: "Terima data cashflow untuk analisis", variant: "ai" },
    ],
  },
  {
    title: "AI Risk Scoring",
    path: "AI → BE → DB → FE",
    steps: [
      { col: 2, label: "Analisis: revenue stability, seasonality, volatility", variant: "ai" },
      { col: 2, label: "Generate: risk score, max limit, revenue share %", variant: "ai" },
      { col: 2, label: "← Return scoring result →", variant: "ai" },
      { col: 1, label: "Terima scoring result →" },
      { col: 3, label: "Store scoring & financing offer" },
      { col: 1, label: "← Return penawaran ke UMKM" },
      { col: 0, label: "← Tampilkan penawaran pembiayaan" },
    ],
  },
  {
    title: "Financing Disbursement",
    path: "FE → BE → DB → Solana",
    steps: [
      { col: 0, label: "UMKM review & terima penawaran" },
      { col: 0, label: "POST /api/financing/accept →" },
      { col: 1, label: "Create Financing record →" },
      { col: 3, label: "Store financing (status: ACTIVE)" },
      { col: 1, label: "Initialize vault on Solana →" },
      { col: 4, label: "Create financing vault (smart contract)", variant: "solana" },
      { col: 1, label: "Disburse dana ke rekening UMKM (via partner)" },
      { col: 0, label: "← Dana diterima, tampilkan dashboard" },
    ],
  },
  {
    title: "Payment Interception & Auto-Repayment",
    path: "External → BE → DB",
    steps: [
      { col: 0, label: "Customer bayar UMKM via QRIS" },
      { col: 1, label: "Payment gateway webhook → /api/payment/incoming" },
      { col: 1, label: "Hitung split: 85% UMKM / 15% cicilan" },
      { col: 1, label: "Route 85% ke rekening UMKM" },
      { col: 1, label: "Route 15% ke repayment pool →" },
      { col: 3, label: "Update repayment progress" },
      { col: 1, label: "Cek: sudah lunas? → close financing" },
    ],
  },
  {
    title: "On-chain Settlement",
    path: "BE → Solana → DB",
    steps: [
      { col: 1, label: "Repayment pool capai threshold" },
      { col: 1, label: "POST /api/settlement/distribute →" },
      { col: 4, label: "Execute Solana program: distribusi ke capital providers", variant: "solana" },
      { col: 4, label: "Record transaksi on-chain", variant: "solana" },
      { col: 1, label: "← Konfirmasi settlement →" },
      { col: 3, label: "Update settlement record" },
    ],
  },
  {
    title: "Partner Dashboard",
    path: "FE → BE → DB",
    steps: [
      { col: 0, label: "Partner buka /dashboard" },
      { col: 0, label: "GET /api/dashboard/overview →" },
      { col: 1, label: "Query analytics →" },
      { col: 3, label: "Aggregate: active financings, repayment rates, defaults" },
      { col: 1, label: "← Return data" },
      { col: 0, label: "← Tampilkan analytics" },
    ],
  },
];

function FlowSection({ flow, index }: { flow: Flow; index: number }) {
  const [open, setOpen] = useState(true);
  let stepNum = 0;

  return (
    <div className="mb-8 border border-[#e2e8f0] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-8 py-5 bg-[#f8fafc] hover:bg-[#f1f5f9] transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">{open ? "▼" : "▶"}</span>
          <h2 className="text-2xl font-bold text-[#0f172a]">
            {index + 1}. {flow.title}
          </h2>
        </div>
        <span className="text-sm font-mono text-[#94a3b8]">{flow.path}</span>
      </button>

      {open && (
        <div className="px-8 py-6">
          {/* Column headers */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            {COLS.map((col, i) => (
              <div
                key={col}
                className="text-sm font-bold tracking-wider uppercase"
                style={{ color: COL_COLORS[i] }}
              >
                {col}
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="space-y-3">
            {flow.steps.map((step, si) => {
              stepNum++;
              const bgColor =
                step.variant === "ai"
                  ? "bg-[#fef3c7] border-[#f59e0b] text-[#92400e]"
                  : step.variant === "solana"
                  ? "bg-[#ede9fe] border-[#7c3aed] text-[#5b21b6]"
                  : step.variant === "unwired"
                  ? "bg-[#fef2f2] border-[#ef4444] border-dashed text-[#991b1b]"
                  : "bg-[#eff6ff] border-[#2563eb] text-[#1e40af]";

              const numColor =
                step.variant === "ai"
                  ? "bg-[#f59e0b]"
                  : step.variant === "solana"
                  ? "bg-[#7c3aed]"
                  : step.variant === "unwired"
                  ? "bg-[#ef4444]"
                  : "bg-[#2563eb]";

              return (
                <div key={si} className="grid grid-cols-5 gap-4 items-start">
                  {COLS.map((_, ci) => (
                    <div key={ci} className="min-h-[1px]">
                      {ci === step.col && (
                        <div
                          className={`rounded-lg border px-4 py-3 text-sm font-medium flex items-start gap-3 ${bgColor}`}
                        >
                          <span
                            className={`${numColor} text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5`}
                          >
                            {stepNum}
                          </span>
                          <span>{step.label}</span>
                        </div>
                      )}
                      {ci !== step.col && (
                        <div className="text-center text-[#e2e8f0]">&mdash;</div>
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function E2EFlow() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-[#0f172a] mb-2">
            ModalFi &mdash; E2E Business Flow
          </h1>
          <p className="text-lg text-[#475569]">
            End-to-end flow dari setiap fitur di dalam platform
          </p>
        </div>

        {flows.map((flow, i) => (
          <FlowSection key={i} flow={flow} index={i} />
        ))}
      </div>
    </div>
  );
}
