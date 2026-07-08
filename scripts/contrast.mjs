// WCAG contrast checker for the OKLCH token palette in DESIGN.md.
// Run: node scripts/contrast.mjs — exits 1 if any pair misses its target.

function oklchToLinearSrgb(L, C, h) {
  const rad = (h * Math.PI) / 180;
  const a = C * Math.cos(rad);
  const b = C * Math.sin(rad);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ ** 3, m = m_ ** 3, s = s_ ** 3;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ].map((v) => Math.min(1, Math.max(0, v)));
}

const luminance = (rgb) => 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];

function ratio(c1, c2) {
  const [y1, y2] = [luminance(oklchToLinearSrgb(...c1)), luminance(oklchToLinearSrgb(...c2))];
  const [hi, lo] = y1 > y2 ? [y1, y2] : [y2, y1];
  return (hi + 0.05) / (lo + 0.05);
}

const dark = {
  bg: [0.145, 0.007, 75], surface: [0.19, 0.008, 75], surface2: [0.235, 0.01, 75],
  ink: [0.935, 0.005, 80], muted: [0.71, 0.015, 75], amber: [0.78, 0.135, 68],
  amberFill: [0.8, 0.13, 68], green: [0.76, 0.13, 150],
};
const light = {
  bg: [1, 0, 0], surface: [0.965, 0.004, 75], surface2: [0.93, 0.006, 75],
  ink: [0.23, 0.012, 60], muted: [0.46, 0.02, 60], amber: [0.51, 0.124, 60],
  amberFill: [0.55, 0.124, 60], green: [0.5, 0.12, 150],
};

const checks = [
  ['dark ink/bg', dark.ink, dark.bg, 7],
  ['dark ink/surface', dark.ink, dark.surface, 7],
  ['dark muted/bg', dark.muted, dark.bg, 4.5],
  ['dark muted/surface', dark.muted, dark.surface, 4.5],
  ['dark amber/bg', dark.amber, dark.bg, 4.5],
  ['dark amber/surface', dark.amber, dark.surface, 4.5],
  ['dark bg-text/amberFill', dark.bg, dark.amberFill, 4.5],
  ['dark green/bg', dark.green, dark.bg, 4.5],
  ['light ink/bg', light.ink, light.bg, 7],
  ['light ink/surface', light.ink, light.surface, 7],
  ['light muted/bg', light.muted, light.bg, 4.5],
  ['light muted/surface', light.muted, light.surface, 4.5],
  ['light amber/bg', light.amber, light.bg, 4.5],
  ['light white/amberFill', [1, 0, 0], light.amberFill, 4.5],
  ['light green/bg', light.green, light.bg, 4.5],
];

let fail = false;
for (const [name, a, b, target] of checks) {
  const r = ratio(a, b);
  const ok = r >= target;
  if (!ok) fail = true;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name.padEnd(26)} ${r.toFixed(2)}:1  (target ${target}:1)`);
}
process.exit(fail ? 1 : 0);
