/* eslint-disable import/extensions */
import { Component, createElement, render } from '../XReact/XReact.js';
import ChildComponent from './childComponentTranspiled.js';

const TEXT_ELEMENT = 'TEXT_ELEMENT';

export default class App extends Component {
constructor(props){
  super(props);
  this.state={
    counter:0,
    input:''
  }
  this.handleClick=this.handleClick.bind(this);
  this.handleInput=this.handleInput.bind(this);
}
  componentDidMount() {
    console.log('here');
    
      this.setState({
          counter:100000,
      })
  }
  handleInput(e) {
    console.log(e.target.value);
    this.setState({
      input:e.target.value
    })
  }
    
  handleClick() {
    this.setState({
      counter:this.state.counter+1,
    })
  }
  render() {
    return  createElement('div', {}, createElement('ul', {}, createElement('li', {}, createElement(TEXT_ELEMENT, { textValue:this.state.counter, })))
                    , createElement('p', {}, createElement(TEXT_ELEMENT, { textValue:this.state.input, }))
                    , createElement('input', { oninput:(e)=>{this.handleInput(e)}, })
                    , createElement(ChildComponent, { buttonClick:this.handleClick, }))  }
}
 