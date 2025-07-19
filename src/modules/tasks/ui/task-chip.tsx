import clsx from 'clsx';
import React from 'react';

import { capitalize } from '@shared/helpers';
import type { TTaskPriority } from '@shared/types';

interface ITaskChipProps {
  type: TTaskPriority;
}

const getChipColor = (type: TTaskPriority): string => {
  switch (type) {
    case 'low':
      return 'bg-green-500';
    case 'medium':
      return 'bg-yellow-500';
    case 'high':
      return 'bg-red-500';
    default:
      const _exhaustiveCheck: never = type;
      return _exhaustiveCheck;
  }
};

export const TaskChip: React.FC<ITaskChipProps> = ({ type }) => (
  <div className={clsx('rounded-xl px-3 py-1 text-xs font-semibold text-zinc-100', getChipColor(type))}>
    {capitalize(type)}
  </div>
);
