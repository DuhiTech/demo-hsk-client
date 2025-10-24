import { Table } from '@/components/custom/data-table';
import type { Button } from '@/components/ui/button';
import type { User } from '@/types/entity';
import type { ColumnDef } from '@tanstack/react-table';
import { Plus } from 'lucide-react';
import type { ComponentProps } from 'react';

const columns: ColumnDef<User, User>[] = [
  {
    id: 'Tên',
    accessorKey: 'name',
    header: 'Tên',
    cell: ({ row: { original } }) => {
      return (
        <div className="flex items-center gap-2">
          <img src={original.image} alt={original.name} className="size-10 rounded-full" />
          {original.name}
        </div>
      );
    },
  },
  {
    id: 'Email',
    accessorKey: 'email',
    header: 'Email',
  },
  {
    id: 'Vai trò',
    accessorKey: 'role',
    header: 'Vai trò',
  },
  {
    id: 'Cập nhật lúc',
    accessorKey: 'updatedAt',
    header: 'Cập nhật lúc',
  },
];

const Users = () => {
  const buttons: ComponentProps<typeof Button>[] = [
    {
      children: (
        <>
          <Plus />
          Thêm
        </>
      ),
      variant: 'contained',
      color: 'primary',
    },
    {
      children: (
        <>
          <Plus />
          Chặn
        </>
      ),
      color: 'destructive',
    },
  ];

  return (
    <div className="card">
      <Table columns={columns} buttons={buttons} url="/users" hasRefresh />
    </div>
  );
};

export default Users;
