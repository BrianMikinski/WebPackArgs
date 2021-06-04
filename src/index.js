import _ from "lodash";

require("./index.html");

console.log("Hello World!");

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());