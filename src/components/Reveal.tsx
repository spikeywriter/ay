import { useEffect, useRef, useState, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
};

const offsetMap: Record<string, string> = {
  up: 'translateY(32px)',
  left: 'translateX(-32px)',
  right: 'translateX(32px)',
  none: 'none',
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const reducedMotion = typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={`transition-all ${reducedMotion ? 'duration-300' : 'duration-700'} ease-elegant ${className}`}
      style={{
        opacity: visible || reducedMotion ? 1 : 0,
        transform: visible || reducedMotion ? 'none' : offsetMap[direction],
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
