import clsx from 'clsx';
import React from 'react';

interface IContainerProps extends React.PropsWithChildren {
  className?: string;
}

export const Container: React.FC<IContainerProps> = ({ className, children }) => (
  <div className={clsx('container mx-auto p-4', className)}>{children}</div>
);
