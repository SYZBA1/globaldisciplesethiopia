import React from 'react';
import { AlertCircle } from 'lucide-react';

interface PlaceholderBadgeProps {
  label?: string;
  tooltip?: string;
  className?: string;
}

export const PlaceholderBadge: React.FC<PlaceholderBadgeProps> = ({
  label = "Pending Organizational Confirmation",
  tooltip = "This information is a placeholder awaiting final verified data from the Ethiopian Board of Trustees.",
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-900 border border-amber-300 shadow-sm ${className}`}
      title={tooltip}
    >
      <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
      <span>{label}</span>
    </span>
  );
};
