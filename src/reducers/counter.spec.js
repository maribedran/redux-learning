import expect, { createSpy, spyOn, isSpy } from 'expect';
import counter from './counter.js'

describe('conter', () => {
  it('should handle INCREMENT action', () => {
    expect (
      counter(0, { type: 'INCREMENT' })
    ).toEqual(1);
  })

  it('should handle DECREMENT action', () => {
    expect (
      counter(2, { type: 'DECREMENT' })
    ).toEqual(1);
  })

  it('should ignore unknown action', () => {
    expect (
      counter(1, { type: 'OTHER_ACTION' })
    ).toEqual(1);
  })

  it('should set initial state', () => {
    expect (
      counter(undefined, { })
    ).toEqual(0);
  })
})
