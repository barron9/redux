import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
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
const store= createStore(reducer)
console.log(store.getState())


//setInterval(()=>{
//store.dispatch({type:'INC'})
//console.log(store.getState())

//},10)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
