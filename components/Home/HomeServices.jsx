import { FaWhatsapp } from "react-icons/fa";

export default function HomeServices() {
  return (
    <section className="py-16 px-6 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto">
        <div
          className="
            relative overflow-hidden
            rounded-2xl
            border border-[var(--border)]
            bg-[var(--card)]
            shadow-lg
          "
        >
          {/* Accent Strip */}
          <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[var(--accent)] to-transparent" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 md:p-8">
            {/* Left Content */}
            <div className="max-w-2xl">
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Website Designed, Developed & Maintained By
              </h3>

              <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
                Complete end-to-end website solution — from development and
                deployment to regular updates, performance optimization, and
                ongoing maintenance.
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col items-start md:items-end gap-3">
              <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
                Contact
              </span>

              <span className="text-xl font-extrabold text-[var(--accent)] tracking-wide">
                +91 63723 05866
              </span>
<a
  href="https://wa.me/916372305866"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex items-center gap-2
    px-5 py-2.5 rounded-xl
    bg-[var(--accent)]
    text-white
    font-semibold text-sm
    shadow-md
    transition-all duration-200
    hover:scale-[1.03]
    hover:brightness-110
    active:scale-95
  "
>
  <FaWhatsapp className="text-lg text-white" />
  <span className="text-white">Get This Service</span>
</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
