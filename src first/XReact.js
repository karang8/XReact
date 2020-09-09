const XReact = importRender();

function importRender() {
  function render(element, mainDom) {
    console.log(element)
    const { type, props } = element;

    const isTextElement = type === 'TEXT ELEMENT';
    const dom = isTextElement
      ? document.createTextNode(props.textValue)
      : document.createElement(type);

    const childElements = props.children || [];
    childElements.forEach(childElement => render(childElement, dom));
    mainDom.appendChild(dom);
  }
  return {
    render,
  };
}