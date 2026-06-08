export function scrollTo(id, onDone) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  if (onDone) onDone();
}
