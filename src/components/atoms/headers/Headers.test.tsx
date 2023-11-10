import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionHeader } from './Headers';

describe('Headers', () => {
  it('Section header', () => {
    const headerText = 'Test text';
    render(<SectionHeader>{headerText}</SectionHeader>);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      headerText
    );
  });
});
