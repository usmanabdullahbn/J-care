import {
  Stethoscope,
  Bone,
  Footprints,
  Hand,
  Thermometer,
  Syringe,
  Shirt,
  ShieldCheck,
  Truck,
  TrendingUp,
} from 'lucide-react'
import PageWrapper from '../components/PageWrapper.jsx'
import RevealOnScroll from '../components/RevealOnScroll.jsx'
import StitchDivider from '../components/StitchDivider.jsx'

const whatWeDo = [
  { icon: Stethoscope, label: 'Cervical Collars' },
  { icon: Bone, label: 'Back & Waist Belts' },
  { icon: Footprints, label: 'Knee Supports' },
  { icon: Hand, label: 'Wrist & Hand Supports' },
  { icon: Thermometer, label: 'Recovery Aids' },
  { icon: Syringe, label: 'Medical Devices' },
  { icon: Shirt, label: 'Surgical Wear' },
]

const approach = [
  {
    icon: ShieldCheck,
    title: 'Consistent Quality',
    body: 'Every product is designed, stitched and quality-checked in-house at our own facility.',
  },
  {
    icon: Truck,
    title: 'Reliable Supply',
    body: 'Dependable delivery at any order size — from a single retail counter to a wholesale pallet.',
  },
  {
    icon: TrendingUp,
    title: 'Continued Growth',
    body: 'Expanding steadily, locally and internationally, without losing sight of quality.',
  },
]

export default function About() {
  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-16">
        <RevealOnScroll>
          <p className="eyebrow mb-4">Who we are</p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink max-w-2xl leading-[1.1]">
            About J-Kare
          </h1>
          <p className="mt-6 text-steel-dark text-lg max-w-2xl">
            J-Kare Surgical is a Karachi-based manufacturer of medical,
            orthopedic, and surgical products, supplying distributors,
            pharmacies, medical stores, and hospitals across Pakistan — with
            a growing export presence in African markets including Nigeria
            and Tanzania.
          </p>
        </RevealOnScroll>
      </section>

      <StitchDivider className="max-w-6xl mx-auto px-6 lg:px-8 text-steel-light" />

      {/* WHAT WE DO */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-14">
        <RevealOnScroll>
          <p className="eyebrow mb-3">What We Do</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink max-w-md">
            A focused range, manufactured under one roof.
          </h2>
          <p className="mt-5 text-steel-dark leading-relaxed max-w-md">
            We supply a wide range of medical and orthopedic products
            tailored to the demanding environments of modern healthcare
            facilities, including:
          </p>

          <div className="mt-8 rounded-2xl bg-ink text-paper px-6 py-6 flex items-start gap-4">
            <ShieldCheck size={22} className="text-orange-light shrink-0 mt-0.5" />
            <p className="text-sm text-steel-light leading-relaxed">
              We're a manufacturer first. Every product — from orthopedic
              braces and support belts to circumcision devices, surgical
              gowns, and first aid supplies — is designed, stitched, and
              quality-checked in-house at our own facility.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 gap-4 content-start">
          {whatWeDo.map((item, i) => {
            const Icon = item.icon
            return (
              <RevealOnScroll key={item.label} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded-xl border border-steel-light bg-card/60 px-5 py-4 hover:border-orange transition-colors">
                  <Icon size={18} className="text-orange shrink-0" />
                  <span className="text-sm font-medium text-ink">{item.label}</span>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-card/60 border-y border-steel-light">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <RevealOnScroll>
            <p className="eyebrow mb-3">Our Approach</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink max-w-xl">
              What we aim for.
            </h2>
            <p className="mt-5 text-steel-dark leading-relaxed max-w-xl">
              Consistent quality across every product, reliable supply at
              any order size, and continued growth — locally and
              internationally.
            </p>
          </RevealOnScroll>

          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {approach.map((a, i) => {
              const Icon = a.icon
              return (
                <RevealOnScroll key={a.title} delay={i * 0.1}>
                  <Icon size={22} className="text-orange mb-4" />
                  <h3 className="font-display font-semibold text-xl mb-2 text-ink">
                    {a.title}
                  </h3>
                  <p className="text-steel-dark text-[15px] leading-relaxed">{a.body}</p>
                </RevealOnScroll>
              )
            })}
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
