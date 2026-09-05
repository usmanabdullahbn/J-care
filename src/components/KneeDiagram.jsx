import { motion } from 'framer-motion'

// Signature element: a technical, patent-drawing style line illustration of
// a hinged patella-assisted knee support, worn on a bent leg — the wrap
// sleeve, the rigid side stays, the patella window with its tracking ring,
// and the adjustable straps. No callouts, just the product itself, drawn
// in the site's ink/orange line-art style.
export default function KneeDiagram() {
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
        viewBox="0 0 320 480"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* leg, peeking out above and below the sleeve */}
        <motion.path
          d="M140 4 C142 14 144 22 145 30"
          stroke="#E7E1D8" strokeWidth="1.5" strokeLinecap="round"
          initial="hidden" animate="visible" custom={0} variants={draw}
        />
        <motion.path
          d="M195 4 C191 14 186 22 183 30"
          stroke="#E7E1D8" strokeWidth="1.5" strokeLinecap="round"
          initial="hidden" animate="visible" custom={0.05} variants={draw}
        />
        <motion.path
          d="M95 440 C91 452 89 464 88 475"
          stroke="#E7E1D8" strokeWidth="1.5" strokeLinecap="round"
          initial="hidden" animate="visible" custom={0.1} variants={draw}
        />
        <motion.path
          d="M175 440 C172 452 170 464 168 475"
          stroke="#E7E1D8" strokeWidth="1.5" strokeLinecap="round"
          initial="hidden" animate="visible" custom={0.15} variants={draw}
        />

        {/* main wrap sleeve — thigh cuff, patella housing, calf cuff */}
        <motion.path
          d="M116 30
             C116 51.7 120 73.3 120 95
             C120 113.3 116 131.7 116 150
             C116 173.3 88 196.7 88 220
             C88 243.3 104 266.7 104 290
             C104 308.3 98 326.7 98 345
             C98 376.7 82 408.3 82 440
             Q134 460 186 440
             C186 408.3 182 376.7 182 345
             C182 326.7 184 308.3 184 290
             C184 266.7 212 243.3 212 220
             C212 196.7 196 173.3 196 150
             C196 131.7 204 113.3 204 95
             C204 73.3 220 51.7 220 30
             Q168 10 116 30 Z"
          stroke="#EE5A28"
          strokeWidth="3"
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={draw}
        />

        {/* rigid condylar side stays, running the full length */}
        <motion.path
          d="M140 52 C134 108 127 158 121 220 C127 282 132 338 127 412"
          stroke="#141414"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial="hidden"
          animate="visible"
          custom={0.45}
          variants={draw}
        />
        <motion.path
          d="M196 52 C202 108 198 158 195 220 C198 282 194 338 192 412"
          stroke="#141414"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial="hidden"
          animate="visible"
          custom={0.5}
          variants={draw}
        />

        {/* butterfly hinge covers flanking the patella window */}
        <motion.path
          d="M93 190 L124 220 L93 250 Z"
          stroke="#141414"
          strokeWidth="1.5"
          initial="hidden"
          animate="visible"
          custom={0.75}
          variants={draw}
        />
        <motion.path
          d="M207 190 L176 220 L207 250 Z"
          stroke="#141414"
          strokeWidth="1.5"
          initial="hidden"
          animate="visible"
          custom={0.8}
          variants={draw}
        />

        {/* patella window — opening edge + raised tracking-ring pad */}
        <motion.circle
          cx="150" cy="221" r="35"
          stroke="#EE5A28"
          strokeWidth="2.5"
          initial="hidden"
          animate="visible"
          custom={0.95}
          variants={draw}
        />
        <motion.circle
          cx="150" cy="221" r="22"
          stroke="#EE5A28"
          strokeWidth="2"
          initial="hidden"
          animate="visible"
          custom={1.05}
          variants={draw}
        />

        {/* adjustable wrap straps, top and bottom */}
        <motion.path
          d="M104 71 Q160 60 224 71"
          stroke="#C8451B"
          strokeWidth="2"
          strokeLinecap="round"
          initial="hidden"
          animate="visible"
          custom={1.2}
          variants={draw}
        />
        <motion.rect
          x="98" y="63" width="15" height="17" rx="3"
          stroke="#C8451B"
          strokeWidth="1.5"
          initial="hidden"
          animate="visible"
          custom={1.25}
          variants={draw}
        />
        <motion.path
          d="M78 402 Q136 391 192 402"
          stroke="#C8451B"
          strokeWidth="2"
          strokeLinecap="round"
          initial="hidden"
          animate="visible"
          custom={1.3}
          variants={draw}
        />
        <motion.rect
          x="72" y="394" width="15" height="17" rx="3"
          stroke="#C8451B"
          strokeWidth="1.5"
          initial="hidden"
          animate="visible"
          custom={1.35}
          variants={draw}
        />

        {/* perforated-fabric texture, top and bottom cuffs */}
        {[
          [132, 46], [148, 43], [164, 43], [180, 46], [192, 51],
          [104, 428], [118, 434], [136, 437], [154, 437], [172, 433],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx} cy={cy} r="1.6"
            fill="#8B8580"
            stroke="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 + i * 0.02, duration: 0.3 }}
          />
        ))}
      </svg>
    </div>
  )
}
