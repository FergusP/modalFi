'use client';

import { useEffect, useState } from 'react';

const SLIDE_COUNT = 9;

function SlideNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.slide');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute('data-slide'));
            if (!isNaN(idx)) setActive(idx);
          }
        });
      },
      { threshold: 0.5 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className='slide-nav'>
      {Array.from({ length: SLIDE_COUNT }, (_, i) => (
        <a
          key={i}
          href={`#slide-${i}`}
          className={active === i ? 'active' : ''}
        />
      ))}
    </nav>
  );
}

export default function Home() {
  return (
    <>
      <SlideNav />

      {/* SLIDE 0 — HOOK */}
      <section className='slide slide-dark' data-slide='0' id='slide-0'>
        <div className='slide-inner text-center'>
          <h1 className='text-5xl md:text-7xl font-black tracking-tight text-white mb-10 leading-tight'>
            Cashflow is the
            <br />
            new collateral.
          </h1>
          <div className='w-16 h-1 bg-[#2563eb] rounded-full mx-auto mb-6' />
          <p className='text-4xl md:text-5xl text-[#60a5fa] font-bold'>
            ModalFi
          </p>
        </div>
      </section>

      {/* SLIDE 1 — MASALAH */}
      <section className='slide' data-slide='1' id='slide-1'>
        <div className='slide-inner'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12'>
            <div>
              <h2 className='text-6xl font-black mb-4 text-[#0f172a] leading-tight'>
                63 juta UMKM.
                <br />
                Mayoritas tidak bisa pinjam.
              </h2>
              <p className='text-2xl text-[#2563eb] font-semibold'>
                Bukan kekurangan uang. Kekurangan cara membuktikan kelayakan.
              </p>
            </div>
            <div className='rounded-2xl overflow-hidden shadow-lg'>
              <img
                src='/rejected.png'
                alt='UMKM ditolak bank'
                className='w-full h-auto'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='stat-card'>
              <div className='text-6xl font-black text-[#ef4444]'>70%</div>
              <div className='mt-3 text-lg font-semibold text-[#475569]'>
                Tanpa akses pembiayaan
              </div>
            </div>
            <div className='stat-card'>
              <div className='text-5xl font-black text-[#ef4444]'>Rp 2400T</div>
              <div className='mt-3 text-lg font-semibold text-[#475569]'>
                Gap pembiayaan
              </div>
            </div>
            <div className='stat-card'>
              <div className='text-6xl font-black text-[#ef4444]'>0</div>
              <div className='mt-3 text-lg font-semibold text-[#475569]'>
                Agunan &amp; riwayat kredit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 2 — SOLUSI LAIN GAGAL */}
      <section className='slide' data-slide='2' id='slide-2'>
        <div className='slide-inner'>
          <h2 className='text-5xl font-black mb-10 text-[#0f172a]'>
            Semua solusi yang ada gagal.
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='step-card border-l-4 border-l-[#ef4444]'>
              <h3 className='text-2xl font-bold text-[#0f172a] mb-4'>Bank</h3>
              <p className='text-lg text-[#475569]'>
                Butuh agunan &amp; dokumen
              </p>
              <p className='mt-4 text-lg font-black text-[#ef4444]'>
                70% tereliminasi
              </p>
            </div>
            <div className='step-card border-l-4 border-l-[#f59e0b]'>
              <h3 className='text-2xl font-bold text-[#0f172a] mb-4'>
                Fintech
              </h3>
              <p className='text-lg text-[#475569]'>
                Bunga 20&ndash;40%, cicilan tetap
              </p>
              <p className='mt-4 text-lg font-black text-[#f59e0b]'>
                Tidak ikut cashflow
              </p>
            </div>
            <div className='step-card border-l-4 border-l-[#475569]'>
              <h3 className='text-2xl font-bold text-[#0f172a] mb-4'>
                Platform
              </h3>
              <p className='text-lg text-[#475569]'>Hanya seller sendiri</p>
              <p className='mt-4 text-lg font-black text-[#475569]'>
                Walled garden
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 3 — CARA KERJA */}
      <section className='slide' data-slide='3' id='slide-3'>
        <div className='slide-inner'>
          <h2 className='text-5xl font-black mb-12 text-[#0f172a]'>
            Tiga langkah. Tanpa dokumen.
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='step-card text-center'>
              <div className='step-number mb-4 text-5xl'>01</div>
              <h3 className='text-2xl font-bold text-[#0f172a]'>
                Hubungkan Data PoS
              </h3>
              <p className='text-lg text-[#475569] mt-2'>
                UMKM sambungkan data transaksi dari QRIS, e-commerce, atau
                e-wallet yang dipakai
              </p>
            </div>
            <div className='step-card text-center'>
              <div className='step-number mb-4 text-5xl'>02</div>
              <h3 className='text-2xl font-bold text-[#0f172a]'>
                AI Hitung &amp; Cairkan
              </h3>
              <p className='text-lg text-[#475569] mt-2'>
                AI analisis riwayat cashflow, tentukan limit &amp; % cicilan,
                dana langsung cair
              </p>
            </div>
            <div className='step-card text-center border-2 border-[#2563eb]'>
              <div className='step-number mb-4 text-5xl'>03</div>
              <h3 className='text-2xl font-bold text-[#2563eb]'>
                Bayar dari Omset Harian
              </h3>
              <p className='text-lg text-[#475569] mt-2'>
                Setiap hari, % kecil dari omset dipotong otomatis lewat gateway.
                Sepi? Bayar kecil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 5 — PAYMENT FLOW (simplified horizontal) */}
      <section className='slide slide-dark' data-slide='4' id='slide-4'>
        <div className='slide-inner'>
          <h2 className='text-5xl font-black mb-4 text-white text-center'>
            Alur pembayaran.
          </h2>
          <p className='text-xl text-[#94a3b8] text-center mb-12'>
            Daily pooling &rarr; AI hitung rate &rarr; split otomatis EOD
          </p>

          {/* Horizontal flow */}
          <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
            <div className='rounded-xl bg-white/10 border border-white/20 px-6 py-6 text-center min-w-[160px]'>
              <div className='text-3xl mb-2'>&#128179;</div>
              <div className='text-xl font-bold text-white'>QRIS</div>
              <div className='text-sm text-[#94a3b8]'>Transaksi harian</div>
            </div>

            <div className='text-3xl text-[#60a5fa] font-bold hidden md:block'>
              &rarr;
            </div>
            <div className='text-3xl text-[#60a5fa] font-bold md:hidden'>
              &darr;
            </div>

            <div className='rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/30 px-6 py-6 text-center min-w-[160px]'>
              <div className='text-3xl mb-2'>&#129302;</div>
              <div className='text-xl font-bold text-[#f59e0b]'>AI Rate</div>
              <div className='text-sm text-[#94a3b8]'>Hitung % dinamis</div>
            </div>

            <div className='text-3xl text-[#60a5fa] font-bold hidden md:block'>
              &rarr;
            </div>
            <div className='text-3xl text-[#60a5fa] font-bold md:hidden'>
              &darr;
            </div>

            <div className='rounded-xl bg-[#2563eb] px-6 py-6 text-center min-w-[160px]'>
              <div className='text-3xl mb-2'>&#9986;</div>
              <div className='text-xl font-black text-white'>SPLIT</div>
              <div className='text-sm text-white/60'>Gateway EOD</div>
            </div>

            <div className='text-3xl text-[#60a5fa] font-bold hidden md:block'>
              &rarr;
            </div>
            <div className='text-3xl text-[#60a5fa] font-bold md:hidden'>
              &darr;
            </div>

            <div className='flex flex-col gap-3'>
              <div className='rounded-xl bg-[#059669]/20 border-2 border-[#059669] px-6 py-4 text-center'>
                <div className='text-2xl font-black text-[#34d399]'>X%</div>
                <div className='text-sm text-[#94a3b8]'>Rekening UMKM</div>
              </div>
              <div className='rounded-xl bg-[#f59e0b]/20 border-2 border-[#f59e0b] px-6 py-4 text-center'>
                <div className='text-2xl font-black text-[#fbbf24]'>Y%</div>
                <div className='text-sm text-[#94a3b8]'>Vault on-chain</div>
              </div>
            </div>

            <div className='text-3xl text-[#60a5fa] font-bold hidden md:block'>
              &rarr;
            </div>
            <div className='text-3xl text-[#60a5fa] font-bold md:hidden'>
              &darr;
            </div>

            <div className='rounded-xl bg-[#7c3aed]/20 border-2 border-[#7c3aed] px-6 py-6 text-center min-w-[160px]'>
              <div className='text-3xl mb-2'>&#128184;</div>
              <div className='text-xl font-bold text-[#a78bfa]'>Pemodal</div>
              <div className='text-sm text-[#94a3b8]'>Offramp ke rekening</div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 5 — VALUE: UMKM / INVESTOR / PARTNER */}
      <section className='slide' data-slide='5' id='slide-5'>
        <div className='slide-inner'>
          <h2 className='text-5xl font-black mb-10 text-[#0f172a]'>
            Nilai untuk semua pihak.
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='step-card border-t-4 border-t-[#2563eb]'>
              <h3 className='text-2xl font-bold text-[#2563eb] mb-4'>UMKM</h3>
              <p className='text-lg text-[#475569]'>Tanpa agunan</p>
              <p className='text-lg text-[#475569] mt-2'>
                Cicilan ikut pendapatan
              </p>
              <p className='text-lg text-[#475569] mt-2'>
                Dana cair dalam hitungan hari
              </p>
            </div>
            <div className='step-card border-t-4 border-t-[#f59e0b]'>
              <h3 className='text-2xl font-bold text-[#f59e0b] mb-4'>
                Investor
              </h3>
              <p className='text-lg text-[#475569]'>
                Return 10&ndash;15% dari bisnis riil
              </p>
              <p className='text-lg text-[#475569] mt-2'>
                Semua aliran dana bisa diaudit on-chain
              </p>
              <p className='text-lg text-[#475569] mt-2'>
                Risiko tersebar ke banyak UMKM
              </p>
            </div>
            <div className='step-card border-t-4 border-t-[#059669]'>
              <h3 className='text-2xl font-bold text-[#059669] mb-4'>
                Partner
              </h3>
              <p className='text-lg text-[#475569]'>
                Merchant mereka dapat akses modal
              </p>
              <p className='text-lg text-[#475569] mt-2'>
                Stickiness naik, churn turun
              </p>
              <p className='text-lg text-[#475569] mt-2'>
                Bagi hasil dari setiap pembiayaan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 7 — MARKET OPPORTUNITY + MODEL BISNIS */}
      <section className='slide' data-slide='6' id='slide-6'>
        <div className='slide-inner'>
          <h2 className='text-5xl font-black mb-10 text-[#0f172a]'>
            Market opportunity.
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* TAM SAM SOM — concentric circles */}
            <div className='flex flex-col items-center'>
              <div className='relative flex items-center justify-center'>
                <div className='w-72 h-72 rounded-full bg-[#2563eb]/5 border-2 border-[#2563eb]/20 flex items-center justify-center'>
                  <div className='w-52 h-52 rounded-full bg-[#2563eb]/10 border-2 border-[#2563eb]/30 flex items-center justify-center'>
                    <div className='w-32 h-32 rounded-full bg-[#2563eb]/20 border-2 border-[#2563eb] flex items-center justify-center'>
                      <div className='text-center'>
                        <div className='text-xl font-black text-[#2563eb]'>
                          Rp 365T
                        </div>
                        <div className='text-xs text-[#475569] font-semibold'>
                          SOM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex gap-6 mt-6 text-sm'>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20' />
                  <span className='text-[#475569]'>
                    <strong className='text-[#0f172a]'>TAM</strong> Rp 4.300T
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-[#2563eb]/20 border border-[#2563eb]/30' />
                  <span className='text-[#475569]'>
                    <strong className='text-[#0f172a]'>SAM</strong> Rp 2.400T
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='w-3 h-3 rounded-full bg-[#2563eb]/30 border border-[#2563eb]' />
                  <span className='text-[#475569]'>
                    <strong className='text-[#0f172a]'>SOM</strong> Rp 365T
                  </span>
                </div>
              </div>
            </div>

            {/* Revenue projection */}
            <div>
              <h3 className='text-3xl font-bold text-[#0f172a] mb-4'>
                Proyeksi Revenue
              </h3>
              <p className='text-lg text-[#94a3b8] mb-8'>
                2% fee saat pencairan &times; ~3 siklus/tahun per UMKM
              </p>
              <p className='text-lg text-[#94a3b8] mb-8'>
                Rp 10jt avg pencairan kredit
              </p>
              <div className='space-y-6'>
                <div className='flex justify-between items-center border-b border-[#e2e8f0] pb-4'>
                  <span className='text-2xl text-[#475569]'>
                    Year 1 &mdash; 100 UMKM
                  </span>
                  <span className='text-3xl font-black text-[#475569]'>
                    Rp 60jt
                  </span>
                </div>
                <div className='flex justify-between items-center border-b border-[#e2e8f0] pb-4'>
                  <span className='text-2xl text-[#475569]'>
                    Year 2 &mdash; 1.000 UMKM
                  </span>
                  <span className='text-3xl font-black text-[#059669]'>
                    Rp 600jt
                  </span>
                </div>
                <div className='flex justify-between items-center bg-[#059669]/10 -mx-3 px-5 rounded-xl py-4'>
                  <span className='text-2xl font-bold text-[#0f172a]'>
                    Year 3 &mdash; 10.000 UMKM
                  </span>
                  <span className='text-4xl font-black text-[#059669]'>
                    Rp 6M
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 8 — GO-TO-MARKET & GROWTH */}
      <section className='slide' data-slide='7' id='slide-7'>
        <div className='slide-inner'>
          <h2 className='text-5xl font-black mb-10 text-[#0f172a]'>
            Go-to-market.
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* GTM Strategy */}
            <div>
              <h3 className='text-2xl font-bold text-[#2563eb] mb-6'>
                Entry Strategy
              </h3>
              <div className='space-y-6'>
                <div className='flex gap-4 items-start'>
                  <div className='w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white font-black shrink-0'>
                    1
                  </div>
                  <div>
                    <p className='text-xl font-bold text-[#0f172a]'>
                      Partner 1 PoS provider
                    </p>
                    <p className='text-lg text-[#475569]'>
                      Majoo / iSeller &mdash; mereka dapat stickiness, kita
                      dapat data
                    </p>
                  </div>
                </div>
                <div className='flex gap-4 items-start'>
                  <div className='w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white font-black shrink-0'>
                    2
                  </div>
                  <div>
                    <p className='text-xl font-bold text-[#0f172a]'>
                      Fokus F&B digital-first
                    </p>
                    <p className='text-lg text-[#475569]'>
                      QRIS aktif, omset terukur, butuh modal cepat
                    </p>
                  </div>
                </div>
                <div className='flex gap-4 items-start'>
                  <div className='w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white font-black shrink-0'>
                    3
                  </div>
                  <div>
                    <p className='text-xl font-bold text-[#0f172a]'>
                      Prove &rarr; Expand
                    </p>
                    <p className='text-lg text-[#475569]'>
                      10 UMKM &rarr; 100 &rarr; 1.000 &rarr; multi-vertikal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Flywheel */}
            <div>
              <h3 className='text-2xl font-bold text-[#059669] mb-6'>
                Growth Flywheel
              </h3>
              <div className='step-card'>
                <div className='flex flex-col items-center gap-3 text-center'>
                  <p className='text-xl font-bold text-[#0f172a]'>
                    Lebih banyak UMKM
                  </p>
                  <p className='text-2xl text-[#059669]'>&darr;</p>
                  <p className='text-xl font-bold text-[#0f172a]'>
                    Data makin kaya
                  </p>
                  <p className='text-2xl text-[#059669]'>&darr;</p>
                  <p className='text-xl font-bold text-[#0f172a]'>
                    AI makin akurat
                  </p>
                  <p className='text-2xl text-[#059669]'>&darr;</p>
                  <p className='text-xl font-bold text-[#0f172a]'>
                    Default turun, return naik
                  </p>
                  <p className='text-2xl text-[#059669]'>&darr;</p>
                  <p className='text-xl font-bold text-[#0f172a]'>
                    Lebih banyak pemodal
                  </p>
                  <p className='text-2xl text-[#059669]'>&darr;</p>
                  <p className='text-xl font-bold text-[#2563eb]'>
                    Lebih banyak UMKM terlayani
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 9 — CLOSING */}
      <section className='slide slide-dark' data-slide='8' id='slide-8'>
        <div className='slide-inner text-center'>
          <h1 className='text-8xl md:text-9xl font-black tracking-tight text-white mb-8 leading-none'>
            ModalFi
          </h1>
          <p className='text-3xl text-[#94a3b8] mb-8'>
            Dapat modal. Bayar dari omset. Otomatis.
          </p>
          <div className='w-16 h-1 bg-[#2563eb] rounded-full mx-auto' />
        </div>
      </section>
    </>
  );
}
