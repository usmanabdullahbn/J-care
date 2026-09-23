import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Globe,
  Boxes,
  Stethoscope,
  Bone,
  Footprints,
  Hand,
  Thermometer,
  Syringe,
  Shirt,
} from 'lucide-react'
import PageWrapper from '../components/PageWrapper.jsx'
import RevealOnScroll from '../components/RevealOnScroll.jsx'
import Marquee from '../components/Marquee.jsx'

import heroImage from '../assets/hero-image.png'
import pb01 from '../assets/products/pb01-plastibell-circumcision-device.jpg'
import sb02 from '../assets/products/sb02-lumbar-spine-belt.png'
import cc02 from '../assets/products/cc02-hard-cervical-collar.jpg'
import aps01 from '../assets/products/aps01-shoulder-polysling.jpg'

const categories = [
  { icon: Stethoscope, name: 'Cervical Collars', filter: 'Collars' },
  { icon: Bone, name: 'Back & Waist Belts', filter: 'Back & Waist Belts' },
  { icon: Footprints, name: 'Knee Supports', filter: 'Knee Supports' },
  { icon: Hand, name: 'Wrist & Hand Supports', filter: 'Wrist & Hand' },
  { icon: Thermometer, name: 'Recovery Aids', filter: 'Recovery Aids' },
  { icon: Syringe, name: 'Medical Devices', filter: 'Medical Devices' },
  { icon: Shirt, name: 'Surgical Wear', filter: 'Surgical Wear' },
]

const popularProducts = [
  {
    code: 'JK-PB01',
    name: 'Circumcision Device',
    category: 'Medical Devices',
    image: pb01,
    fit: 'contain',
  },
  {
    code: 'JK-B-SB02',
    name: 'Ultra Lumbar Spine Back Support Belt',
    category: 'Back & Waist Belts',
    image: sb02,
  },
  {
    code: 'JK-CC02',
    name: 'Economy Hard Cervical Collar',
    category: 'Collars',
    image: cc02,
  },
  {
    code: 'JK-APS01',
    name: 'Advance Polysling — Shoulder Immobiliser',
    category: 'Back & Waist Belts',
    image: aps01,
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
      <section className="relative overflow-hidden pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="hidden lg:block absolute inset-y-0 right-10 xl:right-16 w-[60%] xl:w-[56%]">
          <motion.img
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            src={heroImage}
            alt="J-Kare product range — braces, belts and supports"
            className="h-full w-full object-cover object-center"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 32%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 32%)',
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl">
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
              Manufacturing medical solutions for businesses worldwide.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-steel-dark text-lg max-w-xl"
            >
              J-Kare Surgical manufactures a diverse range of medical,
              soft orthopedic and healthcare products for distributors and
              businesses across Pakistan and international markets — with
              in-house production, consistent quality, and reliable supply.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <NavLink
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3.5 font-mono text-xs tracking-wide uppercase text-paper hover:bg-orange-dark transition-colors"
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 lg:hidden"
          >
            <img
              src={heroImage}
              alt="J-Kare product range — braces, belts and supports"
              className="w-full rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      <Marquee
        items={[
          'Manufacturer',
          'Wholesale Pricing',
          'Retail Store',
          'International Markets',
          'Bulk Orders',
          'Custom Sizing',
        ]}
      />

      {/* CATEGORY STRIP */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <RevealOnScroll className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-3">What we make</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink max-w-xl">
              One catalog, every category covered.
            </h2>
            <p className="mt-4 text-steel-dark max-w-xl">
              From soft orthopedic braces to surgical wear and medical devices —
              manufactured in-house, ready for retail or wholesale.
            </p>
          </div>
        </RevealOnScroll>

        <div className="flex flex-wrap gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <RevealOnScroll key={cat.name} delay={i * 0.05}>
                <NavLink
                  to={`/products?category=${encodeURIComponent(cat.filter)}`}
                  className="group flex items-center gap-3 rounded-full border border-steel-light bg-card/60 pl-4 pr-5 py-3 hover:border-orange hover:shadow-md hover:shadow-orange/5 transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange/10 text-orange shrink-0">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm font-medium text-ink">{cat.name}</span>
                </NavLink>
              </RevealOnScroll>
            )
          })}
        </div>
      </section>

      {/* MANUFACTURING SPEC STRIP */}
      <section className="bg-ink text-paper">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <RevealOnScroll>
            <p className="eyebrow text-orange-light mb-3">Why buy from a manufacturer</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl max-w-xl">
              Every piece is made in-house — so quality and pricing stay in our control.
            </h2>
          </RevealOnScroll>

          <div className="mt-14 grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {specs.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 0.08}>
                <div className="border-b border-steel-dark/50 pb-5">
                  <p className="font-mono text-xs tracking-[0.15em] text-orange-light mb-2">
                    {s.label}
                  </p>
                  <p className="text-steel-light text-[15px]">{s.value}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.2} className="mt-14 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <Factory size={20} className="text-orange-light" />
              <span className="text-sm text-steel-light">In-house manufacturing</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-orange-light" />
              <span className="text-sm text-steel-light">Quality-checked stitching</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe size={20} className="text-orange-light" />
              <span className="text-sm text-steel-light">International markets</span>
            </div>
            <div className="flex items-center gap-3">
              <Boxes size={20} className="text-orange-light" />
              <span className="text-sm text-steel-light">Wholesale &amp; bulk orders</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-24">
        <RevealOnScroll className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-3">Explore our catalog</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink max-w-xl">
              Our most-ordered braces, belts and supports.
            </h2>
          </div>
          <NavLink
            to="/products"
            className="group hidden sm:inline-flex items-center gap-2 font-mono text-xs tracking-wide uppercase text-orange hover:text-orange-dark transition-colors"
          >
            See more
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </NavLink>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((p, i) => (
            <RevealOnScroll key={p.code} delay={i * 0.08}>
              <NavLink
                to="/products"
                className="group block h-full rounded-2xl border border-steel-light bg-card/60 overflow-hidden hover:border-orange hover:shadow-lg hover:shadow-orange/5 transition-all duration-300"
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
                <div className="p-5">
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-rust mb-2">
                    {p.category}
                  </p>
                  <h3 className="font-display font-semibold text-base text-ink leading-snug">
                    {p.name}
                  </h3>
                </div>
              </NavLink>
            </RevealOnScroll>
          ))}
        </div>

        <NavLink
          to="/products"
          className="group sm:hidden mt-10 flex items-center justify-center gap-2 font-mono text-xs tracking-wide uppercase text-orange hover:text-orange-dark transition-colors"
        >
          See more
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </NavLink>
      </section>
    </PageWrapper>
  )
}
