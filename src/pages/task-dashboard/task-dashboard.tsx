import React from 'react';

import { TaskCreateModal, TasksList } from '@modules/tasks';
import { Button } from '@shared/ui/button';

export const TaskDashboard = () => {
  const [openCreateTaskModal, setOpenCreateTaskModal] = React.useState(false);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-x-8">
        <h1 className="text-2xl font-bold">Task Dashboard</h1>
        <Button onClick={() => setOpenCreateTaskModal(true)}>Create Task</Button>
      </div>
      <TasksList />
      <TaskCreateModal isOpen={openCreateTaskModal} onClose={() => setOpenCreateTaskModal(false)} />
    </div>
  );
};
