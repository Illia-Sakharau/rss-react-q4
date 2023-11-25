import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Error from '@/pages/_error';

describe('Error page', () => {
  it('Have text and reload button', async () => {
    render(<Error statusCode={500} />);

    const reloadButton = screen.getByRole('button', { name: 'Reload page' });

    expect(screen.getByText('Error 500')).toBeInTheDocument();
    expect(reloadButton).toBeInTheDocument();
    fireEvent.click(reloadButton);
  });
});
