import { createElement, render } from '../XReact/XReact.js';
import App from './appTranspiled.js';
import { subscribe } from '../store.js';


const app = JSX(
  <App title='XReact' />
),
render(app, document.getElementById('root'));