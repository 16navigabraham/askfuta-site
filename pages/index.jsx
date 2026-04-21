import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import Background from "@/components/Background";

const CHATS = [
  {
    tag: "portal wahala, 2:47pm",
    q: "i paid my fees last week and the portal still says unpaid abeg",
    a: "Go back to firarsapp.futa.edu.ng, payment page, scroll to 'View Generated Invoice(s)' and click the Refresh button under Action. That flips the status to Paid. If Refresh still doesn't update it, that's a portal-side issue, go to CRC (Computer Resource Centre), not Bursary. Bursary doesn't handle portal transaction status.",
  },
  {
    tag: "300L IFT student, 9:12am",
    q: "when is siwes starting this year",
    a: "400L second semester, April 20th 2026 to October 2026 (6 months). You need 3 documents: SCAF form (submit to ITF Area Office within 2 weeks of starting), Form 8 (Part A you fill, Part B your employer, Part C your school supervisor), and your logbook, 24 weekly entries + 24 supervisor stamps with a passport photo on the cover page.",
  },
  {
    tag: "fresher, Apatapiti",
    q: "how do i move around campus without spending money",
    a: "If you're in Apatapiti you're already closest to South Gate, 15-20 min walk in. Campus shuttle is ₦200 flat. Okada isn't allowed inside campus, don't waste time looking for one, only works off-campus. Most people just walk, the campus is big but doable. Keep your student ID on you at all times.",
  },
];

const ANSWERS = [
  "Admission status, cut-off marks, post-UTME dates",
  "Where every hostel is and how to get there",
  "SIWES registration, logbook rules, attachment letters",
  "How to pay fees on eportal (and what to do when Remita flops)",
  "Course structure per department, per level",
  "Who to contact in the bursary, registry, CDC",
  "When the shuttle runs and when it doesn't",
  "What to expect from your level adviser",
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Background />

      {/* Nav */}
      <header className="relative z-20 px-6 md:px-10 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="AskFUTA"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-white font-semibold tracking-tight">AskFUTA</span>
        </div>

        <a
          href="https://wa.me/2349168313946?text=Hi%20AskFUTA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/60 hover:text-white flex items-center gap-1.5"
        >
          <MessageCircle size={14} /> WhatsApp
        </a>
      </header>

      {/* Hero — asymmetric, logo on the side */}
      <section className="relative z-10 px-6 md:px-10 pt-10 md:pt-20 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-xs text-white/50 mb-6"
            >
              <span className="w-1 h-1 rounded-full bg-futa-purpleLight" />
              Akure · Ondo State · Nigeria
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]"
            >
              The senior in your phone who
              <span className="text-futa-purpleLight"> actually knows </span>
              FUTA.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-white/60 text-lg leading-relaxed max-w-xl"
            >
              You'll message AskFUTA on WhatsApp like you're messaging a course-mate.
              It answers. No app, no sign-up, no "kindly be informed" emails.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-9 flex items-center gap-4 flex-wrap"
            >
              <a
                href="https://wa.me/2349168313946?text=Hi%20AskFUTA"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-5 py-2.5 rounded-lg bg-futa-purple hover:bg-futa-purpleLight transition-colors text-white text-sm font-medium flex items-center gap-2 glow-purple"
              >
                <MessageCircle size={16} />
                Message on WhatsApp
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#answers"
                className="text-sm text-white/60 hover:text-white flex items-center gap-1"
              >
                what can it answer <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-2 relative flex justify-center"
          >
            <div className="absolute inset-0 bg-futa-purple/25 blur-3xl rounded-full" />
            <Image
              src="/logo.png"
              alt=""
              width={280}
              height={280}
              className="relative drop-shadow-[0_0_40px_rgba(102,45,145,0.45)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Why — handwritten / first-person */}
      <section className="relative z-10 px-6 md:px-10 py-16 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-5 border-l-2 border-futa-purple/60"
        >
          <div className="text-[11px] uppercase tracking-[0.2em] text-futa-purpleLight mb-3">
            Why this exists
          </div>
          <p className="text-white/80 text-lg leading-relaxed">
            Because the bursary queue is two hours long. Because nobody in your class
            actually knows the SIWES date either. Because CDC doesn't pick calls and the
            level adviser is in a different faculty today. Because your senior graduated
            and took all the answers with him.
          </p>
          <p className="text-white/60 text-base leading-relaxed mt-4">
            I built AskFUTA as a student, an IFT student, actually, because I got tired
            of ten WhatsApp groups and still not finding the answer. If you also got
            tired, this is for you.
          </p>
        </motion.div>
      </section>

      {/* Real chats — varied sizes, not a grid */}
      <section className="relative z-10 px-6 md:px-10 py-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-[11px] uppercase tracking-[0.2em] text-futa-purpleLight mb-2">
            Real questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            What it actually sounds like
          </h2>
        </motion.div>

        <div className="space-y-6">
          {CHATS.map((c, i) => (
            <motion.div
              key={c.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`grid md:grid-cols-12 gap-4 ${
                i % 2 === 1 ? "md:pl-16" : "md:pr-16"
              }`}
            >
              <div className="md:col-span-3 text-xs text-white/40 md:pt-3">
                {c.tag}
              </div>
              <div className="md:col-span-9 space-y-2">
                <div className="bg-white/5 border border-white/10 text-white/90 px-4 py-3 rounded-2xl rounded-bl-sm max-w-fit text-[15px]">
                  {c.q}
                </div>
                <div className="bg-futa-purple/15 border border-futa-purple/30 text-white px-4 py-3 rounded-2xl rounded-br-sm text-[15px] leading-relaxed">
                  {c.a}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Answers list — no icons, just type */}
      <section id="answers" className="relative z-10 px-6 md:px-10 py-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[11px] uppercase tracking-[0.2em] text-futa-purpleLight mb-2">
            Things it knows
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10">
            The answers live here. So you stop waiting on replies that never come.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
          {ANSWERS.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-baseline gap-3 py-2 border-b border-white/5"
            >
              <span className="text-futa-purpleLight text-xs font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-white/80">{a}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-white/40 text-sm mt-10">
          The answers come from students who've already done it, not a marketing brochure.
        </p>
      </section>

      {/* Footer — simple */}
      <footer className="relative z-10 px-6 md:px-10 py-12 mt-10 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-sm">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={28} height={28} className="rounded" />
            <div>
              <div className="text-white/80 font-medium">AskFUTA</div>
              <div className="text-white/40 text-xs flex items-center gap-1.5">
                <MapPin size={11} /> Federal University of Technology, Akure
              </div>
            </div>
          </div>
          <div className="text-white/40 text-xs">
            Not affiliated with FUTA administration. Non-commercial.
          </div>
        </div>
      </footer>
    </div>
  );
}
