import {createStore} from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;

    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});

/*
* createStore - создает store из reducer с дефолтными значенимяи
*
* subscribe - позволяет подписаться на измнения store
*
* dispatch - обратабывает actions
*/