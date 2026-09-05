import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import PageWrapper from '../components/PageWrapper.jsx'
import RevealOnScroll from '../components/RevealOnScroll.jsx'
import StitchDivider from '../components/StitchDivider.jsx'
import ProductModal from '../components/ProductModal.jsx'

import pb01 from '../assets/products/pb01-plastibell-circumcision-device.jpg'
import cc01 from '../assets/products/cc01-soft-cervical-collar.jpg'
import cc02 from '../assets/products/cc02-hard-cervical-collar.jpg'
import aps01 from '../assets/products/aps01-shoulder-polysling.jpg'
import sw01 from '../assets/products/sw01-slim-waist-belt.jpg'
import sb02 from '../assets/products/sb02-lumbar-spine-belt.jpg'
import sl03 from '../assets/products/sl03-spinal-lumbo-sacral.jpg'
import kp02 from '../assets/products/kp02-patella-knee-support.jpg'
import kph01 from '../assets/products/kph01-hinged-knee-brace.jpg'
import ts01 from '../assets/products/ts01-thumb-spica-splint.jpg'
import ws02 from '../assets/products/ws02-wrist-splint.jpg'
import ps01 from '../assets/products/ps01-posture-support.jpg'
import hc01 from '../assets/products/hc01-hot-cold-gel-pack.jpg'
import ofE2 from '../assets/products/of-e2-elbow-support.jpg'
import ofA3 from '../assets/products/of-a3-ankle-support.jpg'
import ofK4 from '../assets/products/of-k4-knee-support.jpg'
import ofW1 from '../assets/products/of-w1-wrist-support.jpg'
import sg01 from '../assets/products/sg01-disposable-surgical-gown.jpg'

const filters = [
  'All',
  'Circumcision Devices',
  'Collars',
  'Back & Waist Belts',
  'Knee Supports',
  'Wrist & Hand',
  'Compression Sleeves',
  'Recovery Aids',
  'Surgical Wear',
]

