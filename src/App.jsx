import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    // bypass the global `scroll-behavior: smooth` so this jump is instant —
    // otherwise the animated scroll gets cut short by the route's own
    // enter/exit transition and the new page never quite reaches the top
    const root = document.documentElement
    const prevBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'

    // On touch devices a fling scroll keeps decelerating for a couple
    // hundred ms after the finger lifts. If a nav tap lands mid-fling, that
    // residual momentum overrides a single scrollTo(0,0) a few frames
    // later, leaving the new page scrolled partway down. Re-assert the top
    // position every frame for a short window so it wins against it.
    let rafId
    const start = performance.now()
    const pinToTop = (now) => {
      window.scrollTo(0, 0)
      if (now - start < 400) {
        rafId = requestAnimationFrame(pinToTop)
      } else {
        root.style.scrollBehavior = prevBehavior
      }
    }
    rafId = requestAnimationFrame(pinToTop)

    return () => {
      cancelAnimationFrame(rafId)
      root.style.scrollBehavior = prevBehavior
    }
  }, [pathname, search])

  return null
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
