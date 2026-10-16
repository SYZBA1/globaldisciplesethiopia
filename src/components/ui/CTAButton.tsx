import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs tracking-wider uppercase gap-1.5",
    md: "px-5 py-2.5 text-sm tracking-wide gap-2",
    lg: "px-7 py-3.5 text-base tracking-wide gap-2.5 shadow-md",
  }[size];

  const variantStyles = {
    primary: "bg-brand-gold text-white hover:bg-brand-gold-hover shadow-accent/20 focus-visible:ring-brand-gold",
    secondary: "bg-brand-navy text-white hover:bg-brand-navy-light shadow-card focus-visible:ring-brand-navy",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-brand-navy",
    'outline-white': "border-2 border-white text-white hover:bg-white hover:text-brand-navy focus-visible:ring-white",
    ghost: "text-brand-navy hover:bg-brand-stone hover:text-brand-navy-light",
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};
