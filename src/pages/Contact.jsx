import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Clock, Send } from 'lucide-react'
import PageWrapper from '../components/PageWrapper.jsx'
import RevealOnScroll from '../components/RevealOnScroll.jsx'
import StitchDivider from '../components/StitchDivider.jsx'

const info = [
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+92 000 0000000',
    href: 'tel:+920000000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@jkaresurgical.com',
    href: 'mailto:info@jkaresurgical.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Karachi, Sindh, Pakistan',
    href: null,
  },
  {
    icon: Clock,
    label: 'Store Hours',
    value: 'Mon–Sat, 10:00 AM – 8:00 PM',
    href: null,
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // NOTE: no backend wired up yet — connect this to Formspree, EmailJS,
    // or your own API endpoint to actually receive submissions.
    setSent(true)
  }

  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <RevealOnScroll>
          <p className="eyebrow mb-4">Get in touch</p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink max-w-2xl leading-[1.1]">
            Retail order, wholesale quote, or a custom size — let's talk.
          </h1>
        </RevealOnScroll>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-24 grid lg:grid-cols-2 gap-14">
        {/* INFO */}
        <RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-6">
            {info.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="h-full rounded-2xl border border-steel-light bg-white/60 p-6 hover:border-teal transition-colors">
                  <Icon size={20} className="text-teal mb-4" />
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-steel mb-1">
                    {item.label}
                  </p>
                  <p className="text-ink font-medium">{item.value}</p>
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href}>{content}</a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-steel-light bg-white/60 p-6">
            <a
              href="https://www.facebook.com/J.karesurgical/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-ink hover:text-teal transition-colors"
            >
              <Facebook size={20} className="text-teal" />
              <span>
                <span className="block font-medium">J-Kare Surgical Store</span>
                <span className="block text-sm text-steel-dark">Follow for offers &amp; new stock</span>
              </span>
            </a>
          </div>

          <StitchDivider className="my-8 text-steel-light" />

          <div className="rounded-2xl overflow-hidden border border-steel-light aspect-[16/10] bg-steel-light/25 flex items-center justify-center">
            <span className="font-mono text-xs tracking-wide uppercase text-steel-dark text-center px-6">
              Map placeholder — embed your Google Maps location here
            </span>
          </div>
        </RevealOnScroll>

        {/* FORM */}
        <RevealOnScroll delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-steel-light bg-white/60 p-8"
          >
            <h2 className="font-display font-semibold text-2xl text-ink mb-6">
              Send an inquiry
            </h2>

            <div className="space-y-5">
              <div>
                <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-steel">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-lg border border-steel-light bg-white px-4 py-3 text-sm outline-none focus:border-teal transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-steel">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="mt-2 w-full rounded-lg border border-steel-light bg-white px-4 py-3 text-sm outline-none focus:border-teal transition-colors"
                    placeholder="03xx-xxxxxxx"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-steel">
                    Order type
                  </label>
                  <select className="mt-2 w-full rounded-lg border border-steel-light bg-white px-4 py-3 text-sm outline-none focus:border-teal transition-colors">
                    <option>Retail</option>
                    <option>Wholesale</option>
                    <option>Custom sizing</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.15em] uppercase text-steel">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-steel-light bg-white px-4 py-3 text-sm outline-none focus:border-teal transition-colors resize-none"
                  placeholder="Tell us what you need — product, quantity, sizes..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-3.5 font-mono text-xs tracking-wide uppercase text-bandage hover:bg-teal-dark transition-colors"
              >
                <Send size={14} />
                Send inquiry
              </button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-teal-dark font-medium text-center"
                >
                  Thanks — this form isn't connected to an inbox yet. Wire it
                  up to Formspree, EmailJS or your own backend to start
                  receiving these.
                </motion.p>
              )}
            </div>
          </form>
        </RevealOnScroll>
      </section>
    </PageWrapper>
  )
}
