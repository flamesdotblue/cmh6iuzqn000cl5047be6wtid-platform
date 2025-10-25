import React from 'react';
import { Brain, Code, Activity, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Brain,
    title: 'AI Project Brief Generator',
    desc: 'Transform ideas into execution blueprints: scopes, milestones, user stories, and risk maps — instantly.',
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Code,
    title: 'Smart Code Analyzer',
    desc: 'Get optimization tips, inline documentation, and architectural guidance powered by contextual AI.',
    accent: 'from-fuchsia-400 to-purple-500',
  },
  {
    icon: Activity,
    title: 'Growth Radar Dashboard',
    desc: 'Track traction, revenue, and code health with adaptive KPIs that evolve with your product stage.',
    accent: 'from-emerald-400 to-cyan-500',
  },
  {
    icon: Bot,
    title: 'Real-time AI Collaborator',
    desc: 'A co‑founder bot that ideates, reviews, and unblocks. Chat, assign, and ship without friction.',
    accent: 'from-amber-400 to-pink-500',
  },
];

export default function FeaturesGrid() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold">
          The operating system for modern builders
        </h2>
        <p className="text-white/60 mt-3 max-w-2xl mx-auto">
          SyntraFlow unifies planning, code intelligence, collaboration, and growth analytics into a singular, living workspace.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden hover:border-white/20"
          >
            <div className={`absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-30 blur-2xl bg-gradient-to-br ${f.accent}`} />
            <div className="relative flex items-center gap-3">
              <div className={`h-11 w-11 grid place-items-center rounded-xl bg-gradient-to-br ${f.accent} text-black/90 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold tracking-tight">{f.title}</h3>
            </div>
            <p className="relative mt-3 text-sm text-white/70 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
