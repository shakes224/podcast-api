/**
 * @typedef {object} preview
 * @property {string} id
 * @property {string} title
 * @property {number} seasons
 * @property {string[]} image
 * @property {string} genres
 * @property {string} updated
 */

/**
 * @typedef {object} episodes
 * @property {number} episode
 * @property {string} decription
 * @property {string} title
 * @property {string} file
 */

/**
 * @typedef {object} season
 * @property {string} season
 * @property {string} title
 * @property {number} image
 * @property {episodes[]} episodes
 */

/**
 * @property {object} show
 * @property {string} id
 * @property {string} title
 * @property {season[]} seasons
 * @property {string} image
 * @property {string} genres
 * @property {string} updated
 * 
 */

const listHtml = document.querySelector('#list')

const getAllPodcasts = async () => {
    const response = await fetch('https://podcast-api.netlify.app/shows')

    if(!response.ok)
    {
        listHtml.innerText ='Something went wrong!'
        return
    }
    /** @typedef {preview[]} */
    const data = await response.json()

    let newHtml =''

    for (const {id, title, seasons} of data)
    {
        newHtml = `
            ${newHtml} 
                <li>
                    <button data-preview-button="${id}">${title}</button>
                    <span> (${seasons})</span>
                </li>`
    }

    listHtml.innerHTML = newHtml
}


/**
 * @param {string} id
 * 
 */
const getSinglePodcast = async (id) => {
    const response = aawait fetch(`https://podcast-api.netlify.app/id/${id}`)
    
    if(!response.ok)
    {
        listHtml.innerText ='Something went wrong!'
        return
    }

    /** @type  {show} */

    const data = await response.json()

    let seasonsList = ''

    for (const {title} of data.seasons){
        listHtml.innerHTML = `
        ${seasonsList}
        <ul>
        </ul>
    `
    }
}

document.body.addEventListener('click', (event) => {
    const {previewButton} = event.target.dataset
    if (previewButton) return

    listHtml.innerHTML = `Loading ${previewButton}...`
})

getAllPodcasts()
