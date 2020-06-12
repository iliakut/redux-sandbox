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

// самописный bind action creator - аналог bindActionCreators
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };

/*
* Общее описание работы:
* createStore - создает store из reducer с дефолтными значенимяи
* subscribe - позволяет подписаться на измнения store
* dispatch - обратабывает actions
* reducer - должен быть чистой функцией (результат зависит только от аргументов, нет побочных эффектов)
*   зависит только от текущего стейта и экшена
*   в reducer нельзя использовать тек. время, генераторы случ чисел, вызов сервера
* action creator - фкнкция, которая возвращает объект редьюсера (типа и payload)
* bindActionCreator - функция, которая создает функции для вызова actions
* connect - для связи компонента с redux
*
* 1. создается store с помощью createStore, в котоырй передается reducer
* 2. дальше компонент app оборачивается в Provider с параметром store
* 3. в компоненте с помозью connect (mapStateToProps и mapDispatchToProps) привязываются пропсы
* 4. mapStateToProps - соотносит данные из state в props
* 5. mapDispatchToProps - для функций-пропсов делает вызов функции, которые вызывают dispatch
*   можно исопльзовать bindActionCreator - принимает объект с функциями (actions), которые вызывать dispatch,
*   то есть она просто свернет запись вида:  inc: () => dispatch({type: 'INC'})
*   также вместо bindActionCreator можно сразу передать все actions в connect, тогда connect сам все сделает
*/