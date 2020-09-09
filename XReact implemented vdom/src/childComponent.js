import { Component, createElement } from '../XReact/XReact.js';

const TEXT_ELEMENT = 'TEXT_ELEMENT';

export default class App extends Component {
  render() {
    return JSX(
        <button onClick={this.props.buttonClick}>Button</button>
    )     
  }
}