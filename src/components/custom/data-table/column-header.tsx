import { ArrowDownUp, ArrowDown, ArrowUp } from 'lucide-react';
import type { Column } from '@tanstack/react-table';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface TableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function TableColumnHeader<TData, TValue>({ column, title, className }: TableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  const handleClick = () => {
    switch (column.getIsSorted()) {
      case 'asc':
        column.toggleSorting(true);
        break;
      case 'desc':
        column.toggleSorting();
        break;
      default:
        column.toggleSorting(false);
    }
  };

  return (
    <Button variant="ghost" size="sm" onClick={handleClick}>
      <span className="text-sm">{title}</span>
      {column.getIsSorted() === 'desc' ? (
        <ArrowDown className="h-4 w-4" />
      ) : column.getIsSorted() === 'asc' ? (
        <ArrowUp className="h-4 w-4" />
      ) : (
        <ArrowDownUp className="size-4" />
      )}
    </Button>
  );
}
