export type preview = {
    id: string
    title: string
    seasons: number
    image: string
    genres: string
    updated: string
}

export type episode = {
    episode: number
    description: string
    title: string
    file: string
}

export type season = {
    season: number
    title: string
    image: string
    episodes: episode[]
}

export type show = {
    id: string
    title: string
    season: season[]
    image: string
    genres: string
    updated: string
}
export type view = 'list' | 'single'

export type state = {
    active: view
    previews: preview[]
    single: null | show
}
// /**
//  * @typedef {object} preview
//  * @property {string} id
//  * @property {string} title
//  * @property {number} seasons
//  * @property {string[]} image
//  * @property {string} genres
//  * @property {string} updated
//  */

// /**
//  * @typedef {object} episode
//  * @property {number} episode
//  * @property {string} decription
//  * @property {string} title
//  * @property {string} file
//  */

// /**
//  * @typedef {object} season
//  * @property {string} season
//  * @property {string} title
//  * @property {number} image
//  * @property {episode[]} episodes
//  */

// /**
//  * @typedef {object} show
//  * @property {string} id
//  * @property {string} title
//  * @property {season[]} seasons
//  * @property {string} image
//  * @property {string} genres
//  * @property {string} updated
//  */