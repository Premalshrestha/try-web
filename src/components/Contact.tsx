import React, { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { profile } from '../data/profile';
import { SectionReveal } from './MotionPrimitives';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [composedNotice, setComposedNotice] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  const handleComposeMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanSubject = subject.trim() || `Portfolio Inquiry from ${name.trim() || 'Visitor'}`;
    const bodyLines = [
      name.trim() ? `Name: ${name.trim()}` : '',
      email.trim() ? `Reply-To: ${email.trim()}` : '',
      '',
      message.trim(),
    ]
      .filter(Boolean)
      .join('\n');

    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      cleanSubject
    )}&body=${encodeURIComponent(bodyLines)}`;

    window.location.href = mailtoUrl;
    setComposedNotice(true);
    window.setTimeout(() => setComposedNotice(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative border-t border-[#d4d4d4] dark:border-[#1f325c] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Info Column */}
          <SectionReveal className="lg:col-span-5">
            <p className="text-xs font-mono text-[#b46900] dark:text-[#FCA311]">
              Say Hello
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#000000] dark:text-[#FFFFFF]"
              style={{ textWrap: 'balance' }}
            >
              Have an Idea? Let&apos;s Build Something.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#14213D] dark:text-[#E5E5E5]">
              I&apos;m always interested in meaningful projects, opportunities to collaborate, and conversations around software engineering, AI, and technology for impact.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-4 border-t border-[#d4d4d4] dark:border-[#1f325c] pt-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex min-w-0 items-center gap-2.5 text-sm font-medium text-[#000000] dark:text-[#FFFFFF] hover:text-[#b46900] dark:hover:text-[#FCA311] break-all sm:break-normal"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#b46900] dark:text-[#FCA311]" />
                  <span>{profile.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] px-3 py-1.5 text-xs font-medium text-[#14213D] dark:text-[#E5E5E5] transition-colors hover:border-[#FCA311]/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-[#14213D] dark:text-[#b6c0d4]">
                <MapPin className="h-4 w-4 text-[#b46900] dark:text-[#FCA311]" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#FCA311] px-5 py-2.5 text-sm font-semibold text-[#000000] transition-colors hover:bg-[#fdb63b] whitespace-nowrap shrink-0"
              >
                <Mail className="h-4 w-4" />
                <span>Write an Email</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] px-4 py-2.5 text-sm font-medium text-[#000000] dark:text-[#FFFFFF] transition-colors hover:border-[#FCA311]/75 whitespace-nowrap shrink-0"
              >
                <Linkedin className="h-4 w-4 text-[#b46900] dark:text-[#FCA311]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] px-4 py-2.5 text-sm font-medium text-[#000000] dark:text-[#FFFFFF] transition-colors hover:border-[#FCA311]/75 whitespace-nowrap shrink-0"
              >
                <Github className="h-4 w-4 text-[#b46900] dark:text-[#FCA311]" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </SectionReveal>

          {/* Right Form Column (Humanized Mailto Composer) */}
          <SectionReveal className="lg:col-span-7" delay={0.08}>
            <form
              onSubmit={handleComposeMailto}
              className="rounded-2xl border border-[#d4d4d4] dark:border-[#1f325c] bg-[#FFFFFF] dark:bg-[#14213D] p-6 sm:p-8"
            >
              <div className="mb-6">
                <h3 className="font-display text-lg font-semibold text-[#000000] dark:text-[#FFFFFF]">
                  Send Me a Note
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#525d73] dark:text-[#b6c0d4]">
                  Fill in the quick note below and it will open in your email app ready to send to{' '}
                  <span className="font-mono text-[#000000] dark:text-[#E5E5E5]">
                    {profile.email}
                  </span>
                  .
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[#14213D] dark:text-[#E5E5E5]"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="How should I call you?"
                    className="mt-1.5 w-full rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-[#f5f5f5] dark:bg-[#000000] px-3.5 py-2.5 text-sm text-[#000000] dark:text-[#FFFFFF] placeholder:text-[#525d73]/75 dark:placeholder:text-[#b6c0d4]/60 focus:border-[#FCA311] focus:outline-none focus:ring-2 focus:ring-[#FCA311]/25"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-[#14213D] dark:text-[#E5E5E5]"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-[#f5f5f5] dark:bg-[#000000] px-3.5 py-2.5 text-sm text-[#000000] dark:text-[#FFFFFF] placeholder:text-[#525d73]/75 dark:placeholder:text-[#b6c0d4]/60 focus:border-[#FCA311] focus:outline-none focus:ring-2 focus:ring-[#FCA311]/25"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-[#14213D] dark:text-[#E5E5E5]"
                >
                  What&apos;s this about?
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="A project idea, collaboration, or just saying hi"
                  className="mt-1.5 w-full rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-[#f5f5f5] dark:bg-[#000000] px-3.5 py-2.5 text-sm text-[#000000] dark:text-[#FFFFFF] placeholder:text-[#525d73]/75 dark:placeholder:text-[#b6c0d4]/60 focus:border-[#FCA311] focus:outline-none focus:ring-2 focus:ring-[#FCA311]/25"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-[#14213D] dark:text-[#E5E5E5]"
                >
                  Tell me a bit more
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share what you're working on, what you need help with, or what you'd like to talk about..."
                  className="mt-1.5 w-full rounded-lg border border-[#d4d4d4] dark:border-[#1f325c] bg-[#f5f5f5] dark:bg-[#000000] px-3.5 py-2.5 text-sm text-[#000000] dark:text-[#FFFFFF] placeholder:text-[#525d73]/75 dark:placeholder:text-[#b6c0d4]/60 focus:border-[#FCA311] focus:outline-none focus:ring-2 focus:ring-[#FCA311]/25"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#FCA311] px-6 py-2.5 text-sm font-semibold text-[#000000] transition-colors hover:bg-[#fdb63b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA311]"
                >
                  <Send className="h-4 w-4" />
                  <span>Send via Email App</span>
                </button>

                {composedNotice && (
                  <p className="text-xs font-medium text-[#b46900] dark:text-[#FCA311]">
                    Opening your email app with this message…
                  </p>
                )}
              </div>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
