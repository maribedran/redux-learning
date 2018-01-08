# Redux

Implementing the https://egghead.io/courses/getting-started-with-redux course

## Concepts

1. State (Object) is read-only
    - Only actions change state
2. Actions (Object) must have a `type` attribute
3. Reducer functions
    - State mutations must be made by pure functions (not side-effects)
    - Previous state object must remain unchanged by action and a new one created
