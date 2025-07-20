import type { RouteObject } from 'react-router';
import { Navigate } from 'react-router';

import MainLayout from '@layouts/main-layout';
import { Chat } from '@pages/chat';
import { Profile } from '@pages/profile';
import { TaskDashboard } from '@pages/task-dashboard';

import { ROUTES } from './app-router.routes';

export const routesConfig: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.DASHBOARD, element: <TaskDashboard /> },
      { path: ROUTES.CHAT, element: <Chat /> },
      { path: ROUTES.PROFILE, element: <Profile /> },
      { path: '*', element: <Navigate to={ROUTES.DASHBOARD} /> }
    ]
  }
];
