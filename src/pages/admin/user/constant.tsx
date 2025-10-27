import type { TableFilterField } from '@/components/custom/data-table/filter-type';
import type { User } from '@/types/entity';
import { Role } from '@/types/enum/Role';
import type { ColumnDef } from '@tanstack/react-table';

export const roles = [
  {
    key: Role.Admin,
    label: 'Quản trị viên',
  },
  {
    key: Role.Lecturer,
    label: 'Giáo viên',
  },
  {
    key: Role.Student,
    label: 'Học viên',
  },
];

export const columns: ColumnDef<User, User>[] = [
  {
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
    enableHiding: false,
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Vai trò',
    cell: ({ row: { original } }) => {
      const rolesMap = new Map(roles.map((role) => [role.key, role.label]));
      return rolesMap.get(original.role);
    },
    enableSorting: false,
  },
  {
    accessorKey: 'updatedAt',
    header: 'Cập nhật lúc',
  },
];

export const filters: TableFilterField<User>[] = [
  {
    key: 'role',
    label: 'Vai trò',
    value: 'role',
    options: roles,
    multiple: true,
  },
  {
    key: 'search',
    label: 'Tên',
    value: 'name',
    placeholder: 'Tìm kiếm theo tên hoặc email',
  },
];
