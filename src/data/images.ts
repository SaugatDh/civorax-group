import type { ImageMetadata } from 'astro';
import tower from '../assets/images/tower.jpg';
import posDashboard from '../assets/images/pos-dashboard.jpg';
import designStudio from '../assets/images/design-studio.jpg';

/**
 * Placeholder photography from the Stitch mock (512px).
 * Replace each file in src/assets/images/ with a real, high-resolution photo
 * (≥ 2400px wide for the hero) — same filename, and every page updates.
 */
export const IMAGES: Record<'tower' | 'pos-dashboard' | 'design-studio', ImageMetadata> = {
  tower,
  'pos-dashboard': posDashboard,
  'design-studio': designStudio,
};
