import { flexRender, type Table as ReactTable } from '@tanstack/react-table';
import { Table as STable, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
// import NoData from '@/components/no-data';

interface DataTableProps<TData> {
  table: ReactTable<TData>;
  isLoading?: boolean;
  headClassName?: string;
}

export function DataTable<TData>({ table, isLoading, headClassName }: DataTableProps<TData>) {
  return (
    <div className="rounded-md border">
      <STable>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className={headClassName}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {isLoading ? (
            Array.from({ length: table.getState().pagination.pageSize }).map((_, index) => (
              <TableRow key={index}>
                {table.getVisibleLeafColumns().map((_, cellIndex) => (
                  <TableCell className="max-w-24 truncate" key={cellIndex}>
                    <Skeleton className="flex h-4 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={table.getAllColumns().length} className="h-24 text-center">
                <div>No data</div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </STable>
    </div>
  );
}
