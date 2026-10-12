import { type ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = dark ? 'text-ivory-200' : 'text-forest-700';
  const descColor = dark ? 'text-ivory-200/60' : 'text-charcoal-500';

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <p className={`eyebrow ${dark ? 'eyebrow-light' : ''} mb-4`}>{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className={`text-heading-1 font-serif font-bold ${titleColor} text-balance`}>{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className={`mt-5 text-lead ${descColor} text-pretty`}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
