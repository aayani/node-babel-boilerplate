import { getDateTime } from './datetime';

describe('Datetime Module', () => {
  it('should return current datetime', () => {
    expect(getDateTime()).toBeDefined();
  });
});
