import { describe, it } from 'vitest';
import * as TEST_DATA from '../test/testData';
import adapter from './adapter';

describe('Art info adater', () => {
  const input = TEST_DATA.responseArtworsInfo;
  const output = TEST_DATA.preparedArtworksInfo;

  it('All data', () => {
    expect(adapter(input[0])).toEqual(output[0]);
  });

  it('With missed data', () => {
    expect(adapter(input[1])).toEqual(output[1]);
  });
});
