import {createStore} from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;

    case 'DEC':
      return state - 1;

    default:
      return state;
  }
};

const store = createStore(reducer);

document
  .getElementById('inc')
  .addEventListener('click', () => {
    store.dispatch({type: 'INC'})
  });
document.getElementById('dec')
  .addEventListener('click', () => {
    store.dispatch({type: 'DEC'})
  });

const update = ()  => {
  document
    .getElementById('counter')
    .innerHTML = store.getState();
};

store.subscribe(update);
/*
* createStore - создает store из reducer с дефолтными значенимяи
*
* subscribe - позволяет подписаться на измнения store
*
* dispatch - обратабывает actions
*
* reducer - должен быть чистой функцией (результат зависит только от аргументов, нет побочных эффектов)
* зависит только от текущего стейта и экшена
* в reducer нельзя использовать тек. время, генераторы случ чисел, вызов сервера
*/