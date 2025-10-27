import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.ComponentProps<'input'> {
  inputClassName?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, inputClassName, type, startAdornment, endAdornment, disabled, 'aria-invalid': ariaInvalid, ...props },
    ref,
  ) => {
    return (
      <div
        className={cn(
          'selection:bg-primary selection:text-primary-foreground border-input flex h-10 w-full min-w-0 items-center gap-2 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm',
          'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
          { 'ring-destructive/20 border-destructive': ariaInvalid, 'pointer-events-none opacity-50': disabled },
          className,
        )}
      >
        {startAdornment}
        <input
          type={type}
          data-slot="input"
          className={cn(
            'placeholder:text-muted-foreground h-full w-full bg-transparent transition-colors file:inline-flex focus-visible:outline-none',
            'file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
            inputClassName,
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        {endAdornment}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
