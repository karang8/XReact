const TEXT_ELEMENT = "TEXT ELEMENT";

function X(type, attr, ...args) {
  const props = Object.assign({}, attr);
  // const props = JSON.parse(JSON.stringify(attr))
  console.log(props,'props ')
  const hasChildren = args.length > 0;
  const rawChildren = hasChildren ? [].concat(...args) : [];
  console.log(type, args)
  props.children = rawChildren
    .filter(c => c != null && c !== false)
    .map(c => c instanceof Object ? c : createTextElement(c));
  return { type, props };
}

function createTextElement(value) {
  return X(TEXT_ELEMENT, { nodeValue: value });
}
