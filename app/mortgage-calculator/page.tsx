"use client";
import { useMemo, useState } from "react";

function formatCurrency(v: number) {
  return v.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export default function MortgageCalculatorPage() {
  const [price, setPrice] = useState<number>(300000);
  const [downPct, setDownPct] = useState<number>(20);
  const downPayment = useMemo(() => Math.round((downPct / 100) * price), [downPct, price]);
  const [years, setYears] = useState<number>(30);
  const [rate, setRate] = useState<number>(6.5); // APR
  const [zip, setZip] = useState<string>("10007");
  // Extras (monthly)
  const [taxes, setTaxes] = useState<number>(0);
  const [insurance, setInsurance] = useState<number>(0);
  const [hoa, setHoa] = useState<number>(0);
  const [utilities, setUtilities] = useState<number>(0);

  // Monthly principal & interest
  const principal = useMemo(() => price - downPayment, [price, downPayment]);
  const monthlyPI = useMemo(() => {
    const principal = price - downPayment;
    const r = rate / 100 / 12;
    const n = years * 12;
    if (r === 0) return principal / n;
    const m = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return m;
  }, [price, downPayment, years, rate]);

  // Simple PMI model: 0.5% annual on principal if down < 20%
  const monthlyPMI = useMemo(() => (downPct < 20 ? (principal * 0.005) / 12 : 0), [downPct, principal]);
  const monthlyExtras = useMemo(() => taxes + insurance + hoa + utilities, [taxes, insurance, hoa, utilities]);
  const monthlyTotal = useMemo(() => Math.round(monthlyPI + monthlyPMI + monthlyExtras), [monthlyPI, monthlyPMI, monthlyExtras]);

  return (
    <div className="bg-[#EAF5EE]">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-14">
        <h1 className="max-w-3xl text-[40px] font-extrabold leading-tight text-[#102A22] md:text-[54px]">
          Estimate your monthly
          <br />mortgage payments
        </h1>

        {/* Calculator card */}
        <div className="mt-8 rounded-xl border border-emerald-100 bg-white p-5 shadow-sm md:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Inputs left (span 2) */}
            <div className="space-y-3 md:col-span-2">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <label className="flex items-center justify-between gap-3 rounded-md border border-gray-300 px-3 py-2">
                  <span className="text-xs text-[#6B746F]">Home price</span>
                  <input
                    type="number"
                    className="w-40 rounded-md bg-transparent text-right text-[15px] font-semibold text-[#102A22] outline-none"
                    value={price}
                    onChange={(e) => setPrice(Math.max(0, Number(e.target.value)))}
                  />
                </label>
                <div className="grid grid-cols-[1fr_auto_64px] items-center gap-2 rounded-md border border-gray-300 px-3 py-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-[#6B746F]">Down payment</span>
                    <div className="w-28 text-right text-[15px] font-semibold text-[#102A22]">{formatCurrency(downPayment)}</div>
                  </div>
                  <div className="h-6 w-px bg-gray-200" />
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      className="w-14 rounded-md bg-transparent text-right text-[15px] font-semibold text-[#102A22] outline-none"
                      value={downPct}
                      onChange={(e) => setDownPct(Math.max(0, Math.min(100, Number(e.target.value))))}
                    />
                    <span className="text-sm text-[#102A22]">%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <label className="flex items-center justify-between gap-3 rounded-md border border-gray-300 px-3 py-2">
                  <span className="text-xs text-[#6B746F]">Length of loan</span>
                  <select
                    className="w-40 appearance-none rounded-md bg-transparent text-right text-[15px] font-semibold text-[#102A22] outline-none"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                  >
                    <option value={30}>30 years</option>
                    <option value={20}>20 years</option>
                    <option value={15}>15 years</option>
                    <option value={10}>10 years</option>
                  </select>
                </label>
                <label className="flex items-center justify-between gap-3 rounded-md border border-gray-300 px-3 py-2">
                  <span className="text-xs text-[#6B746F]">Interest rate</span>
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      step="0.01"
                      className="w-20 rounded-md bg-transparent text-right text-[15px] font-semibold text-[#102A22] outline-none"
                      value={rate}
                      onChange={(e) => setRate(Math.max(0, Number(e.target.value)))}
                    />
                    <span className="text-sm text-[#102A22]">%</span>
                  </div>
                </label>
                <label className="flex items-center justify-between gap-3 rounded-md border border-gray-300 px-3 py-2">
                  <span className="text-xs text-[#6B746F]">ZIP code</span>
                  <input
                    type="text"
                    className="w-24 rounded-md bg-transparent text-right text-[15px] font-semibold text-[#102A22] outline-none"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </label>
              </div>

              {/* Single long slider (controls Home price for demo) */}
              <div className="mt-3">
                <div className="relative h-3 w-full rounded-full bg-gray-300">
                  {(() => {
                    const min = 50000, max = 2000000;
                    const pct = Math.min(100, Math.max(0, ((price - min) / (max - min)) * 100));
                    return (
                      <>
                        <div style={{ width: `${pct}%` }} className="absolute left-0 top-0 h-3 rounded-full bg-neutral-800" />
                        <div style={{ left: `calc(${pct}% - 6px)` }} className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-white bg-white shadow" />
                        <input
                          type="range"
                          min={min}
                          max={max}
                          step={1000}
                          value={price}
                          onChange={(e) => setPrice(Number(e.target.value))}
                          className="absolute inset-0 h-3 w-full cursor-pointer appearance-none opacity-0"
                        />
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Monthly payment panel */}
            <div className="flex flex-col justify-between gap-4 rounded-md bg-white">
              <div>
                <p className="text-xs text-[#6B746F]">Monthly payment</p>
                <p className="text-2xl font-extrabold text-[#102A22]">{formatCurrency(monthlyTotal)}/mo</p>
              </div>
              <button className="inline-flex items-center justify-center rounded-md bg-[#0B6E4F] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#0a6246]">
                Get pre-approved
              </button>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="mb-4 text-[15px] font-semibold text-[#102A22]">Monthly payment breakdown</h3>
            {/* Stacked pill bar */}
            <div className="flex h-20 w-full overflow-hidden rounded-full border border-emerald-100">
              {(() => {
                const pi = monthlyPI;
                const pmi = monthlyPMI;
                const ex = monthlyExtras;
                const total = Math.max(pi + pmi + ex, 1);
                const w = (v: number) => `${(v / total) * 100}%`;
                return (
                  <>
                    <div style={{ width: w(pi) }} className="h-full bg-[#0B6E4F]" />
                    {pmi > 0 && <div style={{ width: w(pmi) }} className="h-full bg-[#34d399]" />}
                    {ex > 0 && <div style={{ width: w(ex) }} className="h-full bg-[#a7f3d0]" />}
                  </>
                );
              })()}
            </div>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-[#102A22]">{formatCurrency(monthlyTotal)}/mo</p>
            <ul className="mt-4 space-y-4 text-sm text-[#37413C]">
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm bg-[#0B6E4F]" /> Principal & interest</div>
                <div>{formatCurrency(Math.round(monthlyPI))}</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm bg-[#34d399]" /> PMI</div>
                <div>{formatCurrency(Math.round(monthlyPMI))}</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm bg-[#8b5cf6]" /> Property taxes</div>
                <div>{formatCurrency(Math.round(taxes))}</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm bg-[#60a5fa]" /> Homeowners insurance</div>
                <div>{formatCurrency(Math.round(insurance))}</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm bg-[#f59e0b]" /> HOA fees</div>
                <div>{formatCurrency(Math.round(hoa))}</div>
              </li>
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm bg-[#64748b]" /> Utilities</div>
                <div>{formatCurrency(Math.round(utilities))}/mo</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Steps to get pre-approved */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="mb-6 text-[26px] font-extrabold text-[#102A22]">Simple steps to get pre-approved</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                n: 1,
                h: "Share a few details",
                p: "Tell us about your income, credit, and home goals—it takes as little as 3 minutes and won’t affect your credit score.",
              },
              {
                n: 2,
                h: "See your homebuying budget",
                p: "In minutes, we’ll show you exactly how much you can get pre-approved for—so you know your price range before you shop.",
              },
              {
                n: 3,
                h: "Get your pre-approval letter",
                p: "Download your letter instantly and start touring homes with confidence (and a stronger offer in hand).",
              },
            ].map((card) => (
              <div key={card.n} className="rounded-xl border border-emerald-100 bg-[#EAF5EE] p-6">
                <div className="text-[44px] font-semibold text-emerald-500">{card.n}</div>
                <h3 className="mt-1 text-[18px] font-semibold text-[#102A22]">{card.h}</h3>
                <p className="mt-2 text-[14px] leading-6 text-[#4B5550]">{card.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: Check your homebuying power */}
      <section className="bg-[#F7F4EF]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h3 className="text-[34px] font-extrabold text-[#102A22]">Check your homebuying power</h3>
          <button className="mt-6 inline-flex items-center justify-center rounded-md bg-[#0B6E4F] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#0a6246]">
            See what I qualify for
          </button>
          <p className="mt-3 text-xs text-[#6B746F]">…in as little as 3 minutes — no credit impact</p>
        </div>
      </section>

      {/* Calculator intro + FAQs */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h3 className="mb-6 text-center text-[28px] font-extrabold text-[#102A22]">Mortgage Calculator with PMI & Taxes</h3>
          <div className="mx-auto max-w-3xl space-y-5 text-center text-[15px] leading-7 text-[#37413C]">
            <p>A mortgage calculator for home loans can show your true monthly housing costs before you commit to a home loan.</p>
            <p>Home shoppers balance a lot of numbers: home prices, loan sizes, down payments, interest rates, property tax rates, mortgage insurance premiums, and so on.</p>
            <p>A mortgage payment calculator shows how these variables come together to shape a home's monthly payment.</p>
            <p>These tools are invaluable for comparing loan scenarios — and Better makes it easy by doing the heavy lifting for you.</p>
          </div>

          {/* FAQs */}
          <div className="mt-10 divide-y divide-gray-200 rounded-md border border-gray-200">
            {[
              "How to find your payments with a mortgage calculator for home loans",
              "What you can do with this home payment calculator",
              "What does a mortgage payment include?",
              "Mortgage payment formula",
              "How to lower monthly mortgage payments",
              "Types of mortgage loans",
            ].map((q, i) => (
              <details key={q} className="group open:bg-gray-50">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-4 text-[15px] font-medium text-[#102A22]">
                  {q}
                  <span className="text-gray-400 group-open:rotate-180">▾</span>
                </summary>
                <div className="px-4 pb-4 text-[14px] leading-6 text-[#4B5550]">
                  Placeholder answer {i + 1}. We’ll replace this with content matching the live site if you want full parity.
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* More resources */}
      <section className="bg-[#F7F4EF]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h3 className="mb-8 text-[22px] font-extrabold text-[#102A22]">More resources: Rates & Calculators</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { h: "Affordability calculator", cta: "Calculate my budget" },
              { h: "Rent vs. buy calculator", cta: "Compare my costs" },
              { h: "HELOC payment calculator", cta: "Estimate my payments" },
              { h: "Mortgage rates", cta: "See today's rates" },
              { h: "HELOC rates", cta: "See today's rates" },
              { h: "Refinance rates", cta: "See today's rates" },
            ].map((card) => (
              <article key={card.h} className="rounded-xl border border-emerald-100 bg-white p-6">
                <h4 className="text-[18px] font-semibold text-[#102A22]">{card.h}</h4>
                <p className="mt-1 text-[14px] text-[#4B5550]">Short description goes here.</p>
                <button className="mt-4 text-[14px] font-semibold text-emerald-700">{card.cta} →</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="bg-[#EAF5EE]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h3 className="mb-6 text-[22px] font-extrabold text-[#102A22]">Related articles</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <article key={i} className="rounded-xl border border-emerald-100 bg-white p-5">
                <h4 className="text-[16px] font-semibold text-[#102A22]">Sample related article {i + 1}</h4>
                <p className="mt-2 line-clamp-3 text-[14px] leading-6 text-[#4B5550]">Excerpt goes here to mimic the card layout. Replace with real content or CMS data.</p>
                <button className="mt-4 text-[14px] font-semibold text-emerald-700">Read now →</button>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="inline-flex items-center justify-center rounded-md bg-[#0B6E4F] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#0a6246]">
              Visit our learning center
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
