// A dashed "stitch line" divider — a literal nod to the stitched seams
// on a fabric brace or belt, reused across the site instead of a generic rule.
export default function StitchDivider({ className = '' }) {
  return (
    <div
      className={`stitch-rule w-full text-steel-light ${className}`}
      role="presentation"
      aria-hidden="true"
    />
  )
}
