import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
const baslangicdeger ={
count:0

}
const reducer= (state = baslangicdeger,action) =>{
switch(action.type){
    case 'INC':
    return {
        count:state.count+1
    }
    default:
    return state
}
}
function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action)
  
      // Call the next dispatch method in the middleware chain.
      next(action)
  
      console.log('state after dispatch', getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return true
    }
  }
const store= createStore(reducer,{count:0},applyMiddleware(logger))
console.log(store.getState())


//setInterval(()=>{
//store.dispatch({type:'INC'})
//console.log(store.getState())

//},10)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
