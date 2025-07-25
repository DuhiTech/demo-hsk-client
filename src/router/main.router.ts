import type { RouteObject } from 'react-router';
import MainLayout from '@/layouts/main-layout';
import Home from '@/pages/home';

const mainRouter: RouteObject[] = [
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
];

export default mainRouter;
