import '@testing-library/jest-dom/vitest';
import '@testing-library/user-event';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
