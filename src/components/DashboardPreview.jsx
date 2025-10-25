import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, LineChart } from 'lucide-react';

function TinyBar({ delay = 0, height = '60%' }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: 'spring', stiffness: 120, damping: 20 }}
      style={{ height }}
      className="w-2 origin-bottom rounded bg-gradient-to-t from-blue-500 to-cyan-300"
    />
  );
}

export default function DashboardPreview() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
        <div className="p-5 flex items-center justify-between border-b border-white/10">
          <div>
            <h3 className="font-semibold">Growth Radar</h3>
            <p className="text-xs text-white/60">Signals across users, revenue, and code velocity</p>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <div className="inline-flex items-center gap-1 text-emerald-300 text-sm">
              <TrendingUp className="h-4 w-4" /> +12.8% this week
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 p-6">
          <div className="col-span-2 rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <LineChart className="h-4 w-4 text-cyan-300" />
                Active Users
              </div>
              <div className="text-xs text-emerald-300">+8.2%</div>
            </div>
            <div className="h-40 w-full bg-gradient-to-b from-white/5 to-transparent rounded-lg border border-white/10 relative overflow-hidden">
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                className="absolute inset-0"
                viewBox="0 0 400 160"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0 120 C 60 110, 80 60, 120 70 S 200 120, 240 90 320 70, 400 80"
                  stroke="url(#lineGrad)"
                  strokeWidth="3"
                  fill="none"
                />
              </motion.svg>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <BarChart3 className="h-4 w-4 text-fuchsia-300" />
                MRR
              </div>
              <div className="text-xs text-emerald-300">$84.2k</div>
            </div>
            <div className="h-40 flex items-end gap-2">
              {Array.from({ length: 18 }).map((_, i) => (
                <TinyBar key={i} delay={i * 0.04} height={`${30 + Math.round(Math.random() * 60)}%`} />
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/60">Conversion</p>
              <p className="text-lg font-semibold">7.3%</p>
              <p className="text-[11px] text-emerald-300 mt-1">+0.6% WoW</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/60">Deployment Velocity</p>
              <p className="text-lg font-semibold">32/day</p>
              <p className="text-[11px] text-emerald-300 mt-1">+11% WoW</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-white/60">Code Health Score</p>
              <p className="text-lg font-semibold">92/100</p>
              <p className="text-[11px] text-emerald-300 mt-1">Stable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
