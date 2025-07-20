import clsx from 'clsx';
import React from 'react';

type TButtonVariant = 'primary' | 'secondary';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
}

export const Button: React.FC<IButtonProps> = ({ children, variant = 'primary', className, ...props }) => (
  <button
    className={clsx(
      'rounded-lg px-3 py-2 text-center text-sm font-medium transition-colors',
      {
        'bg-amber-200 text-zinc-700 hover:bg-amber-400': variant === 'primary',
        'bg-zinc-400 hover:bg-zinc-600': variant === 'secondary'
      },
      className
    )}
    type="button"
    {...props}
  >
    {children}
  </button>
);
