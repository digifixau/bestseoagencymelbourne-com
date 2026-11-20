/**
 * The Bar (brand guide slide 19): the vertical stroke lifted from the two I's
 * in the DigiFix logo. Always vertical, square-cornered, Spark Magenta on a
 * light background. One per layout, used to mark the key number, frame a
 * quote, or lead the eye to the call to action.
 */
export function Bar({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block w-2 shrink-0 bg-magenta lg:w-3 ${className}`}
    />
  );
}
