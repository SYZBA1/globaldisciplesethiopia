import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, TrendingUp, Users, GitMerge, CheckCircle2 } from 'lucide-react';
import { Program } from '../../types';

interface ProgramCardProps {
  program: Program;
  className?: string;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, className = '' }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-brand-gold" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-brand-gold" />;
      case 'Users':
        return <Users className="w-6 h-6 text-brand-gold" />;
      default:
        return <GitMerge className="w-6 h-6 text-brand-gold" />;
    }
  };

  return (
    <div className={`group flex flex-col bg-white rounded-2xl overflow-hidden shadow-card border border-brand-sand transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={program.featured_image}
          alt={program.title}
          className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
          {getIcon(program.iconName)}
        </div>
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <h3 className="font-display text-xl font-bold text-brand-navy leading-snug group-hover:text-brand-gold transition-colors">
          <Link to={`/programs/${program.slug}`}>
            {program.title}
          </Link>
        </h3>

        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-gold">
          {program.subtitle}
        </p>

        <p className="mt-3 text-sm text-brand-muted leading-relaxed line-clamp-3">
          {program.short_description}
        </p>

        {program.outcomes && program.outcomes.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Outcomes:</span>
            <ul className="space-y-1.5 text-xs text-brand-muted">
              {program.outcomes.slice(0, 2).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-ethiopia-green mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          <span className="text-xs font-bold text-slate-400">Program 0{program.order}</span>
          <Link
            to={`/programs/${program.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy group-hover:text-brand-gold transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
