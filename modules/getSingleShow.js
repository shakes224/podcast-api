/**
 * @typedef {object} episode
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
 * @property {episode[]} episodes
 */

/**
 * @typedef {object} show
 * @property {string} id
 * @property {string} title
 * @property {season[]} seasons
 * @property {string} image
 * @property {string} genres
 * @property {string} updated
 * 
 */

/**
 * @param {string} id
 * @returns {Promise<string>}
 * 
 */
export const getSingleShow = async (id) => {
    const response = await fetch(`https://podcast-api.netlify.app/id/${id}`)
    
    if(!response.ok)
    {
        return '<div>Something went wrong!</div>'
    }

    /** @type {show} */

    const data = await response.json()

    const result = data.seasons.map(({ image, title}) => {
        return`
        <li>
            <img src="${image}" width="100" height="100"
            ${title}
        </li> `
    })


    return `
    <button data-action="back">back<button></button>
        <h2>${data.title}</h2>
        <ul>${result.join('\n')}</ul> 
        `
}

export default getSingleShow
