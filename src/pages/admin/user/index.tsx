import { Table } from '@/components/custom/data-table';
import type { Button } from '@/components/ui/button';
import { Ban, Plus } from 'lucide-react';
import type { ComponentProps } from 'react';
import { columns, filters } from './constant';

const Users = () => {
  const buttons: ComponentProps<typeof Button>[] = [
    {
      children: 'Thêm',
      startIcon: <Plus className="size-5" />,
      variant: 'contained',
      color: 'primary',
    },
    {
      children: 'Chặn',
      startIcon: <Ban />,
      color: 'destructive',
    },
  ];

  return (
    <div className="card">
      <Table columns={columns} buttons={buttons} url="/users" filters={filters} hasRefresh />
    </div>
  );
};

export default Users;
