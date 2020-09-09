/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import render, { reRender } from './render.js';

const setStateCount = 0;
export default class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  // static render(vdom, parent) {
  //   const props = JSON.parse(JSON.stringify(vdom.props));
  //   console.log(props);
    
  // }
  componentWillMount() {
    return undefined;
  }

  componentDidMount() {
    console.log('here');
    
    return undefined;
  }

  setState(newState) {
    if(this.instance) {
    console.log(newState);
    
    if(Object.keys(newState).sort().join(',')=== Object.keys(this.state).sort().join(',')){
      // alert('same members');
      console.log(this.state,newState)
      this.state = JSON.parse(JSON.stringify(newState));
      console.log(this.state);
      reRender(this.instance,this.render());
  } else {
     Object.keys(newState).map((element) => {
      this.state[element] = newState[element]
     })
     console.log('heree');
     
     reRender(this.instance,this.render());
  }
 }
}

  render() {}
}
