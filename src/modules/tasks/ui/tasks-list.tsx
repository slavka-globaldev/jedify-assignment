import clsx from 'clsx';
import React from 'react';

import { type ITasksFilters, useSortedTasks } from '../hooks/use-sorted-tasks';
import { TasksActions } from './tasks-actions';
import { type TTaskVariant, TasksItem } from './tasks-item';

export const TasksList = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filters, setFilters] = React.useState<ITasksFilters>({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [view, setView] = React.useState<TTaskVariant>('list');

  const tasksParams = React.useMemo(() => ({ filters, searchQuery }), [filters, searchQuery]);

  const tasks = useSortedTasks(tasksParams);

  const handleFilterToggle = (filters: ITasksFilters) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, ...filters };
      if (filters.status === prevFilters.status) {
        delete newFilters.status;
      }
      if (filters.priority === prevFilters.priority) {
        delete newFilters.priority;
      }
      return newFilters;
    });
  };

  // In real app it would be done with react-query and additional error handling
  React.useEffect(() => {
    // Simulate data fetching
    const fetchData = () => {
      // Simulate a delay
      new Promise((resolve) => setTimeout(resolve, 1000))
        .catch(() => {
          // Handle error if needed
          // eslint-disable-next-line no-console
          console.error('Error fetching tasks');
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-y-6">
      <TasksActions
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        currentView={view}
        onViewChange={setView}
        handleFilterToggle={handleFilterToggle}
        filters={filters}
      />
      {tasks.length > 0 && (
        <ul
          className={clsx('grid gap-4', {
            'grid-cols-1': view === 'list',
            'grid-cols-3': view === 'card'
          })}
        >
          {isLoading && Array.from({ length: 3 }, (_, idx) => <TasksItem variant={view} key={idx} isLoading />)}
          {!isLoading && tasks.map((task) => <TasksItem variant={view} key={task.id} taskInfo={task} />)}
        </ul>
      )}
      {tasks.length === 0 && !isLoading && (
        <div className="flex h-32 items-center justify-center">
          <p className="text-zinc-400">No tasks found</p>
        </div>
      )}
    </div>
  );
};
