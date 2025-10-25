import React from 'react';
import { Check, CreditCard, Shield, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    tagline: 'For individuals exploring AI‑assisted building',
    features: [
      'AI brief generator (basic)',
      'Code analyzer (limited)',
      'Single project, 2 collaborators',
      'Community support',
    ],
    cta: 'Start free',
    glow: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'SyntraFlow Pro',
    price: '$29',
    tagline: 'For teams who ship and scale',
    features: [
      'Unlimited briefs & advanced prompts',
      'Full smart code insights + docs',
      'Growth Radar & custom KPIs',
      'Real‑time AI collaborator',
      'Priority support & SSO-ready',
    ],
    cta: 'Upgrade — Stripe',
    glow: 'from-fuchsia-400 to-purple-500',
    highlighted: true,
  },
];

export default function PricingTiers() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Choose your momentum</h2>
          <p className="text-white/60 mt-2">Simple pricing. Secure billing with Stripe. Cancel anytime.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-white/70 text-sm">
          <Shield className="h-4 w-4 text-cyan-300" /> PCI-compliant • SOC2‑ready
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative rounded-3xl border ${p.highlighted ? 'border-white/20 bg-white/10' : 'border-white/10 bg-white/5'} p-6 overflow-hidden`}
          >
            <div className={`absolute -top-16 -right-16 h-56 w-56 rounded-full opacity-30 blur-2xl bg-gradient-to-br ${p.glow}`} />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br ${p.glow} text-black/80`}>
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="text-xs text-white/60">{p.tagline}</p>
                </div>
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{p.price}</span>
                {p.name !== 'Starter' && <span className="text-sm text-white/60">/month per user</span>}
              </div>
              <ul className="mt-5 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                    <Check className="h-4 w-4 text-emerald-300 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3">
                <button className={`px-5 py-3 rounded-xl ${p.highlighted ? 'bg-gradient-to-r from-cyan-500 to-fuchsia-500' : 'border border-white/15 bg-white/5'} hover:opacity-90 transition`}>{p.cta}</button>
                {p.highlighted && (
                  <div className="text-xs text-white/70 hidden sm:flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-fuchsia-300" /> Stripe secure checkout
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
