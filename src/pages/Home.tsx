import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Lock, CheckCircle, AlertCircle, Bot, Key, Zap, Target, FileText, ScrollText, Stamp, Wrench, Send, Search, Check, FileJson } from "lucide-react";

export default function Home() {
  const actors = [
    {
      title: "Agent",
      description: "The AI or service proposing an action",
      icon: Bot,
      detail: "Decides 'I want to do X' and sends intent to Stedy"
    },
    {
      title: "Stedy",
      description: "The policy brain & cryptographic signer",
      icon: Key,
      detail: "Evaluates intent against policy, returns signed receipt if approved"
    },
    {
      title: "Executor",
      description: "The entity performing the action",
      icon: Zap,
      detail: "Verifies Stedy's signature before executing (contract or service)"
    },
    {
      title: "Target",
      description: "Where the action ultimately goes",
      icon: Target,
      detail: "Token contract, swap router, external API, etc."
    }
  ];

  const objects = [
    {
      title: "Intent",
      subtitle: "What the agent wants",
      color: "from-blue-500/20 to-blue-600/20",
      icon: FileJson,
      fields: [
        "action: 'erc20.transfer'",
        "token: 0x...",
        "to: 0x...",
        "amount: 5e18",
        "chainId: 31337",
        "nonce: random",
        "expiresIn: 60 seconds"
      ]
    },
    {
      title: "Policy",
      subtitle: "What's allowed",
      color: "from-orange-500/20 to-orange-600/20",
      icon: ScrollText,
      fields: [
        "max per tx: 10 tokens",
        "allowlisted tokens: [...]",
        "allowlisted recipients: [...]",
        "rate limits: 5 tx/hour",
        "time windows: 9am-5pm UTC"
      ]
    },
    {
      title: "Receipt",
      subtitle: "Stedy's cryptographic approval",
      color: "from-green-500/20 to-green-600/20",
      icon: Stamp,
      fields: [
        "agentId: 0x...",
        "intentHash: 0x...",
        "expiresAt: timestamp",
        "nonce: random",
        "signature: 0x..."
      ]
    }
  ];

  const flowSteps = [
    {
      step: 1,
      title: "Setup (One Time)",
      description: "Deploy executor with Stedy signer address. Configure policies in Stedy.",
      icon: Wrench
    },
    {
      step: 2,
      title: "Agent Proposes",
      description: "Agent creates intent message and sends to Stedy.",
      icon: Send
    },
    {
      step: 3,
      title: "Stedy Evaluates",
      description: "Check intent against policy. If allowed: sign and return receipt.",
      icon: Search
    },
    {
      step: 4,
      title: "Executor Verifies",
      description: "Verify Stedy's signature. If valid: execute the action.",
      icon: Check
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
      {/* Grid Background Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)',
             backgroundSize: '4rem 4rem',
             opacity: 0.1
           }}>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
              <Shield className="w-3 h-3" />
            </div>
            <span className="font-bold text-lg tracking-tight">Stedy</span>
          </div>
          
          <Button className="bg-white text-black hover:bg-gray-200 rounded-md px-6 font-medium">
            Contact Us
          </Button>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Badge variant="secondary" className="bg-white/10 text-white border border-white/20 hover:bg-white/20 mb-6 rounded-full px-4 py-1">
              Authorization Layer for AI
            </Badge>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Runtime Authorization<br />for AI Agents
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Stedy sits between your agent and execution. Agents propose actions. Stedy evaluates them against policy, then returns a signed receipt that executors verify before acting.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* CTA buttons removed - contact form available at bottom */}
          </motion.div>
        </section>

        {/* The 4 Actors Section */}
        <section className="container mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">The 4 Actors</h2>
            <p className="text-gray-400 text-lg">Every authorization flow involves these four components working together.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {actors.map((actor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border border-white/10 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="mb-4"><actor.icon className="w-8 h-8 text-white" /></div>
                <h3 className="text-xl font-bold mb-2">{actor.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{actor.description}</p>
                <p className="text-gray-500 text-xs">{actor.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The 3 Objects Section */}
        <section className="container mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">The 3 Objects</h2>
            <p className="text-gray-400 text-lg">Core data structures that power the authorization system.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {objects.map((obj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`border border-white/10 rounded-lg p-8 bg-gradient-to-br ${obj.color} backdrop-blur-sm`}
              >
                <div className="mb-4"><obj.icon className="w-10 h-10 text-white" /></div>
                <h3 className="text-2xl font-bold mb-2">{obj.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{obj.subtitle}</p>
                
                <div className="bg-black/50 rounded p-4 font-mono text-xs text-gray-300 space-y-2">
                  {obj.fields.map((field, i) => (
                    <div key={i} className="text-gray-400">{field}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Authorization Flow */}
        <section className="container mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">The Authorization Flow</h2>
            <p className="text-gray-400 text-lg">How Stedy evaluates and approves agent actions in real-time.</p>
          </motion.div>

          <div className="space-y-6">
            {flowSteps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 border border-white/20">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow border-l border-white/10 pl-6 py-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-orange-400">Step {item.step}</span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="container mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Where Stedy Works</h2>
            <p className="text-gray-400 text-lg">Flexible authorization for on-chain and off-chain execution.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-white/10 rounded-lg p-8 bg-white/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold">On-Chain</h3>
              </div>
              <p className="text-gray-400 mb-6">Deploy a GuardedExecutor smart contract that verifies Stedy's signature before executing token transfers, swaps, or complex DeFi operations.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400 flex-shrink-0" /> Token transfers</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400 flex-shrink-0" /> Swap execution</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400 flex-shrink-0" /> Liquidity management</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400 flex-shrink-0" /> Governance actions</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-white/10 rounded-lg p-8 bg-white/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold">Off-Chain</h3>
              </div>
              <p className="text-gray-400 mb-6">Use Stedy as a policy engine for server-side actions. Verify receipts before executing Stripe payouts, email sends, or AWS deployments.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 flex-shrink-0" /> Payment processing</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 flex-shrink-0" /> Email campaigns</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 flex-shrink-0" /> Cloud deployments</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400 flex-shrink-0" /> Data exports</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="container mx-auto px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-white/10 rounded-lg p-12 bg-white/5"
          >
            <h2 className="text-4xl font-bold mb-2 text-center">Get In Touch</h2>
            <p className="text-gray-400 text-lg mb-8 text-center">
              Have questions about Stedy? We'd love to hear from you.
            </p>
            
            <form
              action="https://formspree.io/f/mpqwbzrr"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  placeholder="Tell us what you'd like to know about Stedy..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 rounded-md px-8 py-3 text-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
