import Flickr from '../common/api/flickr'
import { 
    PICTURE_FETCHING,
    PICTURE_FETCH_SUCCESS,
    PICTURE_FETCH_FAIL,
    PICTURE_TAG_UPDATE,
} from './constants'

export const fetchingPictures = (tags, page) => ({
    type: [PICTURE_FETCHING, PICTURE_FETCH_SUCCESS, PICTURE_FETCH_FAIL],
    client: Flickr.getPhotos(tags, page)
})

export const updateTag = (tag) => ({
    type: PICTURE_TAG_UPDATE,
    payload: { tag }
})