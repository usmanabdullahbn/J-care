import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import PageWrapper from '../components/PageWrapper.jsx'
import RevealOnScroll from '../components/RevealOnScroll.jsx'
import StitchDivider from '../components/StitchDivider.jsx'

const filters = ['All', 'Braces & Supports', 'Belts', 'Collars', 'Mobility Aids']

const products = [
  {
    name: 'Hinged Knee Brace',
    category: 'Braces & Supports',
    material: 'Neoprene + steel hinge',
    sizes: 'S / M / L / XL',
    compression: 'Firm',
  },
  {
    name: 'Compression Knee Sleeve',
    category: 'Braces & Supports',
    material: 'Elastic knit weave',
    sizes: 'S / M / L / XL',
    compression: 'Moderate',
  },
  {
    name: 'Lumbar Back Support Belt',
    category: 'Belts',
    material: 'Cotton + elastic panel',
    sizes: 'M / L / XL / XXL',
    compression: 'Adjustable',
  },
  {
    name: 'Abdominal Support Belt',
    category: 'Belts',
    material: 'Breathable elastic weave',
    sizes: 'S / M / L / XL',
    compression: 'Mild–Moderate',
  },
  {
    name: 'Rigid Cervical Collar',
    category: 'Collars',
    material: 'Medical-grade foam + rigid shell',
    sizes: 'S / M / L',
    compression: 'Fixed',
  },
  {
    name: 'Soft Foam Neck Collar',
    category: 'Collars',
    material: 'Soft foam, cotton cover',
    sizes: 'One size, adjustable',
    compression: 'Mild',
  },
  {
    name: 'Ankle Support Wrap',
    category: 'Braces & Supports',
    material: 'Elastic weave + strap closure',
    sizes: 'S / M / L / XL',
    compression: 'Moderate',
  },
  {
    name: 'Wrist & Thumb Splint',
    category: 'Braces & Supports',
    material: 'Cotton + aluminium stay',
    sizes: 'S / M / L',
    compression: 'Firm',
  },
  {
    name: 'Walking Stick & Folding Cane',
    category: 'Mobility Aids',
    material: 'Aluminium, adjustable height',
    sizes: 'Adjustable',
    compression: '—',
  },
]

export default function Products() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <RevealOnScroll>
          <p className="eyebrow mb-4">Catalogue</p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink max-w-2xl leading-[1.1]">
            Products, with the spec sheet built in.
          </h1>
          <p className="mt-6 text-steel-dark text-lg max-w-2xl">
            Retail quantities or wholesale pallets — every item below is
            manufactured in-house. Tap a category to filter, or message us
            for a full price list.
          </p>
        </RevealOnScroll>

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2.5 font-mono text-xs tracking-wide uppercase transition-colors ${
                active === f
                  ? 'bg-ink text-bandage'
                  : 'bg-white/60 text-steel-dark border border-steel-light hover:border-ink hover:text-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <motion.div
              layout
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group rounded-2xl border border-steel-light bg-white/60 overflow-hidden hover:border-teal hover:shadow-lg hover:shadow-teal/5 transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-steel-light/25 border-b border-dashed border-steel flex items-center justify-center">
                <span className="font-mono text-[11px] tracking-wide uppercase text-steel-dark px-4 text-center">
                  Product photo
                  <br />placeholder
                </span>
              </div>
              <div className="p-6">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-amber mb-2">
                  {p.category}
                </p>
                <h3 className="font-display font-semibold text-lg text-ink mb-4">
                  {p.name}
                </h3>

                <StitchDivider className="mb-4 text-steel-light" />

                <dl className="space-y-1.5 text-[13px]">
                  <div className="flex justify-between gap-4">
                    <dt className="font-mono uppercase tracking-wide text-steel">Material</dt>
                    <dd className="text-ink text-right">{p.material}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-mono uppercase tracking-wide text-steel">Sizes</dt>
                    <dd className="text-ink text-right">{p.sizes}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-mono uppercase tracking-wide text-steel">Compression</dt>
                    <dd className="text-ink text-right">{p.compression}</dd>
                  </div>
                </dl>

                <a
                  href="https://wa.me/920000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-wide uppercase text-teal hover:text-teal-dark transition-colors"
                >
                  <MessageCircle size={14} />
                  Wholesale inquiry
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {visible.length === 0 && (
          <p className="text-steel-dark text-center py-20">
            No products in this category yet.
          </p>
        )}
      </section>
    </PageWrapper>
  )
}
