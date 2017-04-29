import Flickr from '../common/api/flickr'
import { PICTURE_FETCHING } from './constants'

export const fetchingPictures = (tags) => ({
    type: PICTURE_FETCHING,
    api: Flickr.getPhotosByTag(tags)
})