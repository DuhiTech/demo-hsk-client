import ProtectedRoute from '@/components/protected-route';
import MainLayout from '@/layouts/main-layout';
import Dashboard from '@/pages/admin/dashboard';
import routes from '@/routes';
import { Role } from '@/types/enum/Role';
import type { RouteObject } from 'react-router';

const mainRouter: RouteObject[] = [
  {
    path: routes.admin.index,
    element: <ProtectedRoute allowedRoles={[Role.Admin]} />,
    children: [
      {
        path: routes.admin.index,
        Component: MainLayout,
        children: [
          {
            index: true,
            Component: Dashboard,
          }
        ]
      },
    ],
  },
];

export default mainRouter;
