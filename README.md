# Redux

Implementing the https://egghead.io/courses/getting-started-with-redux course

Enviroment setup at https://github.com/reactjs/redux/tree/master/examples/counter

## Concepts

1. State (Object) is read-only
    - Only actions change state
2. Actions (Object) must have a `type` attribute
3. Reducer functions
    - (state, action)
    - State mutations must be made by pure functions (not side-effects)
    - Previous state object must remain unchanged by action and a new one created

## Store Methods

1. **createStore** create a **store** that holds the **state tree** of the application
2. **getState** returns the current state of the application
3. **dispatch** dispatches an action triggering a state change
4. **subscribe** adds a listener with a callback
