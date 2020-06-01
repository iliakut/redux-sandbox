import {createStore} from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;

    case 'DEC':
      return state - 1;

    case 'RND':
      return state + action.payload;

    default:
      return state;
  }
};

const store = createStore(reducer);

// action creators
const dec = () => ({type: 'INC'});
const rnd = (payload) => ({type: 'RND', payload});

document
  .getElementById('inc')
  .addEventListener('click', () => {
    store.dispatch({type: 'INC'})
  });
document.getElementById('dec')
  .addEventListener('click', () => {
    store.dispatch(dec())
  });
document.getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10);
    store.dispatch(rnd(payload))
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
*
* action creator - фкнкция, которая возвращает объект редьюсера (типа и payload)
*/