/**
 * One-screen-per-scroll navigation.
 *
 * Every <main> section and the footer act as "pages". A wheel tick, trackpad flick,
 * swipe or key press moves exactly one screen: to the next section, or — when a
 * section is taller than the viewport — one screen further inside it, so no
 * content is ever skipped.
 */

const EASE = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const DURATION = 750;
const QUIET_MS = 180; // trackpads keep firing inertial wheel events; wait for silence before the next step

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let animating = false;
let lastWheel = 0;

const vh = () => window.innerHeight;

function pages(): HTMLElement[] {
  return [
    ...document.querySelectorAll<HTMLElement>('main > section'),
    ...document.querySelectorAll<HTMLElement>('body > footer'),
  ];
}

function bounds(el: HTMLElement) {
  const top = el.getBoundingClientRect().top + window.scrollY;
  return { top: Math.round(top), bottom: Math.round(top + el.offsetHeight) };
}

/** Where one step in `dir` should land, or null if already at the end. */
function target(dir: 1 | -1): number | null {
  const y = Math.round(window.scrollY);
  const h = vh();
  const list = pages().map(bounds);
  const max = document.documentElement.scrollHeight - h;
  let i = list.findIndex((b) => y >= b.top - 2 && y < b.bottom - 2);
  if (i === -1) i = y <= 0 ? 0 : list.length - 1;
  const cur = list[i];

  if (dir === 1) {
    // More of this section below the fold → move one screen within it.
    if (cur.bottom - (y + h) > 2) return Math.min(y + h, cur.bottom - h, max);
    const next = list[i + 1];
    return next ? Math.min(next.top, max) : null;
  }

  // Up: first page back through this section, then to the last screen of the previous one.
  if (y - cur.top > 2) return Math.max(y - h, cur.top);
  const prev = list[i - 1];
  return prev ? Math.max(prev.top, prev.bottom - h) : null;
}

function scrollToY(to: number) {
  const from = window.scrollY;
  if (Math.abs(to - from) < 2) return;
  if (reducedMotion) {
    window.scrollTo(0, to);
    return;
  }
  animating = true;
  const start = performance.now();
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / DURATION);
    window.scrollTo(0, from + (to - from) * EASE(t));
    if (t < 1) requestAnimationFrame(step);
    else animating = false;
  };
  requestAnimationFrame(step);
}

function go(dir: 1 | -1) {
  if (animating) return;
  const to = target(dir);
  if (to !== null) scrollToY(to);
}

/** Let form fields and anything marked data-native-scroll scroll themselves. */
function isNative(el: EventTarget | null) {
  return el instanceof Element && !!el.closest('textarea, select, input, [data-native-scroll], details[open] nav');
}

// ── Wheel / trackpad ──────────────────────────────────────────────
window.addEventListener(
  'wheel',
  (e) => {
    if (e.ctrlKey || isNative(e.target)) return; // pinch-zoom & form fields stay native
    e.preventDefault();
    const now = performance.now();
    const quiet = now - lastWheel > QUIET_MS;
    lastWheel = now;
    if (Math.abs(e.deltaY) < 4 || animating || !quiet) return;
    go(e.deltaY > 0 ? 1 : -1);
  },
  { passive: false },
);

// ── Touch (phones & tablets) ──────────────────────────────────────
let touchY: number | null = null;
window.addEventListener('touchstart', (e) => { touchY = isNative(e.target) ? null : e.touches[0].clientY; }, { passive: true });
window.addEventListener('touchmove', (e) => { if (touchY !== null) e.preventDefault(); }, { passive: false });
window.addEventListener('touchend', (e) => {
  if (touchY === null) return;
  const dy = touchY - e.changedTouches[0].clientY;
  touchY = null;
  if (Math.abs(dy) > 40) go(dy > 0 ? 1 : -1);
});

// ── Keyboard ──────────────────────────────────────────────────────
window.addEventListener('keydown', (e) => {
  if (isNative(e.target) || e.altKey || e.ctrlKey || e.metaKey) return;
  const down = ['ArrowDown', 'PageDown'].includes(e.key) || (e.key === ' ' && !e.shiftKey);
  const up = ['ArrowUp', 'PageUp'].includes(e.key) || (e.key === ' ' && e.shiftKey);
  if (down || up) {
    e.preventDefault();
    go(down ? 1 : -1);
  } else if (e.key === 'Home') {
    e.preventDefault();
    scrollToY(0);
  } else if (e.key === 'End') {
    e.preventDefault();
    scrollToY(document.documentElement.scrollHeight - vh());
  }
});

// ── Keep alignment after resize / orientation change ──────────────
let resizeTimer = 0;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    const y = window.scrollY;
    const nearest = pages().map(bounds).reduce((a, b) => (Math.abs(b.top - y) < Math.abs(a.top - y) ? b : a));
    if (Math.abs(nearest.top - y) < vh() / 2) window.scrollTo(0, nearest.top);
  }, 200);
});
