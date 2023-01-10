import {html, LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js'
import {store} from '../store.js'
class Component extends LitElement {
    static get properties(){
        return{
            previews: { state: true }, 
        }
    }
     constructor() {
        super()
        this.previews === 'loading'
        const state = store.suscribe(this.storeChange)
        this.storeChange(state)
    }
    /**
     * 
     * @param {import('../types').state} state 
     */

    storeChange = (state) => {
        if(this.previews === state.previews) return
        this.previews = state.previews

    }

    disconnectedCallback() {
        store.unsuscribe(this.storeChange)
    }

    

    render(){
        /**
         * @type {import('../types.ts').preview[]}
         */
        const preview = this.previews
        const list = previews.map(({ title }) => {
            return html `<li>${title}</li>`

        })
        return html `
            <ul>
                ${list}
            </ul>`
    }
}
customElements.define('podcast-view-list', Component)