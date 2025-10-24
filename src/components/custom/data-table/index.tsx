'use client';

import { type ComponentProps, forwardRef, type Ref, useCallback, useImperativeHandle, useMemo, useState } from 'react';
import { DataTable } from './table';
import type { ColumnDef, TableState } from '@tanstack/react-table';
import { TableColumnHeader } from './column-header';
import { TablePagination } from './pagination';
import { TableToolbar } from './toolbar';
import { useApi, useDataTable, useUpdateEffect } from '@/hooks';
import { Checkbox } from '@/components/ui/checkbox';
import type { TableFilterField } from './filter-type';
import type { IFilterList } from '@/types';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

interface TableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  url: string;
  defaultSorting?: TableState['sorting'];
  filters?: TableFilterField<TData>[];
  buttons?: ComponentProps<typeof Button>[];
  onCheck?: (items: TData[]) => void;
  headClassName?: string;
  hasRefresh?: boolean;
}

export interface TableRef {
  reload: () => Promise<void>;
}

// Sử dụng một hàm wrapper để khai báo generic và truyền vào `forwardRef`.
function TableComponent<TData, TValue>(
  {
    columns,
    url,
    defaultSorting,
    filters,
    buttons = [],
    onCheck,
    headClassName,
    hasRefresh = false,
  }: TableProps<TData, TValue>,
  ref: Ref<TableRef>,
) {
  const [urlQuery, setUrlQuery] = useState<string>();
  const { api } = useApi();
  const queryClient = useQueryClient();

  const queryKey = useMemo(() => ['table', urlQuery], [urlQuery]);

  const { data, isFetching } = useQuery<IFilterList<TData>>({
    queryKey,
    queryFn: async () => {
      if (!urlQuery)
        return {
          items: [],
          limit: 0,
          page: 0,
          total: 0,
        };

      const res = await api.get<IFilterList<TData>>(urlQuery);
      return res.data;
    },
    enabled: !!urlQuery,
    staleTime: 60_000,
  });

  const mColumns = useMemo(() => {
    const results = columns.map((column) => {
      if (typeof column.header === 'string') {
        const title = column.header;
        return {
          ...column,
          header: ({ column }) => <TableColumnHeader column={column} title={title} />,
        } as ColumnDef<TData, TValue>;
      }
      return column;
    });

    if (onCheck) {
      results.unshift({
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      });
    }

    return results;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns]);

  const { table, queryString } = useDataTable({
    data: data?.items || [],
    columns: mColumns,
    total: data?.total,
    filters,
    defaultSorting,
    onRowChecked: onCheck,
  });

  const refresh = useCallback(() => {
    return queryClient.invalidateQueries({
      predicate: (query) =>
        query.queryKey.some((k) => typeof k === 'string' && k.includes('table')) &&
        query.queryKey.some((k) => typeof k === 'string' && k.startsWith(url)),
    });
  }, [queryClient, url]);

  const tButtons: ComponentProps<typeof Button>[] = useMemo(() => {
    if (hasRefresh) {
      return [
        ...buttons,
        {
          children: <RotateCcw />,
          size: 'icon',
          onClick: refresh,
        },
      ];
    }
    return buttons;
  }, [buttons, hasRefresh, refresh]);

  useUpdateEffect(() => {
    setUrlQuery(url + '?' + queryString);
  }, [url, queryString]);

  useImperativeHandle(ref, () => ({
    reload: refresh,
  }));

  return (
    <div className="space-y-4">
      <TableToolbar table={table} filters={filters} buttons={tButtons} />
      <DataTable table={table} isLoading={isFetching} headClassName={headClassName} />
      <TablePagination table={table} canCheck={!!onCheck} />
    </div>
  );
}

// Sử dụng `forwardRef` với hàm `TableComponent`
export const Table = forwardRef(TableComponent) as <TData, TValue>(
  props: TableProps<TData, TValue> & { ref?: React.Ref<TableRef> },
) => React.JSX.Element;
