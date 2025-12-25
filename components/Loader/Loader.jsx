import React from "react";

export default function BlueBuffLoader() {
  return (
    <>
      <style>{`
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.05); opacity: 1; }
        }

        .spin-slow {
          animation: slowSpin 8s linear infinite;
          will-change: transform;
        }

        .spin-reverse {
          animation: slowSpin 12s linear infinite reverse;
        }

        .breathe {
          animation: breathe 2.8s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]">
        <div className="relative w-28 h-28">

          {/* Soft outer ring */}
          <div className="absolute inset-0 rounded-full border border-white/10 spin-slow" />

          {/* Gradient arc */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-2 spin-reverse"
          >
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>

            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="2.5"
              strokeDasharray="160 80"
              strokeLinecap="round"
              opacity="0.9"
            />
          </svg>

          {/* Core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="
              w-14 h-14 rounded-xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              breathe
            ">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-md" />

              <span
                className="relative z-10 grid place-items-center h-full font-semibold text-sm"
                style={{ textShadow: "0 0 6px rgba(0,0,0,.4)" }}
              >
                SS
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
