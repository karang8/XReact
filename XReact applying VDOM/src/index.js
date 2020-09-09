import { createElement, render } from '../XReact/XReact.js';
import App from './appTranspiled.js';

const app = JSX(
  <App title='XReact' />
),
render(app, document.getElementById('root'));