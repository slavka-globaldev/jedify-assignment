import React from 'react';

import CloseIcon from '@assets/icons/close.svg';

import { Button } from '@shared/ui/button';

interface IModalProps extends React.PropsWithChildren {
  title: string;
  isOpen?: boolean;
  onClose?: VoidFunction;
  onSubmit?: VoidFunction;
}

export const Modal: React.FC<IModalProps> = ({ title, children, isOpen, onClose, onSubmit }) =>
  isOpen && (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 right-0 bottom-0 left-0 z-50 flex max-h-full w-full items-center justify-center overflow-x-hidden overflow-y-auto bg-black/80"
    >
      <div className="relative max-h-full w-full max-w-2xl p-4">
        <div className="relative rounded-lg bg-zinc-700 shadow-sm">
          <div className="flex items-center justify-between rounded-t border-b border-zinc-600 p-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <Button onClick={onClose}>
              <CloseIcon className="h-3 w-3" />
            </Button>
          </div>
          <div className="space-y-4 p-4">{children}</div>
          <div className="flex justify-end gap-x-2 rounded-b border-t border-zinc-600 p-4">
            <Button onClick={onClose} variant="secondary">
              Close
            </Button>
            <Button onClick={onSubmit} type="submit">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
