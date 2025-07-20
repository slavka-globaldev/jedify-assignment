import clsx from 'clsx';
import React from 'react';

import { capitalize } from '@shared/helpers';
import { ETaskPriority } from '@shared/types';

interface ITaskChipProps {
  type: ETaskPriority;
}

const getChipColor = (type: ETaskPriority): string => {
  switch (type) {
    case ETaskPriority.Low:
      return 'bg-green-500';
    case ETaskPriority.Medium:
      return 'bg-yellow-500';
    case ETaskPriority.High:
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
