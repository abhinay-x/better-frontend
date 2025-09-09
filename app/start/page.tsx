export default function StartPage() {
  return (
    <div className="bg-white">
      {/* Decorative glowing dot */}
      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 z-10 mt-4 -translate-x-1/2">
          <div className="h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.25),0_0_0_16px_rgba(16,185,129,0.12)]" />
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 pb-20 pt-20 text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-[#102A22] md:text-[44px]">
          Hi, I'm Betsy!
          <br />
          What can I help you with?
        </h1>

        {/* Options */}
        <div className="mx-auto mt-8 grid gap-4">
          {[
            { label: 'Buying a home' },
            { label: 'Refinancing my mortgage' },
            { label: 'Get cash from my home' },
          ].map((opt) => (
            <button
              key={opt.label}
              className="flex items-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 text-left text-[15px] font-medium text-[#102A22] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)] hover:bg-gray-50"
            >
              <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-emerald-200 text-emerald-700">
                {/* simple home icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3 10.5 12 3l9 7.5" stroke="#0B6E4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 10v9h14v-9" stroke="#0B6E4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="flex-1">{opt.label}</span>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mx-auto mt-8 flex max-w-md items-end justify-between gap-8 text-[#102A22]">
          <div>
            <div className="text-2xl font-extrabold">$100B</div>
            <div className="text-[12px] text-[#6B746F]">home loans funded entirely online</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold">400K</div>
            <div className="text-[12px] text-[#6B746F]">customers who chose a Better Mortgage</div>
          </div>
        </div>

        {/* Features card */}
        <div className="mx-auto mt-8 w-full max-w-xl rounded-lg border border-emerald-100 bg-emerald-50 px-6 py-6 text-left">
          <p className="mb-3 text-center text-[14px] font-medium text-[#4B5550]">After a few questions, you’ll unlock:</p>
          <ul className="mx-auto grid max-w-md gap-3 text-[14px] text-[#102A22]">
            {[
              'Custom mortgage rates',
              'Exclusive offers',
              'A personalized dashboard',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  ✓
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
