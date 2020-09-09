/* eslint-disable import/extensions */
import { Component, createElement, render } from './XReact/XReact.js';
import First from './firstChildComponent.js';
import Second from './secondChildComponent.js';
const TEXT_ELEMENT = 'TEXT_ELEMENT';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 0,
      addedItems:[],
      searchedItems:[],
    };
    this.handleChange = this.handleChange.bind(this)
  const globe =this;

  }

  handleClick() {
    this.setState({ 
      counter: this.state.counter + 1,
    });
  }

  handleAlertClick() {
    alert('This onClick passed using props')
  }

  handleChange(e) {
    // const ele = document.getElementById('name');
    console.log(e.target.value)
    this.setState({
      counter: this.state.counter,
      addedItems: this.state.addedItems.push(e.target.value),
      searchedItems:this.state.searchedItems,
    })
    console.log();
  }

  handleSearch(e) {
    // const ele = document.getElementById('name');
    console.log(e.target.value)
    // const items = this.state.addedItems.filter((element)=>{
    //     if(element===e.target.value)
    //         return element;
    // })
    let element = document.getElementById('search');
    let searching = this.state.addedItems.filter(ele=> ele.search(e.target.value) ===0);
    searching.map((ele)=>{
        
        let node = document.createElement('li');
        let textNode = document.createTextNode(ele);
        node.appendChild(textNode);
        element.appendChild(node);
        console.log(element)
    })
    // console.log(element);
    // this.setState({
    //   counter: this.state.counter,
    //   addedItems: this.state.addedItems,
    //   searchedItems:this.state.addedItems.filter(ele=> ele.search(e.target.value) ===0),
    // })
    // console.log(this.state);
  }

  render() {
    console.log(this.state);
    const addedItems = []
    if(this.state.addedItems!== undefined) {
    this.state.addedItems.map((element)=>{
      addedItems.push(createElement('li',{},element))
    })}

    const searchedItems = []
    if(this.state.searchedItems!== undefined) {
    this.state.searchedItems.map((element)=>{
      searchedItems.push(createElement('li',{},element))
    })}

    return createElement(
      'div',
      {},
      createElement('h1', {}, this.props.title),
      createElement('input',{id:'name', onChange:(e)=>{ this.handleChange(e) }},),
      createElement('input',{id:'search', type:'text', oninput:(e)=>{ this.handleSearch(e) }},),
      createElement('h3', {}, 'Added items'),
      createElement(
        'ul',
        {},
        addedItems,
        // createElement('li', {}, this.state.counter),
        // createElement(
        //   'li',
        //   {},
        //   createElement(First, { handleAlertClick: this.props.onClick }, null),
        // ),
        // createElement(Second, { handleAddClick: this.handleClick.bind(this) }, null),
      ),
      createElement('h3', {}, 'Searched items'),
      createElement(
        'ul',
        {id:'search'},
        // searchedItems,
      ),
    );
  }
}
