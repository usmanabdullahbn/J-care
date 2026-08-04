import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Manufacturing' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bandage/90 backdrop-blur-md shadow-sm'
          : 'bg-bandage/0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center gap-3 group">
          <span className="relative w-10 h-10 rounded-full bg-ink flex items-center justify-center overflow-hidden">
            <span className="font-display font-bold text-bandage text-sm tracking-tight">JK</span>
            <span className="absolute inset-0 rounded-full ring-1 ring-teal-light/50 group-hover:ring-2 transition-all" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display font-semibold text-lg tracking-tight text-ink">J-Kare</span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal">Surgical</span>
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative font-mono text-xs tracking-[0.12em] uppercase pb-1 transition-colors ${
                  isActive ? 'text-ink' : 'text-steel-dark hover:text-ink'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-amber"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+920000000000"
            className="flex items-center gap-2 font-mono text-xs tracking-wide text-steel-dark hover:text-teal transition-colors"
          >
            <Phone size={14} />
            +92 000 0000000
          </a>
          <NavLink
            to="/contact"
            className="rounded-full bg-teal px-5 py-2.5 font-mono text-xs tracking-wide uppercase text-bandage hover:bg-teal-dark transition-colors"
          >
            Wholesale Inquiry
          </NavLink>
        </div>

        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-bandage border-t border-steel-light/60"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-mono text-sm tracking-wide uppercase ${
                      isActive ? 'text-teal' : 'text-ink'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-teal px-5 py-3 text-center font-mono text-xs tracking-wide uppercase text-bandage"
              >
                Wholesale Inquiry
              </NavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
