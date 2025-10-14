import ProtectedRoute from '@/components/protected-route';
import type { NavigationItem } from '@/layouts/components/sidebar-navigation';
import SidebarLayout from '@/layouts/sidebar-layout';
import Dashboard from '@/pages/lecturer/dashboard';
import Exam from '@/pages/lecturer/exam';
import routes from '@/routes';
import { Role } from '@/types/enum/Role';
import { BookOpenCheck, House } from 'lucide-react';
import type { RouteObject } from 'react-router';

const ITEMS: NavigationItem[] = [
  {
    Icon: House,
    href: routes.lecturer.home,
    title: 'Trang chủ',
  },
  {
    Icon: BookOpenCheck,
    href: routes.lecturer.exam,
    title: 'Bài kiểm tra',
  },
];

const lecturerRouter: RouteObject[] = [
  {
    path: routes.lecturer.index,
    element: <ProtectedRoute allowedRoles={[Role.Lecturer]} />,
    children: [
      {
        path: routes.lecturer.index,
        element: <SidebarLayout items={ITEMS} />,
        children: [
          {
            path: routes.lecturer.home,
            Component: Dashboard,
          },
          {
            path: routes.lecturer.exam,
            Component: Exam,
          },
        ],
      },
    ],
  },
];

export default lecturerRouter;
