import ProtectedRoute from '@/components/protected-route';
import type { NavigationItem } from '@/layouts/components/sidebar-navigation';
import SidebarLayout from '@/layouts/sidebar-layout';
import Dashboard from '@/pages/admin/dashboard';
import Users from '@/pages/admin/user';
import Exam from '@/pages/lecturer/exam';
import routes from '@/routes';
import { Role } from '@/types/enum/Role';
import { BookOpenCheck, House, UsersRound } from 'lucide-react';
import type { RouteObject } from 'react-router';

const ITEMS: NavigationItem[] = [
  {
    Icon: House,
    href: routes.admin.home,
    title: 'Trang chủ',
  },
  {
    Icon: BookOpenCheck,
    href: routes.admin.exam,
    title: 'Bài kiểm tra',
  },
  {
    Icon: UsersRound,
    href: routes.admin.user,
    title: 'Người dùng',
  },
];

const mainRouter: RouteObject[] = [
  {
    path: routes.admin.index,
    element: <ProtectedRoute allowedRoles={[Role.Admin]} />,
    children: [
      {
        path: routes.admin.index,
        element: <SidebarLayout items={ITEMS} />,
        children: [
          {
            path: routes.admin.home,
            Component: Dashboard,
          },
          {
            path: routes.admin.exam,
            Component: Exam,
          },
          {
            path: routes.admin.user,
            Component: Users,
          },
        ],
      },
    ],
  },
];

export default mainRouter;
