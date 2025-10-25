import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient overlays that do not block Spline */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_30%,rgba(37,148,255,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_30%_60%,rgba(162,54,255,0.08),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 lg:pt-24 pb-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-xs text-white/80 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              <span>Next‑gen AI workspace for builders</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 via-blue-400 to-fuchsia-400">Think. Build. Scale.</span>
              <br />
              SyntraFlow makes momentum inevitable.
            </h1>
            <p className="mt-5 text-white/70 max-w-xl">
              A living, intelligent hub where ideas crystalize into execution. Generate project blueprints, analyze code in real‑time, and illuminate growth — all in one fluid space.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:opacity-90 transition shadow-[0_10px_40px_-12px] shadow-fuchsia-500/40">
                Start free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#dashboard" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-white/90 hover:border-white/30 hover:bg-white/10 transition">
                Explore the Growth Radar
              </a>
            </div>
            <div className="mt-6 text-xs text-white/50">
              Premium-grade security • Stripe billing • Cloud scale
            </div>
          </motion.div>
        </div>

        <div className="relative h-[420px] md:h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm">
            <Spline scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
