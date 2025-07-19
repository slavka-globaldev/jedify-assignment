import * as React from 'react';

import ChatIcon from '@assets/icons/chat.svg';
import TaskDashboardIcon from '@assets/icons/tasks.svg';
import { ROUTES } from '@routes/app-router.routes';

interface IMenuLink {
  label: string;
  icon: React.ReactNode;
  link: (typeof ROUTES)[keyof typeof ROUTES];
}

export const menuLinks: IMenuLink[] = [
  {
    label: 'Task Dashboard',
    icon: <TaskDashboardIcon className="h-5 w-5" />,
    link: ROUTES.DASHBOARD
  },
  {
    label: 'Chat',
    icon: <ChatIcon className="h-5 w-5" />,
    link: ROUTES.CHAT
  }
];
