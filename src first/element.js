 let count = 0;

 function X(tag, ...child) {
    // console.log(child)
    let childrenArr = [];
        if(child.length>0) {
        childrenArr = [].concat(...child)
    } else {
        childrenArr = [];
    }  
    console.log(tag, childrenArr,count++)
  
    props.children = rawChildren
    .filter(c => c != null && c !== false)
    .map(c => c instanceof Object ? c : createTextElement(c));
       // return { type, props };
  if(typeof child==='string') {    
    const element = {
      type : tag,
      props: {
        children: [
            textElement(child)
        ]
      }
    }
    return element; 
  } else if(typeof child==='object') {
    
      const element = {
          type: tag,
          props: {
              children:[
            child.props.children[0].props.textValue ? 
            X(child.type, child.props.children[0].props.textValue):
            X(child.type, child.props.children[0])
            ]
          },
      }
      return element;
  }

  }

  function textElement(child) {
      return {
          type:'TEXT ELEMENT',
          props:{textValue: child}
      }
  }