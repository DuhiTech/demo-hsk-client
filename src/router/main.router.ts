import type { RouteObject } from 'react-router';
import MainLayout from '@/layouts/main-layout';
import Home from '@/pages/home';
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';
import routes from '@/routes';
import Unauthorized from '@/pages/unauthorized';
import NotFound from '@/pages/not-found';

const mainRouter: RouteObject[] = [
  {
    path: routes.home,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: routes.unauthorized,
        Component: Unauthorized,
      },
      {
        path: routes.auth.signIn,
        Component: Login,
      },
      {
        path: routes.auth.signUp,
        Component: Register,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
];

export default mainRouter;
