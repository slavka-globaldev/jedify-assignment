import clsx from 'clsx';
import React from 'react';

import { TaskChip } from '@modules/tasks/ui/task-chip';
import type { ITask } from '@shared/types';

type TTaskVariant = 'card' | 'list';

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
            'text-xl font-bold dark:text-zinc-100',
            isLoading && 'h-16 w-full animate-pulse rounded-xl bg-zinc-600'
          )}
        >
          {!isLoading && taskInfo.title}
        </h4>
        <p className={clsx('text-zinc-400', isLoading && 'w-full flex-1 animate-pulse rounded-xl bg-zinc-600')}>
          {!isLoading && taskInfo.description}
        </p>

        {!isLoading && (
          <div className="mt-auto flex w-full items-center justify-between">
            {taskInfo.status === 'completed' && (
              <button
                className="rounded-lg bg-zinc-400 px-3 py-2 text-center text-sm font-medium transition-colors hover:bg-zinc-600"
                type="button"
              >
                Undo
              </button>
            )}

            {taskInfo.status === 'pending' && (
              <button
                className="rounded-lg bg-amber-200 px-3 py-2 text-center text-sm font-medium text-zinc-700 transition-colors hover:bg-amber-400"
                type="button"
              >
                Finish task
              </button>
            )}

            <span className="text-sm text-zinc-500">{taskInfo.createdAt.toLocaleDateString()}</span>
          </div>
        )}
      </li>
    );
  }
};