const products = [
  {
    code: 'JK-PB01',
    name: 'PlastiBell Circumcision Device',
    category: 'Circumcision Devices',
    material: 'Medical-grade plastic',
    sizes: '1.1 – 1.9 cm, 9 sizes',
    compression: 'Sterile, single-use',
    image: pb01,
    fit: 'contain',
  },
  {
    code: 'JK-CC01',
    name: 'Soft Cervical Collar',
    category: 'Collars',
    material: 'Foam, soft cotton cover',
    sizes: 'S / M / L / XL',
    compression: 'Soft support',
    image: cc01,
  },
  {
    code: 'JK-CC02',
    name: 'Economy Hard Cervical Collar',
    category: 'Collars',
    material: 'Rigid shell + foam lining',
    sizes: 'S / M / L / XL',
    compression: 'Rigid support',
    image: cc02,
  },
  {
    code: 'JK-APS01',
    name: 'Advance Polysling — Shoulder Immobiliser',
    category: 'Back & Waist Belts',
    material: 'Cotton canvas, buckle + velcro',
    sizes: 'Child / Adult',
    compression: 'Height adjustable',
    image: aps01,
  },
  {
    code: 'JK-SW01',
    name: 'Abdominal Slim Waist Belt',
    category: 'Back & Waist Belts',
    material: 'Breathable elastic weave',
    sizes: 'S / M / L / XL / XXL',
    compression: 'Adjustable',
    image: sw01,
  },
  {
    code: 'JK-B-SB02',
    name: 'Ultra Lumbar Spine Back Support Belt',
    category: 'Back & Waist Belts',
    material: 'Neoprene + cushion pads',
    sizes: 'S / M / L / XL / XXL',
    compression: 'Firm',
    image: sb02,
  },
  {
    code: 'JK-B-SL03',
    name: 'Sacral Support Spinal Lumbo',
    category: 'Back & Waist Belts',
    material: 'Elastic + dual plastic bars',
    sizes: 'S / M / L / XL / XXL',
    compression: 'Firm',
    image: sl03,
  },
  {
    code: 'JK-PS01',
    name: 'Energizing Posture Alignment Support',
    category: 'Back & Waist Belts',
    material: 'Breathable mesh + rigid stays',
    sizes: 'S / M / L / XL / XXL',
    compression: 'Adjustable',
    image: ps01,
  },
  {
    code: 'JK-KP02',
    name: 'Patella Assisted Knee Support',
    category: 'Knee Supports',
    material: '5mm neoprene, patella cut-out',
    sizes: 'S / M / L / XL / XXL',
    compression: 'Moderate',
    image: kp02,
  },
  {
    code: 'JK-KPH01',
    name: 'Patella Assisted Hinged Knee Brace',
    category: 'Knee Supports',
    material: '5mm neoprene + metal hinge',
    sizes: 'S / M / L / XL / XXL',
    compression: 'Firm',
    image: kph01,
  },
  {
    code: 'JK-TS01',
    name: 'Thumb Spica Splint',
    category: 'Wrist & Hand',
    material: 'Metal splint, breathable fabric',
    sizes: 'S / M / L / XL / XXL',
    compression: 'Firm',
    image: ts01,
  },
  {
    code: 'JK-WS02',
    name: 'Professional Neoprene Wrist Splint',
    category: 'Wrist & Hand',
    material: 'Neoprene, dual stabilizers',
    sizes: 'S / M / L / XL / XXL',
    compression: 'Firm',
    image: ws02,
  },
  {
    code: 'JK-HC01',
    name: 'Hot & Cold Therapy Gel Pack',
    category: 'Recovery Aids',
    material: 'Reusable gel, microwaveable',
    sizes: 'One size',
    compression: '—',
    image: hc01,
  },
  {
    code: 'JK-OF-E2',
    name: 'Ortho Fast Elbow Support',
    category: 'Compression Sleeves',
    material: 'Elastic knit weave',
    sizes: 'One size',
    compression: 'Light–Moderate',
    image: ofE2,
  },
  {
    code: 'JK-OF-A3',
    name: 'Ortho Fast Ankle Support',
    category: 'Compression Sleeves',
    material: 'Elastic knit weave',
    sizes: 'One size',
    compression: 'Light–Moderate',
    image: ofA3,
  },
  {
    code: 'JK-OF-K4',
    name: 'Ortho Fast Knee Support',
    category: 'Compression Sleeves',
    material: 'Elastic knit weave',
    sizes: 'One size',
    compression: 'Light–Moderate',
    image: ofK4,
  },
  {
    code: 'JK-OF-W1',
    name: 'Ortho Fast Wrist Support',
    category: 'Compression Sleeves',
    material: 'Elastic knit weave',
    sizes: 'One size',
    compression: 'Light–Moderate',
    image: ofW1,
  },
  {
    code: 'JK-SG01',
    name: 'Disposable Surgical Gown',
    category: 'Surgical Wear',
    material: 'Non-woven SMS fabric, knit cuffs',
    sizes: 'Free size',
    compression: 'Sterile, single-use',
    image: sg01,
  },
]

export default function Products() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const visible =
    active === 'All' ? products : products.filter((p) => p.category === active)

  useEffect(() => {
    if (!selected) return
    const onKeyDown = (e) => e.key === 'Escape' && setSelected(null)
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [selected])

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
            manufactured or distributed by J-Kare. Tap a category to filter,
            or message us for a full price list.
          </p>
        </RevealOnScroll>

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2.5 font-mono text-xs tracking-wide uppercase transition-colors ${
                active === f
                  ? 'bg-ink text-paper'
                  : 'bg-card/60 text-steel-dark border border-steel-light hover:border-ink hover:text-ink'
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
              key={p.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              onClick={() => setSelected(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(p)}
              className="group cursor-pointer rounded-2xl border border-steel-light bg-card/60 overflow-hidden hover:border-orange hover:shadow-lg hover:shadow-orange/5 transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden bg-steel-light/10">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className={`w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ${
                    p.fit === 'contain' ? 'object-contain p-4' : 'object-cover object-top'
                  }`}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-rust">
                    {p.category}
                  </p>
                  <p className="font-mono text-[10px] tracking-wide text-steel">
                    {p.code}
                  </p>
                </div>
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
                  onClick={(e) => e.stopPropagation()}
                  className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-wide uppercase text-orange hover:text-orange-dark transition-colors"
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

      <AnimatePresence>
        {selected && (
          <ProductModal product={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}
