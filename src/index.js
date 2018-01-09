import { createStore } from 'redux';
import counter from './reducers/counter.js';

const store = createStore(counter);

store.dispatch({ type: 'INCREMENT' });

const render = () => {
  document.body.innerText = store.getState();
}

store.subscribe(render);

render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' })
})
