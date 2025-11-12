import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { useBeltTheme } from '@/contexts/BeltThemeContext';

export interface BeltPillProps extends HTMLAttributes<HTMLDivElement> {
  showKorean?: boolean;
}

const BeltPill = forwardRef<HTMLDivElement, BeltPillProps>(
  ({ className, showKorean = false, ...props }, ref) => {
    const { beltTheme } = useBeltTheme();

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border-2',
          className
        )}
        style={{
          borderColor: `hsl(${beltTheme.color})`,
          backgroundColor: `hsl(${beltTheme.color} / 0.1)`,
          color: beltTheme.name === 'white' ? 'hsl(var(--foreground))' : `hsl(${beltTheme.color})`,
        }}
        {...props}
      >
        <div 
          className="h-2 w-2 rounded-full" 
          style={{ 
            backgroundColor: `hsl(${beltTheme.color})`,
            border: beltTheme.name === 'white' ? '1px solid hsl(var(--border))' : 'none',
          }} 
        />
        <span>{showKorean ? beltTheme.koreanName : beltTheme.displayName}</span>
      </div>
    );
  }
);

BeltPill.displayName = 'BeltPill';

export { BeltPill };
