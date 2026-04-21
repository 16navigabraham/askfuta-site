import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, ArrowLeft } from "lucide-react";
import Background from "@/components/Background";

export default function Privacy() {
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
          Privacy
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
          What I do with your data.
        </h1>
        <p className="text-white/50 text-sm mb-12">Last updated: April 2026</p>

        <div className="space-y-10 text-white/80 text-[15px] leading-relaxed">
          <p>
            I'll keep this short and plain, the same way I'd explain it to a course-mate.
          </p>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">What I collect</h2>
            <p>
              When you message AskFUTA on WhatsApp, I get your WhatsApp phone number,
              the name WhatsApp shows on your profile, and the messages you send.
              That's it. No email, no matric number, no passwords, nothing I didn't
              directly receive from your chat.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Why I keep it</h2>
            <p>
              So the bot remembers what you already asked. If you told it you're a
              300L IFT student on Monday, it shouldn't ask you again on Friday. That's
              the only reason, conversation context.
            </p>
            <p className="mt-3">
              After a while, older messages get auto-summarized into a short paragraph
              (so the bot still has context but isn't storing a thousand-message
              transcript forever).
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Who sees it</h2>
            <p>Short list:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-white/70">
              <li>Me, the student who built this. Only when debugging.</li>
              <li>
                Meta (WhatsApp), because that's how the message gets to you. Their
                privacy policy applies to the chat transport.
              </li>
              <li>
                xAI (Grok), the AI that generates replies. Your message gets sent to
                their API so the bot can answer. They have their own privacy terms.
              </li>
            </ul>
            <p className="mt-3">
              I don't sell your data. I don't share it with advertisers. I don't hand
              it to FUTA administration.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Deleting your data</h2>
            <p>
              Type <span className="text-futa-purpleLight font-mono">reset</span> in
              the chat and your conversation history gets wiped. If you want your phone
              number and everything attached to it removed entirely, email me at{" "}
              <a
                href="mailto:navigatorabraham17@gmail.com"
                className="text-futa-purpleLight hover:underline"
              >
                navigatorabraham17@gmail.com
              </a>{" "}
              and I'll do it manually.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Ads and money</h2>
            <p>
              AskFUTA is free. There are no ads right now. If that ever changes, I'll
              tell you first, and I still won't sell your personal data. Any future
              monetization will come from partnerships with FUTA itself or student
              bodies, not from your messages.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Kids</h2>
            <p>
              This is built for university students. If you're under 16, please ask a
              parent or guardian before using it.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Changes</h2>
            <p>
              If I change this policy, the date at the top of this page changes too.
              If the change is big, I'll message people on WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-lg mb-3">Reaching me</h2>
            <p>
              Email{" "}
              <a
                href="mailto:navigatorabraham17@gmail.com"
                className="text-futa-purpleLight hover:underline"
              >
                navigatorabraham17@gmail.com
              </a>{" "}
              or message AskFUTA on WhatsApp. I read everything myself.
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
