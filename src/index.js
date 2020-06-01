import {createStore, bindActionCreators} from "redux";
import reducer from "./reducer";
import * as actions from "./actions"

const store = createStore(reducer);
const {dispatch} = store;

// bind action creator - аналог bindActionCreators
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);


document
  .getElementById('inc')
  .addEventListener('click', inc);
document.getElementById('dec')
  .addEventListener('click', dec);
document.getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random()*10);
    rnd(payload)
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
*
* bindActionCreator - функция, которая создает функции для вызова actions
*/