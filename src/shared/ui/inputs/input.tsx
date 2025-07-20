import clsx from 'clsx';
import React from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  placeholder?: string;
  label?: string;
}

export const Input: React.FC<IInputProps> = ({ errorMessage, type = 'text', className, label, id, ...props }) => (
  <div
    className={clsx(
      'inline-flex gap-2',
      {
        'flex-row-reverse items-center': type === 'checkbox',
        'flex-col': type !== 'checkbox'
      },
      className
    )}
  >
    {label && (
      <label className="text-sm text-zinc-300" htmlFor={id}>
        {label}
      </label>
    )}
    <input
      {...props}
      id={id}
      type={type}
      className="rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-amber-200 focus:outline-none"
    />
    {errorMessage && <span className="text-sm text-red-500">{errorMessage}</span>}
  </div>
);
