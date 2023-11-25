import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as TEST_DATA from '../../../test/testData';
import NavBar from './NavBar';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from '../../../test/createMockRouter';

describe('Navigation bar', () => {
  const linksInBarTest = [
    {
      to: '/',
      text: 'home',
    },
    {
      to: '/gallery',
      text: 'gallery',
    },
    {
      to: '/about',
      text: 'about',
    },
  ];
  const classNameTest = TEST_DATA.className;

  it('Have passed className and links', () => {
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <NavBar linksInBar={linksInBarTest} className={classNameTest} />
      </RouterContext.Provider>
    );

    expect(screen.getByRole('navigation')).toHaveClass(classNameTest);

    expect(screen.getAllByRole('link').length).toBe(linksInBarTest.length);
    linksInBarTest.forEach((link) => {
      expect(screen.getByRole('link', { name: link.text })).toBeInTheDocument();
    });
  });

  it('Works without unnessasery props', () => {
    render(
      <RouterContext.Provider value={createMockRouter()}>
        <NavBar linksInBar={linksInBarTest} />
      </RouterContext.Provider>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();

    expect(screen.getAllByRole('link').length).toBe(linksInBarTest.length);
    linksInBarTest.forEach((link) => {
      expect(screen.getByRole('link', { name: link.text })).toBeInTheDocument();
    });
  });
});
