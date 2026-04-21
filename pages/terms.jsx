import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, ArrowLeft } from "lucide-react";
import Background from "@/components/Background";

export default function Terms() {
  return (
    <div className="relative min-h-screen">
      <Background />

      {/* Nav */}
      <header className="relative z-20 px-6 md:px-10 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="AskFUTA"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-white font-semibold tracking-tight">AskFUTA</span>
        </Link>

        <a
          href="https://wa.me/2349168313946?text=Hi%20AskFUTA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/60 hover:text-white flex items-center gap-1.5"
        >
          <MessageCircle size={14} /> WhatsApp
        </a>
      </header>

      {/* Content */}
      <section className="relative z-10 px-6 md:px-10 py-16 max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white mb-10"
        >
          <ArrowLeft size={14} /> back home
        </Link>

        <div className="text-[11px] uppercase tracking-[0.2em] text-futa-purpleLight mb-3">
          Terms
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
          The fine print, in plain English.
        </h1>
        <p className="text-white/50 text-sm mb-12">Last updated: April 2026</p>

        <div className="space-y-10 text-white/80 text-[15px] leading-relaxed">
          <p>
            You're about to message a bot a student built. Here's the deal.
          </p>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">What AskFUTA is</h2>
            <p>
              A WhatsApp assistant for Federal University of Technology, Akure
              students. It answers questions about admissions, departments, fees,
              SIWES, campus life, registration, and so on. Built and maintained by a
              single student, not by FUTA or any arm of it.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Independence</h2>
            <p>
              AskFUTA is not owned, endorsed, or managed by FUTA, its Senate,
              Registry, Bursary, Student Affairs, or any official office. The answers
              are based on publicly available info and student knowledge. Treat them
              as helpful, not official.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Accuracy, honestly</h2>
            <p>
              I do my best to make sure the info is right, and most of it traces back
              to real FUTA documents and verified student experience. But things
              change, dates shift, offices move, deadlines get bumped.
            </p>
            <p className="mt-3">
              If you're about to do something important, like pay fees, submit a
              form, meet a deadline, always double-check with the official source
              (portal, notice board, or the relevant office). Don't miss a deadline
              because a bot told you next Tuesday.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">How to use it</h2>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>Ask like you'd ask a senior. Normal English is fine.</li>
              <li>Be chill. Don't spam, don't try to break it, don't harass it.</li>
              <li>Don't use it to scam, impersonate, or mislead other people.</li>
              <li>Don't send illegal content through it.</li>
            </ul>
            <p className="mt-3">
              If someone abuses the service, I'll block them. No drama.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Rate limits</h2>
            <p>
              There's a daily message cap per person, because running the AI costs
              money and I'm funding this myself for now. If you hit it, the bot will
              tell you and ask you to come back tomorrow.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Downtime and changes</h2>
            <p>
              Sometimes the bot will be down, Meta-side, server-side, or just because
              I'm updating something. I'll try to keep it running but I can't
              guarantee 24/7 uptime.
            </p>
            <p className="mt-3">
              Features, answers, and limits can change as the project grows.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Liability</h2>
            <p>
              Use AskFUTA at your own discretion. If a reply turns out to be wrong
              and it costs you something, I'm sorry, truly, but I can't be liable
              for the outcome. This is a free tool made by one student, not a legal
              or financial advisor.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Trademarks</h2>
            <p>
              "FUTA" and "Federal University of Technology, Akure" belong to the
              university. AskFUTA is a student-built tool that references the
              university for student utility purposes. Not an official product.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Contact</h2>
            <p>
              Message AskFUTA on WhatsApp for questions, feedback, or to request
              your data be deleted.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
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
          <div className="flex items-center gap-5 text-white/40 text-xs">
            <Link href="/privacy" className="hover:text-white/80">Privacy</Link>
            <Link href="/terms" className="hover:text-white/80">Terms</Link>
          </div>
          <div className="text-white/40 text-xs">
            Made by a student who got tired of being stuck.
          </div>
        </div>
      </footer>
    </div>
  );
}
