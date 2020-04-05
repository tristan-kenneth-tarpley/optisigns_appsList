
const test = () => {
    let p = document.createElement('p')
    p.textContent = 'hello'
  
    return p
}

class AppsList extends HTMLElement {
    constructor() {
      super();
    }
  
    static get observedAttributes() {
      return ['data'];
    }
  
    attributeChangedCallback(value, old, new_val) {
      console.log('called')
      console.log(JSON.parse(new_val))
    }
  
    connectedCallback() {
      this.appendChild(test())
    }
}

customElements.define('apps-list', AppsList);
  