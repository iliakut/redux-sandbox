/*
* самописный redux
* reducer - функция, которая принимает два значение
* текущее состояние и экшен (дейтсвие), которое нужно совершить
* action - объект у которое етсь тип
* в зависимости от дима выполняется что-л.
* если action.type неизвестен, то нужно вернуть стейт
* если стейт undefined - нужно вернуть initialState
*/

const reducer = (state = 0, action) => {
  switch (action.type === 'INC') {
    case 'INC':
      return state + 1;

    default:
      return state;
  }
};

let state = reducer(undefined, {});

state = reducer(state, {type: 'INC'});
console.log(state);
state = reducer(state, {type: 'INC'});
console.log(state);
