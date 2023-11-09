import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionHeader } from '../src/components/atoms/headers/Headers';

describe('Test describe', () => {
  it('First it', () => {
    const arr = [1, 2, 3];
    expect(arr[1]).toEqual(2);
  });

  it('Second test', () => {
    render(<SectionHeader>Test text</SectionHeader>);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Test text'
    );
  });
});
