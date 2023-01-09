import {html, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js'

/**
 * @typedef {"list" | "single"} view
 */

class Component extends LitElement {

    static get properties(){
        return{
            active: {}, 
        }
    }
    constructor() {
        super()

        /** @type {view} */
        this.active = 'List'
    }

    loadSingle()
    {
        this.acctive = 'single'
    }

    loadList()
    {
        this.acctive = 'list'
    }
    
    render(){
        if(this.active === 'list'){
            return html `
                <div>
                    <button @click = "${this.loadList}"> Go to list</button>
                    <podcast-view-list></podcast-view-list> 
                </div>`
        }

        if(this.active == 'single'){
            return html `
                <div> 
                    <button @click = "${this.loadSingle}"> Go to single</button>
                    <podcast-view-list></podcast-view-single>
                </div>`
            throw new Error('Invalid view active')
        }

    }

}

customElements.define('podcast-app', Component)