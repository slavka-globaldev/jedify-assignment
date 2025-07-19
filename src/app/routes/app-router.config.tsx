import type { RouteObject } from 'react-router';
import { Navigate } from 'react-router';

import MainLayout from '@layouts/main-layout';

import { ROUTES } from './app-router.routes';

export const routesConfig: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [{ path: '*', element: <Navigate to={ROUTES.DASHBOARD} /> }]
  }
];
