import { NavLink } from 'react-router-dom'
import { Facebook, Phone, Mail, MapPin } from 'lucide-react'
import StitchDivider from './StitchDivider.jsx'

export default function Footer() {
  return (
    <footer className="bg-ink text-bandage">
      <StitchDivider className="text-teal-light/30" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-9 rounded-full bg-bandage flex items-center justify-center">
              <span className="font-display font-bold text-ink text-xs">JK</span>
            </span>
            <span className="font-display font-semibold text-lg">J-Kare Surgical</span>
          </div>
          <p className="text-sm text-steel-light max-w-xs">
            Orthopedic braces, belts and mobility supports — designed, stitched
            and quality-checked in Karachi. Retail and wholesale.
          </p>
        </div>

        <div>
          <p className="eyebrow text-teal-light mb-4">Navigate</p>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="hover:text-teal-light transition-colors">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-teal-light transition-colors">Manufacturing</NavLink></li>
            <li><NavLink to="/products" className="hover:text-teal-light transition-colors">Products</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-teal-light transition-colors">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-teal-light mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-steel-light">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-teal-light shrink-0" />
              +92 000 0000000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-teal-light shrink-0" />
              info@jkaresurgical.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-teal-light shrink-0 mt-0.5" />
              Karachi, Sindh, Pakistan
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-teal-light mb-4">Follow</p>
          <a
            href="https://www.facebook.com/J.karesurgical/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-steel-light hover:text-teal-light transition-colors"
          >
            <Facebook size={16} />
            J-Kare Surgical Store
          </a>
        </div>
      </div>

      <div className="border-t border-steel-dark/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-steel-light font-mono">
          <span>&copy; {new Date().getFullYear()} J-Kare Surgical. All rights reserved.</span>
          <span>Manufactured &amp; sold from Karachi, Pakistan</span>
        </div>
      </div>
    </footer>
  )
}
