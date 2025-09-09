import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section id="hero" className="relative overflow-hidden text-white">
        {/* layered gradients to match Better.com tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900 via-emerald-900/95 to-emerald-950" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-emerald-800/60 to-transparent" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-28 pb-24 text-center md:pt-40 md:pb-36">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-[86px] md:leading-[1.05]">
            The first
            <br className="hidden sm:block" />
            <span className="ai-gradient">AI-powered</span> Mortgage
          </h1>
          <p className="mt-6 max-w-3xl text-base text-emerald-100 sm:text-lg">
            Our tech unlocks lower rates, higher chances of approval,
            and a lightning-fast process from approval to closing. Over $100 billion funded.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Link
              href="/start"
              className="inline-flex h-14 items-center justify-center rounded-full bg-emerald-400 px-10 text-[17px] font-semibold text-emerald-950 shadow-[0_12px_40px_rgba(16,185,129,0.35)] ring-1 ring-white/10 transition hover:bg-emerald-300"
            >
              Start my pre-approval
            </Link>
            <div className="flex items-center gap-3 text-sm text-emerald-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <path d="M12 7v5l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span>3 min</span>
              <span className="opacity-40">|</span>
              <span>No hard credit check</span>
            </div>
          </div>

          {/* Phone mock + overlay chips (visual only) */}
          <div className="pointer-events-none relative mt-14 hidden w-full max-w-5xl md:block">
            {/* glow under phone */}
            <div className="absolute left-1/2 top-24 -z-10 h-64 w-[110%] -translate-x-1/2 rounded-[50%] bg-emerald-500/25 blur-[80px]" />

            {/* phone body */}
            <div className="relative mx-auto h-[540px] w-[320px] overflow-hidden rounded-[40px] border-[6px] border-black/70 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              {/* top speaker notch */}
              <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-zinc-700" />
              {/* center divider to mimic screenshot line */}
              <div className="absolute left-1/2 top-0 h-full w-[6px] -translate-x-1/2 bg-emerald-800/40" />
              {/* screen gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-emerald-900/10 to-emerald-800/30" />
            </div>

            {/* left-bottom chip */}
            <div className="absolute left-[8%] top-[60%] w-[270px] -translate-y-1/2 rounded-2xl bg-gradient-to-br from-zinc-800/85 to-emerald-900/30 p-5 text-left shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur">
              <div className="mb-3 flex items-center gap-2 text-emerald-400">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600/30 text-emerald-300">✓</span>
                <span className="text-xs">Congrats, you’re pre‑approved</span>
              </div>
              <p className="text-sm text-emerald-50">for a loan up to</p>
              <p className="text-[28px] font-semibold text-emerald-400">$450,000</p>
            </div>

            {/* center-top chip */}
            <div className="absolute left-1/2 top-[47%] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gradient-to-br from-zinc-800/80 to-emerald-900/20 p-5 text-left shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur">
              <div className="mb-1.5 flex items-center gap-4">
                <div className="relative flex h-12 w-16 items-center justify-center rounded-md bg-black/50 text-white">
                  <span className="text-sm font-semibold">580</span>
                  <span className="ml-1 text-[10px] opacity-70">FICO</span>
                  <svg className="absolute -z-0" width="64" height="48" viewBox="0 0 64 48" fill="none">
                    <path d="M10 38a18 18 0 0136 0" stroke="#34d399" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-[15px] leading-snug text-emerald-50">You don’t need perfect credit to qualify.</p>
              </div>
            </div>

            {/* right-middle chip */}
            <div className="absolute right-[10%] top-[64%] w-[310px] -translate-y-1/2 rounded-xl bg-gradient-to-br from-zinc-800/80 to-emerald-900/20 p-5 text-left shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur">
              <div className="mb-0.5 flex items-center gap-3 text-emerald-300">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600/25">●</span>
                <span className="text-[13px] leading-snug text-emerald-50">Instant answers — anytime, anywhere with Betsy™ AI.</span>
              </div>
            </div>

            {/* bottom small chip */}
            <div className="absolute left-1/2 top-[86%] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gradient-to-br from-zinc-800/80 to-emerald-900/20 p-4 text-left shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur">
              <div className="flex items-center gap-3 text-emerald-200">
                <span className="text-lg leading-none">◔</span>
                <span className="text-[13px]">See your customized rate options in seconds.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="bg-[#F7F4EF]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-4 py-24 md:grid-cols-2">
          {/* Left video card */}
          <div className="mx-auto w-full max-w-sm">
            <div className="relative overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow">
              {/* video placeholder */}
              <div className="aspect-[9/16] bg-gray-200">
                {/* play button */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex h-18 w-18 items-center justify-center rounded-full bg-white/95 shadow">
                    <div className="ml-1 h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-emerald-700" />
                  </div>
                </div>
              </div>
              {/* caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                <p className="text-[16px] leading-snug text-white">
                  I used Better three years ago for my primary residence and just now for my vacation home. Very simple process. Each time it took about two weeks to close.
                </p>
                <p className="mt-3 text-[11px] text-white/80">Paul — Better Mortgage customer</p>
              </div>
            </div>
            {/* tabs */}
            <div className="mt-5 flex items-center gap-3">
              <button className="rounded-full border-2 border-emerald-600 bg-white px-6 py-2 text-sm font-medium text-emerald-700 shadow-sm">Paul</button>
              <button className="rounded-full border border-gray-300 bg-white px-6 py-2 text-sm text-gray-700">Amanda</button>
              <button className="rounded-full border border-gray-300 bg-white px-6 py-2 text-sm text-gray-700">Tiara</button>
            </div>
          </div>

          {/* Right copy */}
          <div>
            <h2 className="text-[58px] font-extrabold leading-[1.04] text-[#102A22] md:text-[72px]">Find out why
              <br />we’re better.</h2>
            <Link href="#" className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-[#0B3F2F] px-7 text-[15px] font-semibold text-white hover:bg-[#0a382a]">See all our stories</Link>
            <div className="mt-5 flex items-center gap-2 text-[15px] text-[#373C38]">
              <span className="text-emerald-600">★</span>
              <span className="font-medium">Trustpilot</span>
              <span className="opacity-40">Excellent</span>
              <span className="opacity-60">4.4 out of 5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge cards */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          {/* Header row */}
          <div className="mb-8 flex flex-wrap items-center gap-10">
            <h3 className="text-[40px] font-extrabold leading-tight text-[#102A22] md:text-[44px]">
              Got questions? We’ve got answers
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-[#102A22] shadow-sm">
                Our products
              </button>
              <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-[#102A22]">
                Calculators
              </button>
              <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-[#102A22]">
                Guides & FAQs
              </button>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-start gap-3">
                <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-[#102A22]">→</span>
                <h4 className="text-[20px] font-semibold leading-snug text-[#102A22]">How AI Mortgage Lending is Transforming the Home Loan Process</h4>
              </div>
              <p className="ml-12 text-[15px] leading-relaxed text-[#4B5550]">Learn how our AI helps cut through the noise to get you approved faster.</p>
              <div className="mt-4 h-40 rounded-xl bg-gray-100" />
            </article>
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-start gap-3">
                <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-[#102A22]">→</span>
                <h4 className="text-[20px] font-semibold leading-snug text-[#102A22]">One Day Mortgage</h4>
              </div>
              <p className="ml-12 text-[15px] leading-relaxed text-[#4B5550]">From locked rate to Commitment Letter in a single day for qualified borrowers.</p>
              <div className="mt-4 h-40 rounded-xl bg-emerald-100" />
            </article>
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-start gap-3">
                <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-[#102A22]">→</span>
                <h4 className="text-[20px] font-semibold leading-snug text-[#102A22]">Better HELOC</h4>
              </div>
              <p className="ml-12 text-[15px] leading-relaxed text-[#4B5550]">Access up to 90% of your home equity in as little as 7 days.</p>
              <div className="mt-4 h-40 rounded-xl bg-gray-100" />
            </article>
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-start gap-3">
                <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-[#102A22]">→</span>
                <h4 className="text-[20px] font-semibold leading-snug text-[#102A22]">Insurance</h4>
              </div>
              <p className="ml-12 text-[15px] leading-relaxed text-[#4B5550]">Shop, bundle, and save on insurance coverage.</p>
              <div className="mt-4 h-40 rounded-xl bg-emerald-50" />
            </article>
          </div>
        </div>
      </section>

    </div>
  );
}
