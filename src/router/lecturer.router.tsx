import ProtectedRoute from '@/components/protected-route';
import SidebarLayout from '@/layouts/sidebar-layout';
import Dashboard from '@/pages/lecturer/dashboard';
import routes from '@/routes';
import { Role } from '@/types/enum/Role';
import type { RouteObject } from 'react-router';

const lecturerRouter: RouteObject[] = [
  {
    path: routes.lecturer.index,
    element: <ProtectedRoute allowedRoles={[Role.Lecturer]} />,
    children: [
      {
        path: routes.lecturer.index,
        Component: SidebarLayout,
        children: [
          {
            index: true,
            Component: Dashboard,
          },
        ],
      },
    ],
  },
];

export default lecturerRouter;
