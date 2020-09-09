import { Component, createElement } from '../XReact/XReact.js';
import { dispatch, getState } from '../store.js';

const TEXT_ELEMENT = 'TEXT_ELEMENT';


export default class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return JSX(
        <button onClick={this.props.buttonClick}>Button</button>
    );
  }
}