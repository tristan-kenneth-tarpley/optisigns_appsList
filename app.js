
const test = () => {
    let p = document.createElement('p')
    p.textContent = 'hello'

    return p
}

const styles = () => {
    let el = document.createElement('div')
    /*html*/
    el.innerHTML = `
    <style>
        p {
            color: green;
        }
    </style>
    `

    return el
}


const temp_data = [
    {
        headline: "Facebook",
        description: "facebook.png",
        _id: "5031504c-7a70-4974-9bdd-8869e9dd7d4b",
        _owner: "5e8d4f1f-af10-4c8b-af7e-f53a2a6ecd93",
        _createdDate: "2020-04-05T21:09:30.180Z",
        description1: "Create a Facebook wall and showcase your Facebook like feed.",
        _updatedDate: "2020-04-05T21:09:30.180Z",
        thumbnail: "wix:image://v1/5e8d4f_20a4076ec7e64bf8ae6c7b5f5d1f3b86~mv2.png/facebook.png#originWidth=196&originHeight=196",
        link: "https://www.optisigns.com/app-facebook",
        title: "Facebook",
    }
]

class AppsList extends HTMLElement {
    constructor() {
        super();
        this.data = temp_data
    }

    static get observedAttributes() {
        return ['data'];
    }

    attributeChangedCallback(value, old, new_val) {
        console.log('called')
        this.data = JSON.parse(new_val.items)
    }

    view_controller(el){
        return el
    }

    render(){
        console.log(this.data)
        this.append(test())
    }

    connectedCallback() {
        this.appendChild(styles())
        this.render()
    }
}


customElements.define('apps-list', AppsList);