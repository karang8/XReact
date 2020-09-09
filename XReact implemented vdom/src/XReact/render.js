/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { renderObjectElement, renderReactElement } from './render-utils.js';
import {Component} from './XReact.js'

let rootReactElement;
let rootDOM;
let reactElementCount = 0;
export default function render(element, mainDom) {
  if (typeof element.type === 'function') {
    if (reactElementCount < 1) {
      rootDOM = mainDom;
      rootReactElement = renderReactElement(element);
      reactElementCount += 1;
      rootReactElement.instance = render(rootReactElement.render(), rootDOM);
      rootReactElement.instance.__element = rootReactElement;
      console.log(rootReactElement);
      rootReactElement.componentDidMount();
    } else {
      render(renderReactElement(element).render(), mainDom);
    }
  } else {
    const { childElements, dom } = renderObjectElement(element);
    childElements.forEach(childElement => render(childElement, dom));
    childElements;
    return mainDom.appendChild(dom);
  }
}

export function reRender(dom, vdom, parent=dom.parentNode) {
  if (typeof vdom.type === 'function') {
    const props = JSON.parse(JSON.stringify(vdom.props));
    if(dom.__element){
      dom.__element.props = props;
      return reRender(dom, dom.__element.render(), parent);
    }
  } else {
      if(typeof vdom == 'object' && dom instanceof Text) {
          if(vdom.type='TEXT_ELEMENT') {
            if(vdom.props.textValue!==dom.textValue){
              parent.replaceChild(render(vdom, parent),dom);
          }  
        } 
      } else if (typeof vdom == 'object' && dom.nodeName != vdom.type.toUpperCase()) {
        parent.replaceChild(render(vdom, parent), dom);
      } else if (typeof vdom == 'object' && dom.nodeName == vdom.type.toUpperCase()) { 
        const tagsPool = {};
        const active = document.activeElement;
        [].concat(...dom.childNodes).map((child, index) => {
            const key = `__index_${index}`;
            tagsPool[key] = child;
        });
        console.log(vdom.props);
        [].concat(...vdom.props.children).map((child, index) => {
            const key = child.props && child.props.key || `__index_${index}`;
            console.log(tagsPool[key]);
            
            tagsPool[key] ? reRender(tagsPool[key], child) : render(child, dom);
            delete tagsPool[key];
        });
        for (const key in tagsPool) {
            const instance = tagsPool[key].__element;
            if (instance) instance.componentWillUnmount();
            tagsPool[key].remove();
        }

        for (const attr of dom.attributes) dom.removeAttribute(attr.name);
        for (const prop in vdom.props) setAttribute(dom, prop, vdom.props[prop]);
        active.focus();
        return dom;
      } 
}
}

const setAttribute = (dom, key, value) => {
  console.log(key,value);
  if (typeof value == 'function' && key.startsWith('on')) {
      const eventType = key.slice(2).toLowerCase();      
      dom.__handlers = dom.__handlers || {};
      dom.removeEventListener(eventType, dom.__handlers[eventType]);
      dom.__handlers[eventType] = value;
      dom.addEventListener(eventType, dom.__handlers[eventType]);
  } 
}