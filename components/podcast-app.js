import {html, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js'
import {store} from '../store.js'
/**
 * @typedef {"list" | "single"} view
 */

class Component extends LitElement {
    static get properties(){
        return{
            phase: { state: true }, 
        }
    }

     /**
     * store connectors below
     */
     constructor() {
        super()
        this.pahse === 'loading'
        const state = store.suscribe(this.storeChange)
        this.storeChange(state)
    }

    /**
     * 
     * @param {import('../types').state} state 
     */

    storeChange = (state) => {
        if(this.phase === state.phase) return
        this.pahse = state.phase 

    }

    disconnectedCallback() {
        store.unsuscribe(this.storeChange)
    }

    render(){
        switch(this.phase) {
            case 'loading': return html  `<div>Loading...</div>`
            case 'error': return html  `<div>Loading...</div>`
            case 'list': return html  `<div>Loading...</div>`
            case 'single': return html  `<div>Loading...</div>`
            default: throw new Error('Ínvalid phase')
        }
        
        // const loadSingleHandler = () => store.loadSingle('10182')
        // const loadListeHandler = () => store.loadList()

        if (this.pahse === 'loading'){
            return html `<div>Loading...</div>`
        }

        if(this.phase === 'error'){
            return html `<div>Something went wrong!</div>`
        }

        if(this.pahse === 'list'){
            return html `
                <div>
                    <button @click = "${store.laodSingle}"> Go to list</button>
                    <podcast-view-list></podcast-view-list> 
                </div>`
        }
        throw new Error('Invalid view active')
    }
}

customElements.define('podcast-app', Component)