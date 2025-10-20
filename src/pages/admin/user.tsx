import { Table } from '@/components/custom/data-table';
import type { User } from '@/types/entity';
import type { ColumnDef } from '@tanstack/react-table';

const columns: ColumnDef<User, User>[] = [
  {
    accessorKey: 'name',
    header: 'Tên',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Vai trò',
  },
  {
    accessorKey: 'updatedAt',
    header: 'Cập nhật lúc',
  },
];

const Users = () => {
  return (
    <div className="card">
      <Table columns={columns} url="/users" onCheck={() => {}} hasRefresh />
    </div>
  );
};

export default Users;
