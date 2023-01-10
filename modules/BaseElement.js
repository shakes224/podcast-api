export class BaseElement extends LitElement {

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
}