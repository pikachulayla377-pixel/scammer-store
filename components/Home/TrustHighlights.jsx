import {
  ShieldOff,
  Clock,
  Zap,
  Headphones,
  Globe,
  Truck,
} from "lucide-react";

export default function TrustHighlights() {
  const items = [
    {
      icon: Clock,
      title: "24/7",
      desc: "Automated Confusion",
      color: "text-[var(--accent)]",
      glow: "from-[var(--accent)]/20",
    },
    {
      icon: ShieldOff,
      title: "0%",
      desc: "Guaranteed Safety",
      color: "text-green-400",
      glow: "from-green-400/20",
    },
    {
      icon: Zap,
      title: "Easy",
      desc: "To Regret Payments",
      color: "text-blue-400",
      glow: "from-blue-400/20",
    },
    {
      icon: Headphones,
      title: "24/7",
      desc: "Silent Support",
      color: "text-purple-400",
      glow: "from-purple-400/20",
    },
    {
      icon: Globe,
      title: "Not Trusted",
      desc: "By 193 Countries",
      color: "text-yellow-400",
      glow: "from-yellow-400/20",
    },
    {
      icon: Truck,
      title: "Fast",
      desc: "Accidental Deliveries",
      color: "text-cyan-400",
      glow: "from-cyan-400/20",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="
                  group relative overflow-hidden
                  bg-[var(--card)]
                  border border-[var(--border)]
                  rounded-2xl p-6
                  text-center
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* Glow */}
                <div
                  className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    bg-gradient-to-b ${item.glow} to-transparent
                  `}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div
                    className={`
                      w-10 h-10 rounded-full
                      flex items-center justify-center
                      bg-black/20
                      ${item.color}
                    `}
                  >
                    <Icon size={20} />
                  </div>

                  <p className={`text-xl font-extrabold ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-[var(--muted)] leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
