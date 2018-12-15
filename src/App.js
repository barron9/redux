import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
class App extends Component {

componentDidMount(){

  this.props.dispatch({type:'INC'})
}
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <p >
            <code className={this.props.count>9999?"SAYKUCUK":"SAY"}>{this.props.count}</code> 
          </p>


        </header>
      </div>
    );
  }
}
//const mapdispatchtoprops = ()
const mapstatetoprops=(state)=>({
  count:state.count
} )

export default connect(mapstatetoprops)(App);
