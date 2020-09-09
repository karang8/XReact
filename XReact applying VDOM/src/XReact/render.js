/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { renderObjectElement, renderReactElement } from './render-utils.js';

let rootReactElement;
let rootDOM
let rootDOMObject;
let vDOM;
let reactElementCount = 0;
export default function render(element, mainDom) {
  if (typeof element.type === 'function') {
    // if (reactElementCount < 1) {
      console.log(element.type);
      rootDOM = mainDom;
      rootReactElement = renderReactElement(element);
      if(rootReactElement._id===0) {
      rootDOMObject = rootReactElement.render();
    }
      console.log(rootReactElement._id);
      reactElementCount += 1;
      //vDOM = rootReactElement.render()
      render(rootReactElement.render(), rootDOM);
      rootReactElement.componentDidMount();
    // } else {
      // render(renderReactElement(element).render(), mainDom);
    // }
  } else {
    const { childElements, dom } = renderObjectElement(element);
    console.log(childElements,rootDOMObject); 
    childElements.forEach((childElement) => {
      console.log(childElement);
      render(childElement, dom)
    });
    // vDOM.appendChild(dom);
    // return dom;
    mainDom.appendChild(dom);
  }
}

export function reRender(element, dom, vdom) {
  if (typeof element.type === 'function') {

  } else {

  }
}

// reRendering
export function renderAgain() {
  console.log(rootDOMObject,vDOM);
  rootDOMObject.props.children.map((ele)=>{
    vDOM.map((ele2)=>{
      if(ele.type===ele2.type) {
          for(let item of rootDOM.children){
            if(item.tagName===ele.type.toUpperCase()){
              console.log(ele,ele2);
              
              // rootDOM.replaceChild(item,)
            }
          }

          
        render(ele,rootDOM)
      }
    })
  })
    while (rootDOM.hasChildNodes()) {
      rootDOM.removeChild(rootDOM.lastChild);
    }
    render(rootReactElement.render(), rootDOM);
}
