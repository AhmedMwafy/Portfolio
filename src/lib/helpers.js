// Small helper used by the social buttons. You do not need to edit this.

// True when a link is empty or still a YOUR_... placeholder.
export function isPlaceholder(value) {
  return !value || value.startsWith("YOUR_");
}

// Builds the real link. Placeholders become "#" so nothing breaks.
export function socialHref(type, value) {
  if (isPlaceholder(value)) return "#";
  if (type === "email") return `mailto:${value}`;
  return value;
}
