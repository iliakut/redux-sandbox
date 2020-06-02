import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import App from "./components/app";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// bind action creator - аналог bindActionCreators
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };

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