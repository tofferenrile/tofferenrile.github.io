/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Quote,
  User,
  Heart,
  Sparkles,
  Activity,
  Droplet,
  Zap,
  Moon,
  ShieldCheck,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-bg text-ink selection:bg-primary-800 relative"
    >
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center bg-bg/80 backdrop-blur-sm border-b border-border/10">
        <div className="editorial-tag !mb-0 cursor-default">
          Enrile SAS 1 Portfolio 2026
        </div>
        <div className="flex gap-4 md:gap-8">
          {[
            { id: "intro", label: "00. Intro" },
            { id: "part-1", label: "01. Definition" },
            { id: "part-2", label: "02. Impressions" },
            { id: "part-3", label: "03. Manifestos" },
          ].map((nav) => (
            <button
              key={nav.id}
              onClick={() => scrollToSection(nav.id)}
              className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent hover:text-white transition-colors"
            >
              {nav.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="pt-24 md:pt-32">
        {/* Intro Section */}
        <section
          id="intro"
          className="section-container flex flex-col justify-center items-center text-center min-h-[70vh]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="editorial-tag">Introductory Phase</span>
            <h1 className="editorial-title mb-8">
              The Process of Self-Construction
            </h1>
            <p className="editorial-subtitle text-lg md:text-2xl italic normal-case tracking-tight opacity-80">
              "A Personal Reflection on Identity, Growth, and Perspectives"
            </p>
            <div className="mt-20 h-px w-32 bg-white/10 mx-auto" />
          </motion.div>
        </section>

        {/* Part 1: Defining the Self */}
        <section id="part-1" className="section-container">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <h2 className="editorial-h2">01. Defining the Self</h2>
            <div className="space-y-4">
              <p className="editorial-p">
                The process of constructing my own self hasn't been a
                straightforward path, but rather a constant shaping and
                reshaping of my beliefs and perspectives. Looking back, I think
                the first time I truly became aware of myself was when I started
                questioning the environment I was raised in. I grew up in a
                very, very religious household, and early on, my identity was
                heavily tied to that.
              </p>
              <p className="editorial-p">
                But around the seventh grade, I started questioning
                Christianity. I noticed the hypocrisy and how they would shun
                other Christians just because their doctrines didn't completely
                align with the church I attended. In short, it was a very
                suffocating environment. This was the first time I really
                exercised independent identity development, as I realized that
                my understanding of what is right or wrong didn't have to be
                tied to such a rigid and exclusionary system.
              </p>
              <div className="quote-block">
                "That experience of breaking away from an imposed belief system
                naturally led me to think more deeply about why people,
                including myself, behave and think the way they do."
              </div>
              <p className="editorial-p">
                As I explored more about how we develop, I found myself agreeing
                with the perspectives of Robert Sapolsky. Based on his logic and
                facts, I think we humans essentially have no free will, as our
                behaviors are just a product of our biology, environment, and
                experiences rather than a conscious choice.
              </p>
              <p className="editorial-p">
                At first, it can be a hard concept to accept, but pondering
                about what he said deeply shaped my personality and how I
                interact with the world. Because I understand that we are shaped
                by these factors, I respect what other people believe, and I
                don't like forcing my beliefs on anyone and vice versa. Instead
                of judging others, understanding these biological influences
                gives me a more empathetic view of people.
              </p>
              <p className="editorial-p">
                That same empathy extends to how I see others in terms of
                sexuality and self-expression. I am aware that we all have our
                differences, and whatever those differences are, I respect that.
                I am a straight man, I express myself as masculine, and my
                sexual characteristics are male.
              </p>
              <p className="editorial-p">
                But I don't see anything wrong with someone being attracted to
                the same gender or anything in between. I know that we are all
                unique in how we express ourselves and how we show interest in
                other people. As long as no one is forcing their beliefs on me,
                and I am not forcing mine on them, we will be fine together.
              </p>
              <p className="editorial-p">
                Beyond beliefs and values, my sense of self was also heavily
                tested when I entered UPLB. Before college, I had this great
                confidence in myself and in my abilities, to the point where
                some people saw me as arrogant. I never had a moment where I
                questioned myself or what I could do. But after the first year
                here, everything changed. I had this severe lull where I didn't
                want to do anything but lay in my bed, and I couldn't find that
                confidence that I once had.
              </p>
              <div className="border-t border-white/10 pt-16 mt-16 space-y-8">
                <p className="editorial-p font-medium text-white/90">
                  The reality of the environment really hit me, and it was a
                  difficult period for my mental health. This experience made me
                  realize how much of my previous self-concept was untested, and
                  how the environment plays a huge role in shaping and even
                  dismantling who we think we are—something that directly
                  connects to what we discussed about the social construction of
                  the self.
                </p>
                <p className="editorial-p italic text-accent/60">
                  After going through all of these from questioning my faith, to
                  developing a more empathetic worldview, to losing and
                  rebuilding my confidence in college, I can say that I now have
                  a stable and settled idea of myself. I understand now that the
                  self is not something fixed that you find, but something you
                  continuously build.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Part 2: How Others See Me */}
        <section
          id="part-2"
          className="bg-white/[0.01] border-y border-white/5"
        >
          <div className="section-container">
            <motion.div {...fadeInUp}>
              <h2 className="editorial-h2">02. Perspectives</h2>
              <div className="grid md:grid-cols-2 gap-20">
                <section className="space-y-12">
                  <div>
                    <h3 className="editorial-h3">Social Reflection</h3>
                    <p className="editorial-p italic opacity-70 leading-relaxed mb-12 text-xl font-display">
                      "When examining the self through the lens of others, a
                      fascinating mirror is held up to our own internal
                      perceptions."
                    </p>
                    <div className="space-y-12">
                      <div className="p-10 bg-white/[0.02] border border-white/10 rounded-sm relative group hover:border-white/20 transition-colors">
                        <Quote className="absolute -top-4 -left-4 w-10 h-10 text-white/5 group-hover:text-white/10 transition-colors" />
                        <p className="editorial-p !mb-0 text-[16px] md:text-[18px]">
                          "My girlfriend describes me as a highly intelligent
                          person who is deeply passionate about the things I
                          love. To her, I am 'fun to be with and crazy,'
                          highlighting a spontaneous side of my personality."
                        </p>
                      </div>
                      <div className="p-10 bg-white/[0.02] border border-white/10 rounded-sm relative group hover:border-white/20 transition-colors">
                        <Quote className="absolute -top-4 -left-4 w-10 h-10 text-white/5 group-hover:text-white/10 transition-colors" />
                        <p className="editorial-p !mb-0 text-[16px] md:text-[18px]">
                          "My friends echo these sentiments, viewing me as
                          passionate, intelligent, and confident. Crucially,
                          they noted that I am someone who does not steer away
                          from my morals."
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="space-y-16">
                  <div>
                    <h3 className="editorial-h3">Analysis & Evolution</h3>
                    <div className="space-y-16">
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
                        <h4 className="text-[10px] uppercase tracking-[0.5em] text-accent mb-6 font-mono">
                          Core Capacities
                        </h4>
                        <p className="editorial-p">
                          My primary strengths are a deep-seated passion for my
                          pursuits, intellectual capability, and an unwavering
                          commitment to my ethical boundaries.
                        </p>
                      </div>
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />
                        <h4 className="text-[10px] uppercase tracking-[0.5em] text-accent mb-6 font-mono">
                          The Evolution
                        </h4>
                        <p className="editorial-p mb-6">
                          I must remain mindful of channeling my strong
                          convictions in a way that is assertive yet open,
                          continuing to grow into someone whose confidence
                          uplifts rather than alienates.
                        </p>
                        <p className="editorial-p italic text-accent/70">
                          Balancing my spontaneous energy with the discipline
                          required to maintain my mental wellbeing is also
                          something I see as a continuous and worthwhile area of
                          growth moving forward.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Part 3: Manifestos */}
        <section id="part-3" className="section-container">
          <motion.div {...fadeInUp}>
            <h2 className="editorial-h2">03. Manifestos</h2>

            {/* Core Beliefs */}
            <div className="mb-32">
              <div className="flex items-center gap-8 mb-12">
                <h3 className="editorial-h3 !mb-0 italic normal-case font-display text-sm md:text-base tracking-normal">
                  Core Beliefs
                </h3>
                <div className="flex-1 h-px bg-white/5" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {[
                  {
                    label: "Presence",
                    title: "Radical Authenticity",
                    desc: "I believe life is too fleeting for hesitation. Every action should honor my true self.",
                  },
                  {
                    label: "Ethics",
                    title: "Integrity First",
                    desc: "I believe that true success cannot coexist with the exploitation of others.",
                  },
                  {
                    label: "Connection",
                    title: "Radical Empathy",
                    desc: "I believe sympathy is the foundation of genuine human connection and understanding.",
                  },
                  {
                    label: "Dignity",
                    title: "Universal Equality",
                    desc: "I believe in the inherent worth of every human, regardless of their path or position.",
                  },
                ].map((belief, i) => (
                  <div key={i} className="space-y-4">
                    <span className="text-[9px] font-mono text-accent/40 uppercase tracking-[0.3em]">
                      Belief.0{i + 1}
                    </span>
                    <h4 className="text-lg font-display italic text-white/90">
                      {belief.title}
                    </h4>
                    <p className="text-sm text-accent/50 leading-relaxed">
                      {belief.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-32">
              <section>
                <div className="flex items-center gap-8 mb-12">
                  <h3 className="editorial-h3 !mb-0 italic normal-case font-display text-sm md:text-base tracking-normal">
                    Personal Manifesto
                  </h3>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <div className="space-y-12">
                  {[
                    {
                      title: "You only live once live with no regrets.",
                      text: "Live boldly and authentically, making choices that honor my true self without looking back.",
                    },
                    {
                      title:
                        "Make sure to never trample on others to get ahead.",
                      text: "Success is only meaningful when achieved with integrity and respect for the journey of those around me.",
                    },
                    {
                      title: "Live life with sympathy.",
                      text: "Maintaining a heart that understands and feels for others is essential for a connected and meaningful existence.",
                    },
                    {
                      title: "Never look down on anyone.",
                      text: "Equality is a fundamental truth; everyone is fighting a battle we know nothing about and deserves dignity.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group border-b border-white/5 pb-8 last:border-0 hover:border-white/10 transition-all duration-500"
                    >
                      <div className="flex items-baseline gap-6 mb-3">
                        <span className="text-[10px] font-mono opacity-20 tracking-widest group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          0{i + 1}
                        </span>
                        <h4 className="font-display italic text-2xl md:text-3xl text-white/90 group-hover:text-white group-hover:translate-x-2 transition-all">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-[14px] md:text-[15px] text-accent/60 leading-relaxed ml-10 md:ml-12 group-hover:text-ink transition-colors">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-8 mb-12">
                  <h3 className="editorial-h3 !mb-0 italic normal-case font-display text-sm md:text-base tracking-normal">
                    Health Manifesto
                  </h3>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <ul className="space-y-6">
                  {[
                    {
                      text: "Prioritize 7 to 8 hours of restful sleep every night to recharge the mind and body.",
                    },
                    {
                      text: "Stay hydrated and fuel the body with nutritious, balanced meals.",
                    },
                    {
                      text: "Engage in regular physical activity to maintain biological and mental wellbeing.",
                    },
                    {
                      text: "Set firm boundaries to protect personal peace and avoid burnout.",
                    },
                    {
                      text: "Allow grace for bad days, remembering that mental health is a journey.",
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-10 p-12 bg-white/[0.015] border border-white/5 rounded-sm hover:bg-white/[0.04] transition-all duration-700 group"
                    >
                      <span className="text-[10px] font-mono opacity-20 group-hover:opacity-100 transition-opacity pt-1 underline decoration-white/20 uppercase whitespace-nowrap">
                        Rule.{i + 1}
                      </span>
                      <p className="text-[16px] md:text-[18px] text-accent font-light leading-relaxed group-hover:text-ink transition-colors">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-24 text-center">
          <motion.div {...fadeInUp}>
            <p className="text-[11px] font-mono uppercase tracking-[0.6em] text-accent/40 mb-10">
              Enrile SAS 1 Portfolio 2026
            </p>
            <div className="flex justify-center gap-12 text-accent/20 text-[10px] uppercase tracking-[0.3em]">
              <span>Identity</span>
              <span>Growth</span>
              <span>Perspective</span>
            </div>
          </motion.div>
        </footer>
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .break-inside-avoid {
          break-inside: avoid;
        }
      `}</style>
    </motion.div>
  );
}
