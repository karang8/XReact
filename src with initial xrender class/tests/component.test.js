import React from "../XReact.js";
import Component from "../component.js";
import createElement from "../element.js";

console.log(React);
// React.render(element, document.getElementById("root"));
describe("component render", function() {
  it("should render the components", function() {
    class App {
      constructor() {
        // super(props);
      }
      render() {
        const element = createElement(
          "div",
          {},
          createElement("p", {}, "paraTry")
        );
        return element;
      }
    }
    const app = new App();
    console.log(app.render());
    // React.render('<App />', document.getElementById("root"));
    React.render(app.render(), document.getElementById("root"));

    console.log(document.getElementById("root").innerHTML);
    chai
      .expect(document.getElementById("root").innerHTML)
      .to.equal("<div><p>paraTry</p></div>");
  });
});
