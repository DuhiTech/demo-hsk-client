import * as React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { LucideLoader2 } from 'lucide-react';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all cursor-pointer select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      size: {
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        md: 'h-10 px-4 py-2 has-[>svg]:px-3',
        lg: 'h-12 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

type Variant = 'contained' | 'outlined' | 'ghost' | 'soft';
type Color = 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'destructive' | 'accent';

const buttonStyles = ({ variant, color }: { variant: Variant; color: Color }) => {
  let renderClass = '';

  switch (variant) {
    case 'contained':
      renderClass = `hover:shadow-sm
        bg-default text-default-foreground hover:bg-default-light shadow-default
        bg-primary text-primary-foreground hover:bg-primary-dark shadow-primary
        bg-secondary text-secondary-foreground hover:bg-secondary-dark shadow-secondary
        bg-success text-success-foreground hover:bg-success-dark shadow-success
        bg-warning text-warning-foreground hover:bg-warning-dark shadow-warning
        bg-info text-info-foreground hover:bg-info-dark shadow-info
        bg-destructive text-destructive-foreground hover:bg-destructive-dark shadow-destructive
        bg-accent text-accent-foreground hover:bg-accent-dark shadow-accent
      `;
      return cn(renderClass, `bg-${color} text-${color}-foreground hover:bg-${color}-dark shadow-${color}`);
    case 'outlined':
      renderClass = `border border-current hover:bg-current/15 bg-transparent hover:shadow-[currentcolor 0px 0px 0px 0.75px]
        text-default
        text-primary
        text-secondary
        text-success
        text-warning
        text-info
        text-destructive
        text-accent
      `;
      return cn(renderClass, `text-${color}`);
    case 'ghost':
      renderClass = ` background-transparent hover:bg-current/15
        text-default
        text-primary
        text-secondary
        text-success
        text-warning
        text-info
        text-destructive
        text-accent
      `;
      return cn(renderClass, `text-${color}`);
    case 'soft':
      renderClass = `hover:bg-current/40
        text-default-dark bg-default/20 
        text-primary-dark bg-primary/20 
        text-secondary-dark bg-secondary/20 
        text-success-dark bg-success/20 
        text-warning-dark bg-warning/20 
        text-info-dark bg-info/20 
        text-destructive-dark bg-destructive/20 
        text-accent-dark bg-accent/20 
      `;
      return cn(renderClass, `text-${color}-dark bg-${color}/20`);
    default:
      return '';
  }
};

function Button({
  className,
  variant = 'contained',
  color = 'default',
  size,
  asChild = false,
  children,
  startIcon,
  endIcon,
  loading,
  disabled,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    variant?: Variant;
    color?: Color;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    loading?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';
  const loadingComponent = <LucideLoader2 className="size-4 animate-spin" />;
  const startEl = loading && startIcon ? loadingComponent : startIcon;
  const endEl = loading && endIcon ? loadingComponent : endIcon;
  const el = loading && !startIcon && !endIcon ? loadingComponent : children;

  return (
    <Comp
      data-slot="button"
      className={cn(buttonStyles({ color, variant }), buttonVariants({ size, className }))}
      {...props}
      disabled={disabled || loading}
    >
      {startEl}
      <Slottable>{el}</Slottable>
      {endEl}
    </Comp>
  );
}

export { Button };
