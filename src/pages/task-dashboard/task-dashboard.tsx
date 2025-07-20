import { TasksList } from '@modules/tasks';
import { useTasksStore } from '@modules/tasks/store/tasks.store';
import { getRandomTask } from '@shared/mocks/tasks/tasks.mock';
import { Button } from '@shared/ui/button';

export const TaskDashboard = () => {
  const createNewTask = useTasksStore((state) => state.addTask);

  const handleCreateTask = () => {
    // In real app the modal should be opened to create a new task
    createNewTask(getRandomTask());
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-x-8">
        <h1 className="text-2xl font-bold">Task Dashboard</h1>
        <Button onClick={handleCreateTask}>Create Task</Button>
      </div>
      <TasksList />
    </div>
  );
};
