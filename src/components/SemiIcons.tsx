import type { SVGProps } from 'react';

// Paths vendored from @douyinfe/semi-icons (MIT), trimmed to KUMO's icon set.
type IconProps = SVGProps<SVGSVGElement> & { size?: 'large' | 'extra-large' | number };

const sizes = { large: 24, 'extra-large': 32 } as const;

function Icon({ size = 24, children, ...props }: IconProps) {
  const pixels = typeof size === 'number' ? size : sizes[size];
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={pixels}
      height={pixels}
      focusable="false"
      aria-hidden="true"
      className={`semi-icon ${props.className ?? ''}`}
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1 12c0-.83.67-1.5 1.5-1.5h15.38l-6.44-6.44a1.5 1.5 0 0 1 2.12-2.12l9 9a1.5 1.5 0 0 1 0 2.12l-9 9a1.5 1.5 0 0 1-2.12-2.12l6.44-6.44H2.5A1.5 1.5 0 0 1 1 12Z" fill="currentColor" /></Icon>;
}

export function IconCloudStroked(props: IconProps) {
  return <Icon {...props}><path d="M20 11.3V11c0-3.9-3.1-7-7-7-2.8 0-5.2 1.7-6.3 4-3.2.2-5.7 2.8-5.7 6 0 3.3 2.7 6 6 6h11.5a4.48 4.48 0 0 0 1.5-8.7ZM18.5 18H7a4.01 4.01 0 0 1-.9-7.9c.3-.1.6-.1.9-.1.31 0 .56 0 .84.1.13.04.28-.04.31-.17.13-.59.39-1.1.65-1.63C9.7 6.9 11.2 6 13 6a4.95 4.95 0 0 1 4.69 6.74.2.2 0 0 0 .19.26h.62c.4 0 .8.1 1.1.3a2.48 2.48 0 0 1-1.1 4.7Z" fill="currentColor" /></Icon>;
}

export function IconCodeStroked(props: IconProps) {
  return <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.96 5.27a1 1 0 1 0-1.92-.54l-4 14a1 1 0 1 0 1.92.54l4-14ZM7.71 6.3a1 1 0 0 1 0 1.42L3.4 12l4.3 4.3a1 1 0 1 1-1.42 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.42 0Zm8.58 0a1 1 0 0 1 1.42 0l5 5a1 1 0 0 1 0 1.42l-5 5a1 1 0 0 1-1.42-1.42L20.6 12l-4.3-4.3a1 1 0 0 1 0-1.4Z" fill="currentColor" /></Icon>;
}

export function IconComponentStroked(props: IconProps) {
  return <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M1 9a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9Zm2 1v4h18v-4H3Z" fill="currentColor" /></Icon>;
}

export function IconServerStroked(props: IconProps) {
  return <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6 1a2 2 0 0 0-2 2v18c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6Zm0 2h12v10H6V3Zm0 12v6h12v-6H6ZM9.5 5a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2h-5Zm0 4a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2h-5ZM12 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="currentColor" /></Icon>;
}
