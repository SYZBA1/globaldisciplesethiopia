import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = '',
}) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto items-center',
    right: 'text-right ml-auto',
  }[align];

  const labelColor = theme === 'dark' ? 'text-brand-gold' : 'text-brand-gold';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-brand-navy';
  const descColor = theme === 'dark' ? 'text-slate-300' : 'text-brand-muted';

  return (
    <div className={`flex flex-col ${alignClass} max-w-3xl mb-10 sm:mb-14 ${className}`}>
      {label && (
        <span className={`text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 ${labelColor}`}>
          {label}
        </span>
      )}
      <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};
