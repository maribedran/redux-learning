import deepFreeze from 'deep-freeze';
import toggleTodo from './todo.js';

describe('toggleTodo', () => {
  it('should set todo as completed', () => {
    const before = {
      id: 0,
      text: 'Learn Redux',
      completed: false
    };
    const after = {
      id: 0,
      text: 'Learn Redux',
      completed: true
    };

    deepFreeze(before);

    expect(
      toggleTodo(before)
    ).toEqual(after);
  })

})
