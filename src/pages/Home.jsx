import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Factory, Truck, Boxes } from 'lucide-react'
import PageWrapper from '../components/PageWrapper.jsx'
import RevealOnScroll from '../components/RevealOnScroll.jsx'
import StitchDivider from '../components/StitchDivider.jsx'
import Marquee from '../components/Marquee.jsx'
import BraceDiagram from '../components/BraceDiagram.jsx'

const categories = [
  {
    name: 'Knee Braces',
    spec: 'Hinged & compression-fit',
    desc: 'Support for ligament recovery, arthritis and daily joint strain.',
  },
  {
    name: 'Back & Lumbar Belts',
    spec: 'Adjustable compression',
    desc: 'Posture correction and lower-back support for work and recovery.',
  },
  {
    name: 'Cervical Collars',
    spec: 'Foam & rigid options',
    desc: 'Neck immobilization for post-injury and post-operative care.',
  },
  {
    name: 'Ankle & Wrist Supports',
    spec: 'Breathable elastic weave',
    desc: 'Sprain protection and stabilization for active recovery.',
  },
]

const specs = [
  { label: 'MATERIAL', value: 'Medical-grade neoprene, cotton & elastic weave' },
  { label: 'STITCHING', value: 'Reinforced double-stitched seams, in-house QC' },
  { label: 'COMPRESSION', value: 'Mild · Moderate · Firm — matched to use case' },
  { label: 'SIZE RANGE', value: 'S / M / L / XL, custom sizing on bulk orders' },
]

export default function Home() {
  return (
    <PageWrapper>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-14 pb-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            Manufacturer &amp; Retailer — Karachi, Pakistan
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] text-ink"
          >
            Orthopedic supports,
            <br />
            engineered to hold up.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-steel-dark text-lg max-w-md"
          >
            J-Kare Surgical designs, stitches and quality-checks braces,
            belts and mobility supports in-house — then sells them retail
            and wholesale, cash on delivery, across Pakistan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <NavLink
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 font-mono text-xs tracking-wide uppercase text-bandage hover:bg-teal-dark transition-colors"
            >
              View Products
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 font-mono text-xs tracking-wide uppercase text-ink hover:border-ink transition-colors"
            >
              Wholesale Inquiry
            </NavLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="animate-floatSlow"
        >
          <BraceDiagram />
        </motion.div>
      </section>

      <Marquee
        items={[
          'Manufacturer',
          'Wholesale Pricing',
          'Retail Store',
          'Cash on Delivery',
          'Bulk Orders',
          'Custom Sizing',
        ]}
      />

      {/* CATEGORY GRID */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <RevealOnScroll>
          <p className="eyebrow mb-3">What we make</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink max-w-xl">
            A focused range, built for daily wear and real recovery.
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <RevealOnScroll key={cat.name} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-steel-light bg-white/60 p-7 hover:border-teal hover:shadow-lg hover:shadow-teal/5 hover:-translate-y-1 transition-all duration-300">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-amber mb-3">
                  {cat.spec}
                </p>
                <h3 className="font-display font-semibold text-xl text-ink mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-steel-dark leading-relaxed">{cat.desc}</p>
                <StitchDivider className="mt-6 mb-0 text-steel-light group-hover:text-teal-light transition-colors" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* MANUFACTURING SPEC STRIP */}
      <section className="bg-ink text-bandage">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <RevealOnScroll>
            <p className="eyebrow text-teal-light mb-3">Why buy from a manufacturer</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl max-w-xl">
              Every piece is made in-house — so quality and pricing stay in our control.
            </h2>
          </RevealOnScroll>

          <div className="mt-14 grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {specs.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 0.08}>
                <div className="border-b border-steel-dark/50 pb-5">
                  <p className="font-mono text-xs tracking-[0.15em] text-teal-light mb-2">
                    {s.label}
                  </p>
                  <p className="text-steel-light text-[15px]">{s.value}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.2} className="mt-14 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <Factory size={20} className="text-teal-light" />
              <span className="text-sm text-steel-light">In-house manufacturing</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-teal-light" />
              <span className="text-sm text-steel-light">Quality-checked stitching</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck size={20} className="text-teal-light" />
              <span className="text-sm text-steel-light">Cash on delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <Boxes size={20} className="text-teal-light" />
              <span className="text-sm text-steel-light">Wholesale &amp; bulk orders</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <RevealOnScroll className="rounded-3xl bg-teal/5 border border-teal/20 px-8 sm:px-14 py-14 text-center">
          <p className="eyebrow mb-4">Ordering in bulk?</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink max-w-2xl mx-auto">
            Get factory-direct pricing on braces, belts and supports.
          </h2>
          <NavLink
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 font-mono text-xs tracking-wide uppercase text-bandage hover:bg-teal-dark transition-colors"
          >
            Talk to us
            <ArrowRight size={15} />
          </NavLink>
        </RevealOnScroll>
      </section>
    </PageWrapper>
  )
}
