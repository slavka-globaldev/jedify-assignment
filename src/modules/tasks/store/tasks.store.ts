import { create } from 'zustand/react';

import { mockedTasks } from '@shared/mocks/tasks';
import type { ITask } from '@shared/types';

interface ITasksStore {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  toggleTask: (taskId: string) => void;
}

export const useTasksStore = create<ITasksStore>((set) => ({
  tasks: mockedTasks,
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  toggleTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' } : task
      )
    }))
}));
