import { motion } from 'framer-motion'

// Signature element: a technical "spec sheet" style line drawing of a knee
// support, annotated like a manufacturing pattern (measurement ticks, size
// range, compression callout). It draws itself in on load, echoing how a
// pattern is stitched together on the factory floor.
export default function BraceDiagram() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i = 1) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.15, type: 'spring', duration: 1.8, bounce: 0 },
        opacity: { delay: i * 0.15, duration: 0.3 },
      },
    }),
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 360 420"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* leg silhouette guide */}
        <motion.path
          d="M150 20 C140 60 145 100 140 140 C135 180 125 210 128 250 C130 290 120 330 122 380"
          stroke="#E7E1D8"
          strokeWidth="1.5"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={draw}
        />
        <motion.path
          d="M210 20 C222 60 218 100 224 140 C230 180 240 210 236 250 C234 290 244 330 240 380"
          stroke="#E7E1D8"
          strokeWidth="1.5"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={draw}
        />

        {/* brace band - main structure */}
        <motion.rect
          x="115"
          y="150"
          width="135"
          height="90"
          rx="18"
          stroke="#EE5A28"
          strokeWidth="3"
          initial="hidden"
          animate="visible"
          custom={0.6}
          variants={draw}
        />

        {/* stitch lines across the brace */}
        {[168, 186, 204, 222].map((y, i) => (
          <motion.line
            key={y}
            x1="122"
            y1={y}
            x2="243"
            y2={y}
            stroke="#C8451B"
            strokeWidth="2"
            strokeDasharray="6 6"
            initial="hidden"
            animate="visible"
            custom={1 + i * 0.1}
            variants={draw}
          />
        ))}

        {/* side straps */}
        <motion.path
          d="M108 165 C95 175 95 215 108 225"
          stroke="#EE5A28"
          strokeWidth="3"
          initial="hidden"
          animate="visible"
          custom={1.3}
          variants={draw}
        />
        <motion.path
          d="M257 165 C270 175 270 215 257 225"
          stroke="#EE5A28"
          strokeWidth="3"
          initial="hidden"
          animate="visible"
          custom={1.3}
          variants={draw}
        />

        {/* measurement ticks + labels, spec-sheet style */}
        <motion.line
          x1="115" y1="270" x2="250" y2="270"
          stroke="#5A5650" strokeWidth="1"
          initial="hidden" animate="visible" custom={1.7} variants={draw}
        />
        <motion.line x1="115" y1="264" x2="115" y2="276" stroke="#5A5650" strokeWidth="1"
          initial="hidden" animate="visible" custom={1.7} variants={draw} />
        <motion.line x1="250" y1="264" x2="250" y2="276" stroke="#5A5650" strokeWidth="1"
          initial="hidden" animate="visible" custom={1.7} variants={draw} />

        <motion.text
          x="182" y="290"
          textAnchor="middle"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="11"
          fill="#5A5650"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          FIT RANGE — S / M / L / XL
        </motion.text>

        <motion.text
          x="182" y="130"
          textAnchor="middle"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="11"
          fill="#EE5A28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.5 }}
        >
          COMPRESSION-FIT SUPPORT
        </motion.text>
      </svg>
    </div>
  )
}
