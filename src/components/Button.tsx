import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

const base =
  'inline-flex items-center justify-center gap-2.5 font-sans font-semibold tracking-wide transition-all duration-500 ease-elegant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold-400 disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
  primary:
    'bg-forest-700 text-ivory-200 hover:bg-forest-600 border border-forest-700 hover:border-forest-600',
  secondary:
    'bg-gold-400 text-forest-800 hover:bg-gold-300 border border-gold-400 hover:border-gold-300',
  outline:
    'bg-transparent text-forest-700 border border-forest-700/30 hover:border-forest-700 hover:bg-forest-700 hover:text-ivory-200',
  ghost:
    'bg-transparent text-forest-700 border border-transparent hover:text-gold-600',
  light:
    'bg-ivory-200 text-forest-700 hover:bg-gold-400 hover:text-forest-800 border border-ivory-200 hover:border-gold-400',
};

const sizes = {
  sm: 'text-xs px-5 py-2.5 uppercase tracking-[0.15em]',
  md: 'text-sm px-7 py-3.5 uppercase tracking-[0.12em]',
  lg: 'text-sm px-9 py-4 uppercase tracking-[0.12em]',
};

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
