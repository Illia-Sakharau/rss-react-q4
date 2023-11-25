import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import AsideWidget from './asideWidget';

describe('Aside widget wrapper', () => {
  const childrenTest = <TEST_DATA.element.reactEl />;
  const linkFrom = {
    pathname: '/from',
    search: '?course=react',
  };

  it('Check dimmer color', () => {
    render(<AsideWidget linkFrom={linkFrom}>{childrenTest}</AsideWidget>);

    const dimmerEl = screen.getByRole('link', { name: '' });
    const style = window.getComputedStyle(dimmerEl);

    expect(style.background).toBe('rgba(0, 0, 0, 0.8)');
  });
});
