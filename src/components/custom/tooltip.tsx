import type { ComponentProps, ReactNode } from 'react';
import { Tooltip as STooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  contentProps?: ComponentProps<typeof TooltipContent>;
}

const Tooltip = ({ children, content, contentProps }: TooltipProps) => {
  return (
    <STooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent {...contentProps}>{content}</TooltipContent>
    </STooltip>
  );
};

export default Tooltip;
