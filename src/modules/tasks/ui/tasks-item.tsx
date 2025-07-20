import clsx from 'clsx';
import React from 'react';

import { useTasksStore } from '@modules/tasks/store/tasks.store';
import { TaskChip } from '@modules/tasks/ui/task-chip';
import type { ITask } from '@shared/types';
import { Button } from '@shared/ui/button';

export type TTaskVariant = 'card' | 'list';

interface ITaskPropsLoaded {
  taskInfo: ITask;
  isLoading?: false;
}

interface ITaskPropsLoading {
  taskInfo?: undefined;
  isLoading: true;
}

type TTasksItemProps = (ITaskPropsLoaded | ITaskPropsLoading) & {
  variant: TTaskVariant;
};

export const TasksItem: React.FC<TTasksItemProps> = ({ taskInfo, isLoading, variant }) => {
  const toggleTaskStatus = useTasksStore((state) => state.toggleTask);
  const isCompleted = taskInfo?.status === 'completed';
  const isPending = taskInfo?.status === 'pending';

  const handleToggleTask = () => {
    if (taskInfo?.id) toggleTaskStatus(taskInfo.id);
  };

  if (variant === 'card') {
    return (
      <li
        className={clsx(
          'flex flex-col items-start gap-y-3 rounded-lg border border-zinc-700 bg-zinc-800 p-6 shadow-sm',
          {
            'h-80': isLoading
          }
        )}
      >
        {!isLoading && <TaskChip type={taskInfo.priority} />}
        <h4
          className={clsx(
            'text-xl font-bold text-zinc-100',
            isLoading && 'h-16 w-full animate-pulse rounded-xl bg-zinc-600',
            isCompleted && 'text-zinc-400 line-through'
          )}
        >
          {!isLoading && taskInfo.title}
        </h4>
        <p
          className={clsx(
            'text-zinc-400',
            isLoading && 'w-full flex-1 animate-pulse rounded-xl bg-zinc-600',
            isCompleted && 'text-zinc-500 line-through'
          )}
        >
          {!isLoading && taskInfo.description}
        </p>

        {!isLoading && (
          <div className="mt-auto flex w-full items-center justify-between">
            {isCompleted && (
              <Button variant="secondary" onClick={handleToggleTask}>
                Undo
              </Button>
            )}

            {isPending && <Button onClick={handleToggleTask}>Finish task</Button>}

            <span className="text-sm text-zinc-500">{taskInfo.createdAt.toLocaleDateString()}</span>
          </div>
        )}
      </li>
    );
  }

  if (variant === 'list') {
    return (
      <li
        className={clsx('flex items-center gap-x-4 rounded-md border border-zinc-700 bg-zinc-800 px-4 py-3 shadow-sm', {
          'h-16': isLoading
        })}
      >
        {!isLoading && <TaskChip type={taskInfo.priority} />}
        <span
          className={clsx(
            'flex-1 text-base font-medium text-zinc-100',
            isLoading && 'h-6 w-1/3 animate-pulse rounded bg-zinc-600',
            isCompleted && 'text-zinc-400 line-through'
          )}
        >
          {!isLoading && taskInfo.title}
        </span>
        <span className={clsx('text-sm text-zinc-500', isLoading && 'h-4 w-20 animate-pulse rounded bg-zinc-600')}>
          {!isLoading && taskInfo.createdAt.toLocaleDateString()}
        </span>
        {!isLoading && isCompleted && (
          <Button onClick={handleToggleTask} variant="secondary">
            Undo
          </Button>
        )}
        {!isLoading && isPending && <Button onClick={handleToggleTask}>Finish</Button>}
      </li>
    );
  }

  return null;
};
