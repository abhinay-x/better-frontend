export default function AboutUsPage() {
  return (
    <div>
      {/* Mission hero */}
      <section className="bg-[#F7F4EF]">
        <div className="mx-auto max-w-5xl px-4 py-28 text-center md:py-36">
          <p className="text-[18px] font-semibold text-emerald-700">Our mission</p>
          <h1 className="mt-4 text-[40px] font-extrabold leading-tight text-[#102A22] md:text-[56px]">
            We’re making homeownership simpler, faster —
            <br />and most importantly, more accessible for all
            <br />Americans.
          </h1>
        </div>
      </section>

      {/* Status quo section */}
      <section className="bg-[#F7F4EF]">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-28 md:grid-cols-2">
          {/* Left text */}
          <div className="max-w-[520px]">
            <h2 className="text-[32px] font-extrabold leading-[1.2] text-[#102A22] md:text-[34px]">The status quo is broken</h2>
            <p className="mt-4 text-[15px] leading-[1.9] text-[#4B5550]">
              The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent
              and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and
              slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg,
              set out to change that.
            </p>
            <button className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-[#0B6E4F] px-6 text-[14px] font-semibold text-white hover:bg-[#095c42]">
              Read Vishal’s story
            </button>
          </div>

          {/* Right video card */}
          <div className="mx-auto w-full max-w-[520px]">
            <div className="relative h-[360px] w-full overflow-hidden rounded-[8px] border border-gray-200 bg-white shadow-sm">
              <div className="absolute inset-0 bg-gray-200">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow">
                    <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-emerald-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we’re changing things */}
      <section className="bg-[#0B6E4F]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-white md:py-20">
          <h2 className="text-[36px] font-extrabold leading-tight md:text-[42px]">How we’re changing things</h2>
          <div className="mt-5 max-w-3xl space-y-4 text-[15px] leading-7 text-emerald-50/90">
            <p>
              Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.
            </p>
            <p>
              That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Backed by logos */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center md:py-20">
          <h3 className="text-[22px] font-semibold text-[#102A22]">Backed by</h3>
          <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-10 md:grid-cols-4 lg:grid-cols-7">
            <img src="https://cdn.simpleicons.org/softbank" alt="SoftBank" className="h-7 w-auto opacity-90" />
            <img src="https://cdn.simpleicons.org/ally" alt="Ally" className="h-7 w-auto opacity-90" />
            <img src="https://cdn.simpleicons.org/citibank" alt="Citi" className="h-7 w-auto opacity-90" />
            <img src="https://cdn.simpleicons.org/pingan" alt="Ping An" className="h-7 w-auto opacity-90" />
            <img src="https://cdn.simpleicons.org/goldmansachs" alt="Goldman Sachs" className="h-7 w-auto opacity-90" />
            <img src="https://cdn.simpleicons.org/kleinerperkins" alt="KPCB" className="h-7 w-auto opacity-90" />
            <img src="https://cdn.simpleicons.org/americanexpress" alt="American Express" className="h-7 w-auto opacity-90" />
          </div>
        </div>
      </section>

      {/* Company timeline */}
      <section className="bg-[#F7F4EF]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="mb-10 text-center text-[28px] font-extrabold text-[#102A22] md:text-[32px]">Company timeline</h2>
          <div className="relative">
            {/* center line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-300 md:block" />

            <div className="space-y-16">
              {/* 2014 */}
              <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                {/* year badge */}
                <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">
                  <span className="inline-flex rounded-full bg-[#0B6E4F] px-4 py-2 text-sm font-semibold text-white">2014</span>
                </div>
                <div className="order-2 rounded-md border border-gray-300 bg-gray-200/60 p-5 text-sm text-[#37413C] md:order-1 md:justify-self-end md:w-[520px]">
                  After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.
                </div>
                <div className="order-1 md:order-2" />
              </div>

              {/* 2015 */}
              <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">
                  <span className="inline-flex rounded-full bg-[#0B6E4F] px-4 py-2 text-sm font-semibold text-white">2015</span>
                </div>
                <div />
                <div className="rounded-md border border-gray-300 bg-gray-200/60 p-5 text-sm text-[#37413C] md:w-[520px]">
                  Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).
                </div>
              </div>

              {/* 2016 */}
              <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">
                  <span className="inline-flex rounded-full bg-[#0B6E4F] px-4 py-2 text-sm font-semibold text-white">2016</span>
                </div>
                <div className="order-2 rounded-md border border-gray-300 bg-gray-200/60 p-5 text-sm text-[#37413C] md:order-1 md:justify-self-end md:w-[520px]">
                  Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.
                </div>
                <div className="order-1 rounded-md border border-gray-300 bg-gray-200/60 p-5 text-sm text-[#37413C] md:order-2 md:w-[520px]">
                  Better expands into the real estate market with Better Real Estate.
                </div>
              </div>

              {/* 2018 */}
              <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">
                  <span className="inline-flex rounded-full bg-[#0B6E4F] px-4 py-2 text-sm font-semibold text-white">2018</span>
                </div>
                <div className="order-2 rounded-md border border-gray-300 bg-gray-200/60 p-5 text-sm text-[#37413C] md:order-1 md:justify-self-end md:w-[520px]">
                  Better Mortgage partners with Ally Bank to build Ally powered by Better.
                </div>
                <div className="order-1 md:order-2" />
              </div>

              {/* 2019 */}
              <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">
                  <span className="inline-flex rounded-full bg-[#0B6E4F] px-4 py-2 text-sm font-semibold text-white">2019</span>
                </div>
                <div />
                <div className="rounded-md border border-gray-300 bg-gray-200/60 p-5 text-sm text-[#37413C] md:w-[520px]">
                  Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.
                </div>
              </div>

              {/* 2022 */}
              <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">
                  <span className="inline-flex rounded-full bg-[#0B6E4F] px-4 py-2 text-sm font-semibold text-white">2022</span>
                </div>
                <div className="order-2 rounded-md border border-gray-300 bg-gray-200/60 p-5 text-sm text-[#37413C] md:order-1 md:justify-self-end md:w-[520px]">
                  Better Mortgage becomes the first fintech to fund $100B home loans entirely online.
                </div>
                <div className="order-1 md:order-2" />
              </div>

              {/* 2023 */}
              <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">
                  <span className="inline-flex rounded-full bg-[#0B6E4F] px-4 py-2 text-sm font-semibold text-white">2023</span>
                </div>
                <div />
                <div className="rounded-md border border-gray-300 bg-gray-200/60 p-5 text-sm text-[#37413C] md:w-[520px]">
                  Better Mortgage launches One Day Mortgage®: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.
                </div>
              </div>

              {/* Today */}
              <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="absolute left-1/2 top-0 hidden -translate-x-1/2 md:block">
                  <span className="inline-flex rounded-full bg-[#0B6E4F] px-4 py-2 text-sm font-semibold text-white">Today</span>
                </div>
                <div className="order-2 rounded-md border border-gray-300 bg-gray-200/60 p-5 text-sm text-[#37413C] md:order-1 md:justify-self-end md:w-[520px]">
                  You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.
                  <div>
                    <button className="mt-4 inline-flex rounded-md bg-[#0B6E4F] px-4 py-2 text-xs font-semibold text-white">Get started</button>
                  </div>
                </div>
                <div className="order-1 rounded-md border border-gray-300 bg-gray-200/60 p-5 text-sm text-[#37413C] md:order-2 md:w-[520px]">
                  Better Mortgage launches One Day Verified Approval Letter.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-[#EAF5EE]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <h3 className="mb-8 text-[26px] font-extrabold text-[#102A22]">Related posts</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <article key={i} className="rounded-xl border border-emerald-200/40 bg-white p-5 shadow-sm">
                <h4 className="text-[16px] font-semibold text-[#102A22]">Sample post title {i + 1}</h4>
                <p className="mt-2 line-clamp-3 text-[14px] leading-6 text-[#4B5550]">Short summary goes here to mimic the Better.com related post cards. This text will be trimmed after a few lines to match the layout.</p>
                <button className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-emerald-700">
                  Read now
                  <span>→</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
