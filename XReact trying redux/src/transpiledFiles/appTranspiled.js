/* eslint-disable import/extensions */
import { Component, createElement, render } from '../XReact/XReact.js';
import ChildComponent from './childComponentTranspiled.js';
import { dispatch, getState } from '../store.js';

const TEXT_ELEMENT = 'TEXT_ELEMENT';

export default class App extends Component {
  constructor(props){
    super(props);
    this.handleInc = this.handleInc.bind(this);
  }
  handleInc() {
    this.dispatch({
      type: 'INC',
    });
  }
  render() {
    return  createElement('div', { class:"App", }, createElement('h1', {}, createElement(TEXT_ELEMENT, { textValue:getState().counter, }))
                    , createElement(ChildComponent, { buttonClick:this.handleInc, }))
  }
}
 