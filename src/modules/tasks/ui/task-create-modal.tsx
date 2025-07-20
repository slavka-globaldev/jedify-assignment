import { faker } from '@faker-js/faker';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useTasksStore } from '@modules/tasks/store/tasks.store';
import { PRIORITY_OPTIONS } from '@shared/consts';
import { ETaskStatus } from '@shared/types';
import { Input, Select, Textarea } from '@shared/ui/inputs';
import { Modal } from '@shared/ui/modal';

import type { TTaskCreateForm } from '../schemas/task-create.schema';
import { defaultValues, taskCreateSchema } from '../schemas/task-create.schema';

interface ITaskCreateModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const TaskCreateModal: React.FC<ITaskCreateModalProps> = ({ isOpen, onClose }) => {
  const createNewTask = useTasksStore((state) => state.addTask);

  const formMethods = useForm<TTaskCreateForm>({
    resolver: zodResolver(taskCreateSchema),
    defaultValues
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = formMethods;

  const onSubmit = (data: TTaskCreateForm) => {
    createNewTask({
      ...data,
      id: faker.string.uuid(),
      createdAt: new Date(data.createdAt),
      status: ETaskStatus.Pending
    });
    onClose();
    reset(defaultValues);
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Modal isOpen={isOpen} onClose={onClose} title="Create New Task">
          <div className="flex flex-col gap-y-4">
            <Input type="text" {...register('title')} placeholder="Title" errorMessage={errors.title?.message} />
            <Textarea
              {...register('description')}
              placeholder="Description"
              errorMessage={errors.description?.message}
            />
            <Input
              type="date"
              {...register('createdAt')}
              placeholder="Title"
              errorMessage={errors.createdAt?.message}
            />
            <Select {...register('priority')} errorMessage={errors.priority?.message} options={PRIORITY_OPTIONS} />
          </div>
        </Modal>
      </form>
    </FormProvider>
  );
};
