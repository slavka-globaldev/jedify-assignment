import React from 'react';

import type { TTaskPriority, TTaskStatus } from '@shared/types';

import { useTasksStore } from '../store/tasks.store';

export interface ITasksFilters {
  status?: TTaskStatus;
  priority?: TTaskPriority;
}

interface IUseSortedTasksParams {
  filters?: ITasksFilters;
  searchQuery?: string;
}

export const useSortedTasks = (params?: IUseSortedTasksParams) => {
  const tasks = useTasksStore((state) => state.tasks);

  const filteredTasks = React.useMemo(
    () =>
      tasks.filter((task) => {
        const matchesStatus = !params?.filters?.status || task.status === params.filters.status;
        const matchesPriority = !params?.filters?.priority || task.priority === params.filters.priority;
        const matchesSearch =
          !params?.searchQuery || task.title.toLowerCase().includes(params.searchQuery.toLowerCase());
        return matchesStatus && matchesPriority && matchesSearch;
      }),
    [tasks, params?.filters, params?.searchQuery]
  );

  const sortedTasks = React.useMemo(
    () =>
      filteredTasks.sort((a, b) => {
        if (a.status === 'pending' && b.status === 'completed') {
          return -1;
        }
        if (a.status === 'completed' && b.status === 'pending') {
          return 1;
        }
        return b.createdAt.getTime() - a.createdAt.getTime();
      }),
    [filteredTasks]
  );

  return sortedTasks;
};
