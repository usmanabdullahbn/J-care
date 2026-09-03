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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { delay: i * 0.15, duration: 0.4 },
    }),
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 360 380"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* faint blueprint grid */}
        <defs>
          <pattern id="brace-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#E4E1DC" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="360" height="380" fill="url(#brace-grid)" opacity="0.6" />

        {/* corner registration marks */}
        {[
          [16, 16, 16, 30, 30, 16],
          [344, 16, 344, 30, 330, 16],
          [16, 364, 16, 350, 30, 364],
          [344, 364, 344, 350, 330, 364],
        ].map(([x1, y1, x2, y2, x3, y3], i) => (
          <motion.path
            key={i}
            d={`M${x2} ${y2} L${x1} ${y1} L${x3} ${y3}`}
            stroke="#8B8F94"
            strokeWidth="1"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeIn}
          />
        ))}

        {/* leg silhouette guide */}
        <motion.path
          d="M150 8 C140 48 145 88 140 128 C135 168 125 198 128 238 C130 278 120 318 122 358"
          stroke="#C7CDD1"
          strokeWidth="1.5"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={draw}
        />
        <motion.path
          d="M210 8 C222 48 218 88 224 128 C230 168 240 198 236 238 C234 278 244 318 240 358"
          stroke="#C7CDD1"
          strokeWidth="1.5"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={draw}
        />

        <motion.text
          x="182" y="30"
          textAnchor="middle"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="11"
          letterSpacing="0.15em"
          fill="#EE5A28"
          initial="hidden"
          animate="visible"
          custom={1.9}
          variants={fadeIn}
        >
          COMPRESSION-FIT SUPPORT
        </motion.text>
        <motion.line
          x1="130" y1="40" x2="234" y2="40"
          stroke="#EE5A28" strokeWidth="1" strokeDasharray="2 4"
          initial="hidden" animate="visible" custom={2} variants={fadeIn}
        />

        {/* brace band - main structure */}
        <motion.rect
          x="115"
          y="140"
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

        {/* patella cut-out */}
        <motion.circle
          cx="182" cy="185" r="17"
          stroke="#EE5A28"
          strokeWidth="1.5"
          strokeDasharray="3 4"
          initial="hidden"
          animate="visible"
          custom={1.6}
          variants={draw}
        />

        {/* stitch lines across the brace */}
        {[153, 168, 202, 217].map((y, i) => (
          <motion.line
            key={y}
            x1="122"
            y1={y}
            x2="243"
            y2={y}
            stroke="#C8451B"
            strokeWidth="1.5"
            strokeDasharray="2 4"
            strokeLinecap="round"
            initial="hidden"
            animate="visible"
            custom={1 + i * 0.1}
            variants={draw}
          />
        ))}

        {/* side straps */}
        <motion.path
          d="M108 155 C95 165 95 205 108 215"
          stroke="#EE5A28"
          strokeWidth="3"
          strokeLinecap="round"
          initial="hidden"
          animate="visible"
          custom={1.3}
          variants={draw}
        />
        <motion.path
          d="M257 155 C270 165 270 205 257 215"
          stroke="#EE5A28"
          strokeWidth="3"
          strokeLinecap="round"
          initial="hidden"
          animate="visible"
          custom={1.3}
          variants={draw}
        />

        {/* measurement ticks + labels, spec-sheet style */}
        <motion.line
          x1="115" y1="256" x2="250" y2="256"
          stroke="#57595C" strokeWidth="1"
          initial="hidden" animate="visible" custom={1.7} variants={draw}
        />
        <motion.line x1="115" y1="250" x2="115" y2="262" stroke="#57595C" strokeWidth="1"
          initial="hidden" animate="visible" custom={1.7} variants={draw} />
        <motion.line x1="250" y1="250" x2="250" y2="262" stroke="#57595C" strokeWidth="1"
          initial="hidden" animate="visible" custom={1.7} variants={draw} />

        <motion.text
          x="182" y="276"
          textAnchor="middle"
          fontFamily="IBM Plex Mono, monospace"
          fontSize="11"
          letterSpacing="0.04em"
          fill="#57595C"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeIn}
        >
          FIT RANGE — S / M / L / XL
        </motion.text>
      </svg>
    </div>
  )
}
