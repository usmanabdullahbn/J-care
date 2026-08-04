export default function Marquee({ items }) {
  const loop = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-steel-light/60 bg-ink py-3">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap motion-reduce:animate-none">
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs tracking-[0.15em] uppercase text-bandage/80 flex items-center gap-10"
          >
            {item}
            <span className="text-amber">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
