import type { RouteObject } from 'react-router';
import { Navigate } from 'react-router';

import MainLayout from '@layouts/main-layout';
import { TaskDashboard } from '@pages/task-dashboard';

import { ROUTES } from './app-router.routes';

export const routesConfig: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.DASHBOARD, element: <TaskDashboard /> },
      { path: '*', element: <Navigate to={ROUTES.DASHBOARD} /> }
    ]
  }
];
