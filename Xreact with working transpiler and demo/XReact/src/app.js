/* eslint-disable import/extensions */
import { Component, createElement, render } from './XReact/XReact.js';
import ChildComponent from './childComponentTranspiled.js';

const TEXT_ELEMENT = 'TEXT_ELEMENT';

export default class App extends Component {
constructor(props){
  super(props);
  this.state={
    counter:0,
  }
  this.handleClick=this.handleClick.bind(this);
}
componentDidMount() {
  this.setState({
    counter:5,
  })
}
  handleClick() {
    this.setState({counter:this.state.counter+1,})
  }
  render() {
    return JSX(
      <div>
        <ul>
          <li>{this.state.counter}</li>
        </ul>
        <ChildComponent buttonClick={this.handleClick}/>
      </div>
    )
  }
}

