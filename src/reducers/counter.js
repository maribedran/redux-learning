const counter = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1
  }
  else if (action.type === 'DECREMENT') {
    return state - 1
  }
  else {
    return state
  }
}

const addCounter = (list) => {
  return [...list.concat([0])]
}

const removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1),
  ]
}

const incrementCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1),
  ]
}

export { counter, addCounter, removeCounter, incrementCounter };
