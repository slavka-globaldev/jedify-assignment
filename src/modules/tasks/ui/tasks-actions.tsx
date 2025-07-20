import clsx from 'clsx';
import React from 'react';

import CardsIcon from '@assets/icons/cards.svg';
import ListIcon from '@assets/icons/list.svg';

import type { ITasksFilters } from '@modules/tasks/hooks/use-sorted-tasks';
import { capitalize } from '@shared/helpers';
import type { TTaskPriority, TTaskStatus } from '@shared/types';

import type { TTaskVariant } from './tasks-item';

interface ITasksActionsProps {
  currentView: TTaskVariant;
  onViewChange: React.Dispatch<React.SetStateAction<TTaskVariant>>;
  searchQuery: string;
  onSearchChange: React.Dispatch<React.SetStateAction<string>>;
  filters?: ITasksFilters;
  handleFilterToggle: (filters: ITasksFilters) => void;
}

const STATUS_OPTIONS: TTaskStatus[] = ['pending', 'completed'];
const PRIORITY_OPTIONS: TTaskPriority[] = ['low', 'medium', 'high'];

export const TasksActions: React.FC<ITasksActionsProps> = ({
  currentView,
  onViewChange,
  searchQuery,
  onSearchChange,
  filters,
  handleFilterToggle
}) => (
  <div className="flex items-center gap-x-4">
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search tasks..."
      className="rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-amber-200 focus:outline-none"
    />
    <div className="ml-auto flex gap-x-4">
      <div className="flex items-center">
        <span className="mr-2 text-sm">Status:</span>
        {STATUS_OPTIONS.map((status, idx) => (
          <button
            key={status}
            type="button"
            onClick={() => handleFilterToggle({ status })}
            className={clsx(
              'flex items-center border border-zinc-700 px-2 py-1 text-sm transition-colors hover:bg-zinc-700',
              {
                'bg-zinc-700 text-amber-200': filters?.status === status,
                'bg-zinc-800 text-zinc-100': filters?.status !== status,
                'rounded-l-lg': idx === 0,
                'rounded-r-lg': idx === STATUS_OPTIONS.length - 1
              }
            )}
          >
            {capitalize(status)}
          </button>
        ))}
      </div>
      <div className="flex items-center">
        <span className="mr-2 text-sm">Priority:</span>
        {PRIORITY_OPTIONS.map((priority, idx) => (
          <button
            key={priority}
            onClick={() => handleFilterToggle({ priority })}
            type="button"
            className={clsx(
              'flex items-center border border-zinc-700 px-2 py-1 text-sm transition-colors hover:bg-zinc-700',
              {
                'bg-zinc-700 text-amber-200': filters?.priority === priority,
                'bg-zinc-800 text-zinc-100': filters?.priority !== priority,
                'rounded-l-lg': idx === 0,
                'rounded-r-lg': idx === PRIORITY_OPTIONS.length - 1
              }
            )}
          >
            {capitalize(priority)}
          </button>
        ))}
      </div>
    </div>
    <div className="flex shadow-xs">
      <button
        type="button"
        onClick={() => onViewChange('list')}
        className={clsx(
          'flex items-center rounded-s-lg border border-zinc-700 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-700',
          {
            'bg-zinc-700 text-amber-200': currentView === 'list',
            'bg-zinc-800 text-zinc-100': currentView !== 'list'
          }
        )}
      >
        <ListIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => onViewChange('card')}
        className={clsx(
          'flex items-center rounded-e-lg border border-l-0 border-zinc-700 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-700',
          {
            'bg-zinc-700 text-amber-200': currentView === 'card',
            'bg-zinc-800 text-zinc-100': currentView !== 'card'
          }
        )}
      >
        <CardsIcon className="h-4 w-4" />
      </button>
    </div>
  </div>
);
