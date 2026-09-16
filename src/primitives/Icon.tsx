import type { CSSProperties, ImgHTMLAttributes } from 'react';
import { figmaAssets } from '../assets/figma/registry';

const svgUrls = import.meta.glob('../assets/figma/*.svg', {
  eager: true,
  as: 'url',
}) as Record<string, string>;

// Resolve each icon name to the first (16px) SVG variant in the registry.
const byName = new Map<string, string>();
for (const asset of Object.values(figmaAssets)) {
  const name = asset.name.split('=')[0];
  if (!byName.has(name)) {
    const url = svgUrls[`../assets/figma/${asset.fileName}`];
    if (url) byName.set(name, url);
  }
}

export interface IconProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height'> {
  /** Figma icon name, e.g. "Check", "Chevron down", "Alert circle". */
  name: string;
  /** Rendered size in pixels. */
  size?: number;
  className?: string;
  style?: CSSProperties;
}

/** Atomic icon primitive backed by the synced Figma icon assets. */
export function Icon({ name, size = 16, className, style, alt, ...rest }: IconProps) {
  const src = byName.get(name);
  if (!src) {
    return (
      <span aria-label={name} className={className} role="img" style={style}>
        {name}
      </span>
    );
  }
  return (
    <img
      alt={alt ?? name}
      className={className}
      height={size}
      src={src}
      style={style}
      width={size}
      {...rest}
    />
  );
}
