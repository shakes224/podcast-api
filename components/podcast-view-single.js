import {html, LitElement, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js'
import {store} from '../store.js'
class Component extends LitElement {
    static get properties(){
        return{
            single: { state: true }, 
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
        if(this.single === state.single) return
        this.single = state.single

    }

    disconnectedCallback() {
        store.unsuscribe(this.storeChange)
    }

    static styles = css`
    h1 {
       color: purple;
    }
    
    img {
        width: 100px;
        height: 100px;
    }
    `;

    render(){
        /**
         * @type {import('../types.ts').show}
         */
        const show = this.single
        const list = previews.map(({ title }) => {
            return html `
                <h1>
                    ${show.title || ''}
                </h1>
                
                <img src = "${show.image}">
                `

        })
    }
}
customElements.define('podcast-view-singl', Component)