import { motion } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'
import StitchDivider from './StitchDivider.jsx'

// Product detail modal: photo on one side, full spec sheet on the other.
// Opened from a product card in the catalogue grid.
export default function ProductModal({ product, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-steel-light bg-card shadow-2xl grid sm:grid-cols-2"
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 rounded-full bg-paper/90 border border-steel-light p-2 text-ink hover:border-orange hover:text-orange transition-colors"
        >
          <X size={18} />
        </button>

        <div className="aspect-square sm:aspect-auto overflow-hidden bg-steel-light/10">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full ${
              product.fit === 'contain' ? 'object-contain p-6' : 'object-cover object-top'
            }`}
          />
        </div>

        <div className="p-7 sm:p-8 flex flex-col">
          <div className="flex items-center justify-between gap-3 mb-2 pr-10">
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-rust">
              {product.category}
            </p>
            <p className="font-mono text-[10px] tracking-wide text-steel">
              {product.code}
            </p>
          </div>

          <h2 className="font-display font-semibold text-2xl text-ink mb-5 pr-8">
            {product.name}
          </h2>

          <StitchDivider className="mb-5 text-steel-light" />

          <dl className="space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="font-mono uppercase tracking-wide text-steel">Material</dt>
              <dd className="text-ink text-right">{product.material}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="font-mono uppercase tracking-wide text-steel">Sizes</dt>
              <dd className="text-ink text-right">{product.sizes}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="font-mono uppercase tracking-wide text-steel">Compression</dt>
              <dd className="text-ink text-right">{product.compression}</dd>
            </div>
          </dl>

          <a
            href="https://wa.me/920000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 font-mono text-xs tracking-wide uppercase text-paper hover:bg-orange-dark transition-colors"
          >
            <MessageCircle size={14} />
            Wholesale inquiry
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
