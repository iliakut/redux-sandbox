import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";

const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button className="btn btn-primary btn-large" onClick={dec}>DEC</button>
      <button className="btn btn-primary btn-large" onClick={inc}>INC</button>
      <button className="btn btn-primary btn-large" onClick={rnd}>RND</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

/*const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch({type: 'INC'}),
    dec: () => dispatch({type: 'DEC'}),
    rnd: () => dispatch({type: 'RND'}),
  }
};*/

/*const mapDispatchToProps = (dispatch) => {
   return bindActionCreators(actions, dispatch);
};
// если передать в коннект actions то он сам сделает mapDispatchToProps*/

export default connect(mapStateToProps, actions)(Counter);
