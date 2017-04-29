import { Record, List } from 'immutable'

export const PictureModel = new Record({
    thumbnail: "",
    title: "",
    owner: "",
    link: "",
    date: "",
    tags: new List()
})