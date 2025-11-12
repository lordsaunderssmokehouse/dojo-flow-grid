import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { BrandButton } from './BrandButton';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ icon: Icon, title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-4 rounded-2xl bg-muted p-6">
        <Icon className="h-12 w-12 text-muted-foreground" strokeWidth={1.5} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-6 max-w-sm text-sm text-muted-foreground">{description}</p>
      {actionLabel && onAction && (
        <BrandButton onClick={onAction} size="sm">
          {actionLabel}
        </BrandButton>
      )}
    </div>
  );
}
