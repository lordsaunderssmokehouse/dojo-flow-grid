import { HTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface BrandCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const BrandCard = forwardRef<HTMLDivElement, BrandCardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl bg-card shadow-card transition-all duration-200',
          hover && 'hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

BrandCard.displayName = 'BrandCard';

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn('text-sm font-semibold text-card-foreground', className)}
        {...props}
      />
    );
  }
);

CardTitle.displayName = 'CardTitle';

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
      />
    );
  }
);

CardDescription.displayName = 'CardDescription';

interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {}

const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-2', className)}
        {...props}
      />
    );
  }
);

CardActions.displayName = 'CardActions';

export { BrandCard, CardTitle, CardDescription, CardActions };
