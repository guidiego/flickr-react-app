import FlickrAPI from 'flickrapi'

class Flickr {
    constructor() {
        this.api = new FlickrAPI({
            api_key: "3b05b1c548a89c1fbcfffab7e3f9a5d3",
            progress: false
        })
    }
    
    photosByTags(tags) {
        new Promise((resolve, reject) => {
            this.api.get('photos.search', { tags: tags }, (err, data) => {
                if (err) return reject(err)
                return resolve(data)
            })
        })
    }
}