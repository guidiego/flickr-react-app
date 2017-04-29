import {
    PICTURE_FETCHING,
    PICTURE_FETCH_SUCCESS,
    PICTURE_FETCH_FAIL,
} from './constants'

export const initialState = {}

export const fetchingPictures = (payload, state) => state.set('loading', true);

export const fetchPicturesSuccess = (payload, state) => state.withMutations((ctx) => {
  ctx.set('loading', false);
  console.log(payload)
  //ctx.set('Picturess', List(payload.data.data));
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
        default:
            return state
    }
}