export function convert(px, base = "16") {
  return px / base;
}

export function defaultSizes(length = 100) {
  const sizes = [];
  for (let i = 1; i <= length; i += 1) {
    sizes.push(i);
  }
  return sizes;
}
