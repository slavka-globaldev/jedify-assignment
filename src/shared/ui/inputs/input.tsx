import React from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  type?: 'text' | 'date';
  placeholder?: string;
}

export const Input: React.FC<IInputProps> = ({ errorMessage, type = 'text', ...props }) => (
  <div className="flex flex-col gap-y-2">
    <input
      {...props}
      type={type}
      className="rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-amber-200 focus:outline-none"
    />
    {errorMessage && <span className="text-sm text-red-500">{errorMessage}</span>}
  </div>
);
