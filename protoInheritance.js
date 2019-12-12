function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function HtmlElement() {
  this.click = () => console.log('Element Clicked.');
}

HtmlElement.prototype.focus = () => console.log('Element Focued.');

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = item => this.items.push(item);
  this.removeItem = item => this.items.splice(this.items.indexOf(item), 1);
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlSelectElement.prototype.click = () => console.log('Select Clicked.');
HtmlSelectElement.prototype.focus = () => console.log('Select Focued.');

const e = new HtmlElement();
const s = new HtmlSelectElement();