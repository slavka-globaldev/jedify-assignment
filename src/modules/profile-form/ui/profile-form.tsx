import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ROLES_OPTIONS } from '@shared/consts';
import { Button } from '@shared/ui/button';
import { Input, Select } from '@shared/ui/inputs';

import { type TProfileFormData, defaultValues, profileFormSchema } from '../schemas/profile-form.schema';

export const ProfileForm = () => {
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = React.useState(false);

  const formMethods = useForm<TProfileFormData>({
    resolver: zodResolver(profileFormSchema),
    defaultValues
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = formMethods;

  const onSubmit = (_: TProfileFormData) => {
    setIsSuccessfullySubmitted(true);
  };

  useEffect(() => {
    if (isSuccessfullySubmitted) {
      const timer = setTimeout(() => {
        setIsSuccessfullySubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSuccessfullySubmitted]);

  return (
    <FormProvider {...formMethods}>
      <form className="max-w-lg" onSubmit={handleSubmit(onSubmit)} noValidate>
        {isSuccessfullySubmitted && (
          <div className="mb-4 text-green-600" data-testid="success-message">
            Profile updated successfully!
          </div>
        )}
        <div className="flex flex-col gap-y-4">
          <Input
            label="Full Name"
            type="text"
            id="fullName"
            {...register('fullName')}
            placeholder="Enter full name..."
            errorMessage={errors.fullName?.message}
          />
          <Input
            label="Email"
            id="email"
            type="email"
            {...register('email')}
            placeholder="Enter email..."
            errorMessage={errors.email?.message}
          />
          <Select
            label="Role"
            id="role"
            {...register('roles')}
            errorMessage={errors.roles?.message}
            options={ROLES_OPTIONS}
          />
          <Input
            label="Enable notifications"
            id="enableNotifications"
            className="self-start"
            type="checkbox"
            {...register('enabledEmailNotifications')}
          />
          <div className="flex gap-x-2">
            <Button variant="secondary" onClick={() => reset(defaultValues)}>
              Reset
            </Button>
            <Button data-testid="submit-button" type="submit">
              Save
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
