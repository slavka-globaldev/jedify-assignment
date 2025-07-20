import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { ProfileForm } from '../ui/profile-form';

describe('ProfileForm', () => {
  it('renders form fields', () => {
    render(<ProfileForm />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/role/i)).toBeInTheDocument();
  });

  it('updates field values on user input', async () => {
    render(<ProfileForm />);
    const nameInput = screen.getByLabelText(/full name/i);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'Jane');
    expect(nameInput).toHaveValue('Jane');
  });

  it('shows success text on submit', async () => {
    render(<ProfileForm />);
    const nameField = screen.getByLabelText(/full name/i);
    const emailField = screen.getByLabelText(/email/i);
    await userEvent.clear(nameField);
    await userEvent.clear(emailField);

    await userEvent.type(screen.getByLabelText(/full name/i), 'Jane Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'example.test@gmail.com');
    await userEvent.selectOptions(screen.getByLabelText(/role/i), screen.getByRole('option', { name: /developer/i }));
    expect((screen.getByRole('option', { name: /developer/i }) as HTMLOptionElement).selected).toBe(true);
    await userEvent.click(screen.getByTestId('submit-button'));
    expect(await screen.findByTestId('success-message')).toBeInTheDocument();
  });
});
