import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper.jsx'
import RevealOnScroll from '../components/RevealOnScroll.jsx'
import StitchDivider from '../components/StitchDivider.jsx'

const process = [
  {
    step: 'Cutting',
    detail: 'Neoprene, cotton and elastic panels are cut to pattern from raw rolls of material.',
  },
  {
    step: 'Stitching',
    detail: 'Reinforced double seams and strap points are stitched in-house, not outsourced.',
  },
  {
    step: 'Quality Check',
    detail: 'Every batch is checked for stitch strength, compression and size accuracy.',
  },
  {
    step: 'Packaging & Dispatch',
    detail: 'Sorted by size and order, then packed for retail counters or bulk shipment.',
  },
]

const values = [
  {
    title: 'Manufacturer first',
    body: 'We build the products we sell. That means fewer middlemen, tighter quality control, and pricing that holds up at wholesale volume.',
  },
  {
    title: 'Retail & wholesale',
    body: 'Walk-in customers get the same product quality as our bulk buyers — hospitals, pharmacies and medical stores across Pakistan.',
  },
  {
    title: 'Built for daily wear',
    body: 'Braces and belts are only useful if people actually wear them. We fit, stitch and finish for comfort over long hours, not just a shelf photo.',
  },
]

export default function About() {
  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-16">
        <RevealOnScroll>
          <p className="eyebrow mb-4">Manufacturing</p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink max-w-2xl leading-[1.1]">
            From raw material to retail shelf — under one roof.
          </h1>
          <p className="mt-6 text-steel-dark text-lg max-w-2xl">
            J-Kare Surgical Store isn't just a counter you buy from — it's a
            small manufacturing floor in Karachi where orthopedic supports
            are cut, stitched and checked before they ever reach a customer
            or a wholesale order.
          </p>
        </RevealOnScroll>
      </section>

      <StitchDivider className="max-w-6xl mx-auto px-6 lg:px-8 text-steel-light" />

      {/* PROCESS TIMELINE — genuinely ordered, so numbering earns its place here */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <RevealOnScroll>
          <p className="eyebrow mb-3">The process</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink max-w-xl">
            Four stages, every single batch.
          </h2>
        </RevealOnScroll>

        <div className="mt-14 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-steel-light" />
          <div className="grid md:grid-cols-4 gap-10 md:gap-6">
            {process.map((p, i) => (
              <RevealOnScroll key={p.step} delay={i * 0.12} className="relative">
                <div className="flex md:flex-col items-start md:items-start gap-4 md:gap-6">
                  <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-ink text-bandage flex items-center justify-center font-mono text-sm">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-ink mb-1.5">
                      {p.step}
                    </h3>
                    <p className="text-sm text-steel-dark leading-relaxed max-w-[220px]">
                      {p.detail}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-ink text-bandage">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <RevealOnScroll>
            <p className="eyebrow text-teal-light mb-3">What guides us</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl max-w-xl">
              A small factory's priorities, stated plainly.
            </h2>
          </RevealOnScroll>

          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 0.1}>
                <h3 className="font-display font-semibold text-xl mb-3 text-bandage">
                  {v.title}
                </h3>
                <p className="text-steel-light text-[15px] leading-relaxed">{v.body}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY NOTE / PLACEHOLDER IMAGERY STRIP */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <RevealOnScroll>
          <p className="eyebrow mb-3">On the floor</p>
          <h2 className="font-display font-semibold text-3xl text-ink max-w-xl mb-10">
            Swap these in for real photos of your workshop and team.
          </h2>
        </RevealOnScroll>
        <div className="grid sm:grid-cols-3 gap-6">
          {['Cutting table', 'Stitching line', 'Finished goods'].map((label, i) => (
            <RevealOnScroll key={label} delay={i * 0.08}>
              <div className="aspect-[4/5] rounded-2xl bg-steel-light/30 border border-dashed border-steel flex items-center justify-center">
                <span className="font-mono text-xs tracking-wide uppercase text-steel-dark text-center px-6">
                  {label}
                  <br />photo placeholder
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
