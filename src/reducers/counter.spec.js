import deepFreeze from 'deep-freeze';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import { counter, addCounter, removeCounter, incrementCounter } from './counter.js'

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

describe('addCounter', () => {
  it('should add element to list', () => {
    const before = [];
    const after = [0];

    deepFreeze(before);

    expect(
      addCounter(before)
    ).toEqual(after);
  })

})

describe('removeCounter', () => {
  it('should remove element from list', () => {
    const before = [1, 2, 4];
    const after = [1, 4];

    deepFreeze(before);

    expect(
      removeCounter(before, 1)
    ).toEqual(after);
  })

})

describe('incrementCounter', () => {
  it('should remove element from list', () => {
    const before = [1, 2, 4];
    const after = [1, 3, 4];

    deepFreeze(before);

    expect(
      incrementCounter(before, 1)
    ).toEqual(after);
  })

})
