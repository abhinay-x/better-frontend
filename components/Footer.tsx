import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Better column */}
          <div>
            <h3 className="text-3xl font-extrabold text-emerald-700">Better</h3>
            <p className="mt-3 max-w-xs text-sm text-[#4B5550]">
              Better is a family of companies serving all your homeownership needs.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-[#102A22]"><span className="text-emerald-700">Better</span> Mortgage</p>
                <p className="mt-1 max-w-sm text-[#6B746F]">We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
              </div>
              <div>
                <p className="font-semibold text-[#102A22]"><span className="text-emerald-700">Better</span> Real Estate</p>
                <p className="mt-1 max-w-sm text-[#6B746F]">Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
              </div>
              <div>
                <p className="font-semibold text-[#102A22]"><span className="text-emerald-700">Better</span> Cover</p>
                <p className="mt-1 max-w-sm text-[#6B746F]">Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
              </div>
              <div>
                <p className="font-semibold text-[#102A22]"><span className="text-emerald-700">Better</span> Inspect</p>
                <p className="mt-1 max-w-sm text-[#6B746F]">Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
              </div>
              <div>
                <p className="font-semibold text-[#102A22]"><span className="text-emerald-700">Better</span> Settlement Services</p>
                <p className="mt-1 max-w-sm text-[#6B746F]">Get transparent rates when you shop for title insurance all in one convenient place.</p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[15px] font-semibold text-[#102A22]">Resources</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#37413C]">
              <li><Link href="#" className="hover:underline">Home affordability calculator</Link></li>
              <li><Link href="/mortgage-calculator" className="hover:underline">Mortgage calculator</Link></li>
              <li><Link href="#" className="hover:underline">Free mortgage calculator</Link></li>
              <li><Link href="#" className="hover:underline">Mortgage calculator with taxes</Link></li>
              <li><Link href="#" className="hover:underline">Mortgage calculator with PMI</Link></li>
              <li><Link href="#" className="hover:underline">Rent vs buy calculator</Link></li>
              <li><Link href="#" className="hover:underline">HELOC payment calculator</Link></li>
              <li><Link href="#" className="hover:underline">HELOC vs cash-out refinance calculator</Link></li>
              <li><Link href="#" className="hover:underline">Buy a home</Link></li>
              <li><Link href="#" className="hover:underline">Sell a home</Link></li>
              <li><Link href="#" className="hover:underline">Get home inspection</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[15px] font-semibold text-[#102A22]">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#37413C]">
              <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Media</Link></li>
              <li><Link href="#" className="hover:underline">Partner With Us</Link></li>
              <li><Link href="#" className="hover:underline">Learning center</Link></li>
              <li><Link href="#" className="hover:underline">FAQs</Link></li>
              <li><Link href="#" className="hover:underline">Investor Relations</Link></li>
            </ul>
          </div>

          {/* Contact + Legal */}
          <div>
            <h4 className="text-[15px] font-semibold text-[#102A22]">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#37413C]">
              <li><a href="mailto:hello@better.com" className="hover:underline">hello@better.com</a></li>
              <li><a href="tel:4155238837" className="hover:underline">415-523-8837</a></li>
              <li><Link href="#" className="hover:underline">FAQ</Link></li>
              <li><Link href="#" className="hover:underline">Glossary</Link></li>
            </ul>

            <h4 className="mt-6 text-[15px] font-semibold text-[#102A22]">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#37413C]">
              <li><Link href="#" className="hover:underline">NMLS Consumer Access</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Terms of Use</Link></li>
              <li><Link href="#" className="hover:underline">Disclosures & Licensing</Link></li>
              <li><Link href="#" className="hover:underline">Affiliated Business</Link></li>
              <li><Link href="#" className="hover:underline">Browser Disclaimer</Link></li>
            </ul>

            <div className="mt-6 flex items-center gap-3 opacity-70">
              <div className="h-6 w-6 rounded bg-gray-200" />
              <div className="h-6 w-6 rounded bg-gray-200" />
            </div>
          </div>
        </div>

        {/* Social + Disclaimer */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          {/* Social icons */}
          <div className="mb-6 flex items-center gap-4 text-[#102A22]">
            <a
              aria-label="GitHub"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded text-inherit hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.57v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.26 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.7.24 2.95.12 3.26.77.84 1.24 1.9 1.24 3.22 0 4.61-2.8 5.61-5.48 5.91.43.38.81 1.12.81 2.26v3.35c0 .31.21.68.82.57A12 12 0 0 0 12 .5Z"/></svg>
            </a>
            <a
              aria-label="Instagram"
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded text-inherit hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.75-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/></svg>
            </a>
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded text-inherit hover:opacity-80"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5Zm.02 6.5H2v10h3V10Zm4 0H6v10h3v-5.4c0-2.98 4-3.22 4 0V20h3v-6.07c0-5.26-5.67-5.06-7-2.48V10Z"/></svg>
            </a>
          </div>

          {/* Disclaimer block */}
          <div className="space-y-4 text-[11px] leading-relaxed text-[#6B746F]">
            <p>
              1 Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See One Day Mortgage™ Terms and Conditions.
            </p>
            <p>
              2Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See One Day Heloc™ Terms and Conditions.
            </p>
            <p>
              3Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.
            </p>
            <p>
              © 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.
            </p>
            <p>
              Better BMC operates under the name Better Mortgage Corporation in New York.
            </p>
            <p>
              Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <a className="underline" href="#">NMLS Consumer Access</a>
            </p>
            <p>
              Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.
            </p>
            <p>
              <a className="underline" href="#">New York State Housing and Anti-Discrimination Notice</a><br />
              <a className="underline" href="#">New York Standard Operating Procedures</a><br />
              Texas Real Estate Commission: <a className="underline" href="#">Information About Brokerage Services</a> | <a className="underline" href="#">Consumer Protection Notice</a>
            </p>
            <p>
              Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.
            </p>
            <p>
              Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
            </p>
            <p>
              Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s license numbers.
            </p>
            <p>
              Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
            </p>
            <p>
              Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.
            </p>
            <p>
              Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.
            </p>
            <p>
              Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
