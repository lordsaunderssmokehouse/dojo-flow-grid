import { cn } from '@/lib/utils';

type StatusType = 'mastered' | 'learning' | 'locked' | 'ready' | 'in-progress' | 'future';

interface StatusChipProps {
  status: StatusType;
  className?: string;
}

const statusConfig = {
  mastered: {
    label: 'Mastered',
    className: 'bg-success/10 text-success border-success/20',
  },
  learning: {
    label: 'Learning',
    className: 'bg-warning/10 text-warning border-warning/20',
  },
  locked: {
    label: 'Locked',
    className: 'bg-destructive/10 text-destructive border-destructive/20',
  },
  ready: {
    label: 'Ready',
    className: 'bg-success/10 text-success border-success/20',
  },
  'in-progress': {
    label: 'In Progress',
    className: 'bg-warning/10 text-warning border-warning/20',
  },
  future: {
    label: 'Future',
    className: 'bg-muted/50 text-muted-foreground border-border',
  },
};

export function StatusChip({ status, className }: StatusChipProps) {
  const config = statusConfig[status];
  
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
