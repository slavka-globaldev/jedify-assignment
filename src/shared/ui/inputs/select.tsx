import React from 'react';

import { capitalize } from '@shared/helpers';

interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  errorMessage?: string;
  options?: string[];
  label?: string;
}

export const Select: React.FC<ISelectProps> = ({ errorMessage, options, label, id, ...props }) => (
  <div className="flex flex-col gap-y-2">
    {label && (
      <label htmlFor={id} className="text-sm text-zinc-300">
        {label}
      </label>
    )}
    <select
      {...props}
      id={id}
      className="rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-amber-200 focus:outline-none"
    >
      {options?.map((option) => (
        <option key={option} value={option}>
          {capitalize(option)}
        </option>
      ))}
    </select>
    {errorMessage && <span className="text-sm text-red-500">{errorMessage}</span>}
  </div>
);
