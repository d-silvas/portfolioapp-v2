import { BillionsPipe } from './billions.pipe';

describe('BillionsPipe', () => {
  it('create an instance', () => {
    const pipe = new BillionsPipe();
    expect(pipe).toBeTruthy();
  });
});
