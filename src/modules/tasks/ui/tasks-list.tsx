import React from 'react';

import { TasksItem } from '@modules/tasks/ui/tasks-item';

import { useSortedTasks } from '../hooks/use-sorted-tasks';

export const TasksList = () => {
  const tasks = useSortedTasks();
  const [isLoading, setIsLoading] = React.useState(true);

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
    <ul className="grid grid-cols-3 gap-4">
      {isLoading && Array.from({ length: 3 }, (_, idx) => <TasksItem variant="card" key={idx} isLoading />)}
      {!isLoading && tasks.map((task) => <TasksItem variant="card" key={task.id} taskInfo={task} />)}
    </ul>
  );
};
