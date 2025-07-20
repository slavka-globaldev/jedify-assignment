import React from 'react';

interface ITextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: string;
}

export const Textarea: React.FC<ITextareaProps> = ({ errorMessage, ...props }) => (
  <div className="flex flex-col gap-y-2">
    <textarea
      {...props}
      className="resize-none rounded border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-400 focus:ring-2 focus:ring-amber-200 focus:outline-none"
      rows={4}
    />
    {errorMessage && <span className="text-sm text-red-500">{errorMessage}</span>}
  </div>
);
