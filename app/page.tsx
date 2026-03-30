"use client";

import { useEffect, useState } from "react";

const SLIDE_COUNT = 11;

function SlideNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".slide");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute("data-slide"));
            if (!isNaN(idx)) setActive(idx);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="slide-nav">
      {Array.from({ length: SLIDE_COUNT }, (_, i) => (
        <a key={i} href={`#slide-${i}`} className={active === i ? "active" : ""} />
      ))}
    </nav>
  );
}

export default function Home() {
  return (
    <>
      <SlideNav />

      {/* SLIDE 0 — HOOK */}
      <section className="slide slide-dark" data-slide="0" id="slide-0">
        <div className="slide-inner text-center">
          <p className="text-2xl tracking-widest uppercase text-[#60a5fa] mb-10">
            Bagaimana kalau cicilan berjalan otomatis?
          </p>
          <h1 className="text-8xl md:text-9xl font-black tracking-tight text-white mb-8">
            ModalFi
          </h1>
          <p className="text-3xl md:text-4xl font-semibold text-[#f59e0b]">
            Kami membiayai momentum.
          </p>
        </div>
      </section>

      {/* SLIDE 1 — MASALAH */}
      <section className="slide" data-slide="1" id="slide-1">
        <div className="slide-inner">
          <h2 className="text-6xl font-black mb-12 text-[#0f172a] leading-tight">
            63 juta UMKM.<br />Mayoritas tidak bisa pinjam.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-card">
              <div className="text-6xl font-black text-[#ef4444]">70%</div>
              <div className="mt-3 text-lg font-semibold text-[#475569]">Tanpa akses pembiayaan</div>
            </div>
            <div className="stat-card">
              <div className="text-5xl font-black text-[#ef4444]">Rp 1.600T</div>
              <div className="mt-3 text-lg font-semibold text-[#475569]">Gap pembiayaan</div>
            </div>
            <div className="stat-card">
              <div className="text-6xl font-black text-[#ef4444]">0</div>
              <div className="mt-3 text-lg font-semibold text-[#475569]">Agunan &amp; riwayat kredit</div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 2 — SOLUSI LAIN GAGAL */}
      <section className="slide" data-slide="2" id="slide-2">
        <div className="slide-inner">
          <h2 className="text-5xl font-black mb-10 text-[#0f172a]">
            Semua solusi yang ada gagal.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="step-card border-l-4 border-l-[#ef4444]">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Bank</h3>
              <p className="text-lg text-[#475569]">Butuh agunan &amp; dokumen</p>
              <p className="mt-4 text-lg font-black text-[#ef4444]">70% tereliminasi</p>
            </div>
            <div className="step-card border-l-4 border-l-[#f59e0b]">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Fintech</h3>
              <p className="text-lg text-[#475569]">Bunga 20&ndash;40%, cicilan tetap</p>
              <p className="mt-4 text-lg font-black text-[#f59e0b]">Tidak ikut cashflow</p>
            </div>
            <div className="step-card border-l-4 border-l-[#475569]">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Platform</h3>
              <p className="text-lg text-[#475569]">Hanya seller sendiri</p>
              <p className="mt-4 text-lg font-black text-[#475569]">Walled garden</p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 3 — INSIGHT */}
      <section className="slide slide-accent" data-slide="3" id="slide-3">
        <div className="slide-inner text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
            UMKM bukan tidak layak kredit.
          </h2>
          <p className="text-3xl md:text-4xl text-white/80 mt-8">
            Cashflow mereka tidak terlihat.
          </p>
        </div>
      </section>

      {/* SLIDE 4 — CARA KERJA */}
      <section className="slide" data-slide="4" id="slide-4">
        <div className="slide-inner">
          <h2 className="text-5xl font-black mb-12 text-[#0f172a]">
            Tiga langkah. Tanpa dokumen.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="step-card text-center">
              <div className="step-number mb-4 text-5xl">01</div>
              <h3 className="text-2xl font-bold text-[#0f172a]">Hubungkan</h3>
              <p className="text-lg text-[#475569] mt-2">QRIS / e-commerce / e-wallet</p>
            </div>
            <div className="step-card text-center">
              <div className="step-number mb-4 text-5xl">02</div>
              <h3 className="text-2xl font-bold text-[#0f172a]">Dapat Dana</h3>
              <p className="text-lg text-[#475569] mt-2">AI nilai cashflow &rarr; dana cair</p>
            </div>
            <div className="step-card text-center border-2 border-[#2563eb]">
              <div className="step-number mb-4 text-5xl">03</div>
              <h3 className="text-2xl font-bold text-[#2563eb]">Auto-Bayar</h3>
              <p className="text-lg text-[#475569] mt-2">Dipotong otomatis dari pendapatan</p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 5 — REVENUE INTERCEPTION */}
      <section className="slide slide-dark" data-slide="5" id="slide-5">
        <div className="slide-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8 text-white leading-tight">
                Cicilan diintersep,<br />bukan ditagih.
              </h2>
              <p className="text-2xl text-[#cbd5e1]">
                Pembayaran di-split <strong className="text-white">sebelum</strong> sampai ke UMKM.
              </p>
              <p className="text-2xl text-[#cbd5e1] mt-4">
                Risiko gagal bayar <strong className="text-[#f59e0b]">turun drastis</strong>.
              </p>
            </div>
            <div className="flex flex-col items-center gap-0">
              <div className="rounded-xl bg-white/10 border border-white/20 px-8 py-5 font-semibold text-white text-center text-xl w-full max-w-xs">
                Pembayaran QRIS
              </div>
              <div className="w-0.5 h-8 bg-gradient-to-b from-[#60a5fa] to-transparent" />
              <div className="rounded-xl bg-[#2563eb] px-8 py-5 font-black text-white text-center text-2xl w-full max-w-xs">
                SPLIT
              </div>
              <div className="flex gap-8 mt-0">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#2563eb] to-[#059669]" />
                  <div className="rounded-xl bg-[#059669]/20 border-2 border-[#059669] px-8 py-5 text-center">
                    <div className="text-4xl font-black text-[#34d399]">85%</div>
                    <div className="text-lg text-[#94a3b8] mt-1">UMKM</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#2563eb] to-[#f59e0b]" />
                  <div className="rounded-xl bg-[#f59e0b]/20 border-2 border-[#f59e0b] px-8 py-5 text-center">
                    <div className="text-4xl font-black text-[#fbbf24]">15%</div>
                    <div className="text-lg text-[#94a3b8] mt-1">Cicilan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 6 — KASUS NYATA */}
      <section className="slide" data-slide="6" id="slide-6">
        <div className="slide-inner">
          <h2 className="text-5xl font-black mb-10 text-[#0f172a]">
            Simulasi riil.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="step-card border-t-4 border-t-[#f59e0b]">
              <span className="pill bg-[#f59e0b]/10 text-[#f59e0b] mb-3 text-base">F&B</span>
              <p className="text-lg text-[#475569] mt-2">Rp 30jt/bln &middot; Butuh Rp 10jt</p>
              <p className="text-lg text-[#ef4444] mt-2">Bank ditolak &middot; Fintech Rp 3,8jt/bln tetap</p>
              <p className="text-xl font-black text-[#059669] mt-4">15% share &rarr; lunas 2,5 bulan</p>
            </div>
            <div className="step-card border-t-4 border-t-[#2563eb]">
              <span className="pill bg-[#2563eb]/10 text-[#2563eb] mb-3 text-base">E-Commerce</span>
              <p className="text-lg text-[#475569] mt-2">Rp 50jt/bln &middot; Butuh Rp 20jt</p>
              <p className="text-lg text-[#475569] mt-2">Revenue naik ke Rp 80jt</p>
              <p className="text-xl font-black text-[#2563eb] mt-4">12% share &rarr; lunas 3 bulan</p>
            </div>
            <div className="step-card border-t-4 border-t-[#059669]">
              <span className="pill bg-[#059669]/10 text-[#059669] mb-3 text-base">Jasa</span>
              <p className="text-lg text-[#475569] mt-2">Rp 20jt/bln &middot; Butuh Rp 15jt</p>
              <p className="text-lg text-[#475569] mt-2">Revenue naik ke Rp 35jt</p>
              <p className="text-xl font-black text-[#059669] mt-4">10% share &rarr; lunas 4 bulan</p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 7 — MODEL BISNIS */}
      <section className="slide" data-slide="7" id="slide-7">
        <div className="slide-inner">
          <h2 className="text-5xl font-black mb-10 text-[#0f172a]">
            Model bisnis.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card">
              <div className="text-5xl font-black text-[#2563eb]">~2%</div>
              <div className="mt-3 text-lg font-semibold text-[#475569]">Take rate</div>
            </div>
            <div className="stat-card">
              <div className="text-4xl font-black text-[#2563eb]">Rp 10jt</div>
              <div className="mt-3 text-lg font-semibold text-[#475569]">Rata-rata</div>
            </div>
            <div className="stat-card">
              <div className="text-5xl font-black text-[#2563eb]">2&ndash;4</div>
              <div className="mt-3 text-lg font-semibold text-[#475569]">Bulan durasi</div>
            </div>
            <div className="stat-card">
              <div className="text-4xl font-black text-[#2563eb]">10&ndash;15%</div>
              <div className="mt-3 text-lg font-semibold text-[#475569]">Return pemodal</div>
            </div>
          </div>
          <p className="mt-10 text-2xl text-[#475569] text-center">
            <strong className="text-[#0f172a]">BEP:</strong> 10K pembiayaan aktif
          </p>
        </div>
      </section>

      {/* SLIDE 8 — ROADMAP */}
      <section className="slide" data-slide="8" id="slide-8">
        <div className="slide-inner">
          <h2 className="text-5xl font-black mb-12 text-[#0f172a]">Roadmap.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="step-card border-t-4 border-t-[#2563eb]">
              <span className="pill bg-[#2563eb] text-white mb-4 text-base">Q2 2026</span>
              <h3 className="text-2xl font-bold text-[#0f172a] mt-2">Validasi</h3>
              <p className="text-lg text-[#475569] mt-3">PoC live &middot; 1 mitra &middot; 10 UMKM</p>
            </div>
            <div className="step-card border-t-4 border-t-[#f59e0b]">
              <span className="pill bg-[#f59e0b] text-white mb-4 text-base">Q3&ndash;Q4 2026</span>
              <h3 className="text-2xl font-bold text-[#0f172a] mt-2">Buktikan</h3>
              <p className="text-lg text-[#475569] mt-3">100 UMKM &middot; Interception live &middot; Unit economics</p>
            </div>
            <div className="step-card border-t-4 border-t-[#059669]">
              <span className="pill bg-[#059669] text-white mb-4 text-base">2027</span>
              <h3 className="text-2xl font-bold text-[#0f172a] mt-2">Ekspansi</h3>
              <p className="text-lg text-[#475569] mt-3">Multi-mitra &middot; Kapital institusional &middot; Risk API</p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 9 — THE ASK */}
      <section className="slide" data-slide="9" id="slide-9">
        <div className="slide-inner">
          <h2 className="text-5xl font-black mb-10 text-[#0f172a]">Yang kami butuhkan.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-5 text-2xl text-[#334155]">
              <p><span className="text-[#2563eb] font-bold">&#10003;</span> Build PoC &rarr; MVP</p>
              <p><span className="text-[#2563eb] font-bold">&#10003;</span> Mitra PoS + BPRS pertama</p>
              <p><span className="text-[#2563eb] font-bold">&#10003;</span> Biayai 100 UMKM</p>
              <p><span className="text-[#2563eb] font-bold">&#10003;</span> Buktikan unit economics</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Selain modal</h3>
              <div className="space-y-4 text-xl text-[#475569]">
                <p>Intro ke PoS &amp; BPRS</p>
                <p>Partnership payment gateway</p>
                <p>Advisory regulasi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 10 — CLOSING */}
      <section className="slide slide-dark" data-slide="10" id="slide-10">
        <div className="slide-inner text-center">
          <h1 className="text-7xl md:text-8xl font-black tracking-tight text-white mb-8">
            Cashflow is the<br />new collateral.
          </h1>
          <div className="w-20 h-1 bg-[#2563eb] rounded-full mx-auto mb-8" />
          <p className="text-3xl text-[#60a5fa] font-semibold">ModalFi</p>
        </div>
      </section>
    </>
  );
}
