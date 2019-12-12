function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function HtmlElement() {
  this.click = () => console.log('Element Clicked.');
}

// This is a method defined in HtmlElement PROTOTYPE (its parent object.)
HtmlElement.prototype.focus = () => console.log('Element Focued.');

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = item => this.items.push(item);
  this.removeItem = item => this.items.splice(this.items.indexOf(item), 1);
  this.render = () => {
    return `
    <select>${this.items.map(item => `
      <option>${item}</option>`).join('')}
    </select>`;
  }
}


// Manually set once we want the click method which is defined in HtmlElement INSTANCE.
// Otherwise we would gain access only to focus method.
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

HtmlSelectElement.prototype.click = () => console.log('Select Clicked.');
HtmlSelectElement.prototype.focus = () => console.log('Select Focued.');

const e = new HtmlElement();
const s = new HtmlSelectElement([1,2,3]);

function HtmlImageElement(src = "http://linkedin.com/in/joaoramires") {
  this.src = src;
  this.render = () => `<img src="${this.src}" />`
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const i = new HtmlImageElement();

const elements = [
  new HtmlSelectElement([4,5,6,]),
  new HtmlImageElement('http://')
]

// Look how render behaves diff depending on the element nature.
for (let element of elements)
  console.log(element.render());