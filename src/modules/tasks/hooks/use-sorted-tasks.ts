import { useTasksStore } from '../store/tasks.store';

export const useSortedTasks = () => {
  const tasks = useTasksStore((state) => state.tasks);

  return tasks.sort((a, b) => {
    if (a.status === 'pending' && b.status === 'completed') {
      return -1;
    }
    if (a.status === 'completed' && b.status === 'pending') {
      return 1;
    }

    return b.createdAt.getTime() - a.createdAt.getTime();
  });
};
