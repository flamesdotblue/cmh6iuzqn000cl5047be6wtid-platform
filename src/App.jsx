import React from 'react';
import { Rocket, Bot, Users, Shield } from 'lucide-react';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import DashboardPreview from './components/DashboardPreview';
import PricingTiers from './components/PricingTiers';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07080C] text-white antialiased">
      {/* Ambient radial glows */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full opacity-30 blur-[120px] bg-[radial-gradient(circle_at_center,rgba(0,183,255,0.5),transparent_60%)]" />
        <div className="absolute -bottom-32 -right-32 h-[40rem] w-[40rem] rounded-full opacity-25 blur-[120px] bg-[radial-gradient(circle_at_center,rgba(162,54,255,0.5),transparent_60%)]" />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur-md/30 bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400/70 to-fuchsia-500/70 shadow-[0_0_35px_-10px] shadow-fuchsia-500/50">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-semibold tracking-wide">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400">SyntraFlow</span>
              </div>
              <p className="text-[11px] text-white/60 -mt-0.5">AI Productivity & Innovation Hub</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#dashboard" className="hover:text-white transition">Growth Radar</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#" className="hover:text-white transition flex items-center gap-2"><Shield className="h-4 w-4" /> Security</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg border border-white/15 text-white/90 hover:text-white hover:border-white/30 transition">Sign in</button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:opacity-90 transition shadow-[0_10px_30px_-12px] shadow-fuchsia-500/40">Get Started</button>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <section id="features" className="relative">
          <FeaturesGrid />
        </section>
        <section id="dashboard" className="relative">
          <DashboardPreview />
        </section>
        <section id="pricing" className="relative">
          <PricingTiers />
        </section>
      </main>

      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-white/70">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-cyan-300" />
              <p className="text-sm">Your real-time AI co‑founder</p>
            </div>
            <p className="text-xs">Draft strategy, review code, and accelerate growth with an always‑on collaborator.</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-fuchsia-300" />
              <p className="text-sm">Secure teams</p>
            </div>
            <p className="text-xs">Role-based access, SSO-ready, and audit trails for modern orgs.</p>
          </div>
          <div className="text-xs flex md:justify-end items-center gap-2 text-white/50">© {new Date().getFullYear()} SyntraFlow, Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
