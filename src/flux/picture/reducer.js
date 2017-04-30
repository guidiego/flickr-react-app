import { Map, List } from 'immutable'
import { PictureModel } from './models'

import {
    PICTURE_FETCHING,
    PICTURE_FETCH_SUCCESS,
    PICTURE_FETCH_FAIL,
    PICTURE_TAG_UPDATE,
} from './constants'

export const initialState = new Map({
    tag: "",
    page: 1,
    loading: false,
    errors: new List(),
    list: new List(),
})

export const updateTag = ({ tag }, state) => state.set('tag', tag);

export const fetchingPictures = (payload, state) => state.set('loading', true);

export const fetchPicturesSuccess = (payload, state) => state.withMutations((ctx) => {
    let photoList = new List(payload.map(p => new PictureModel(p)))

    ctx.set('loading', false);
    ctx.set('page', state.get('page') + 1)
    ctx.set('list', ctx.get('list').concat(photoList))
});

export const fetchPicturesFail = (payload, state) => state.set('loading', false);

export default (state = initialState, { type, payload, ...others}) => {
    switch(type) {
        case PICTURE_FETCHING:
            return fetchingPictures(payload, state, others)
        case PICTURE_FETCH_SUCCESS:
            return fetchPicturesSuccess(payload, state, others)
        case PICTURE_FETCH_FAIL:
            return fetchPicturesFail(payload, state, others)
        case PICTURE_TAG_UPDATE:
            return updateTag(payload, state)
        default:
            return state
    }
}