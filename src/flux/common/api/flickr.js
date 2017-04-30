import asy from 'async'

class Flickr {
    constructor() {
        this.key = '3b05b1c548a89c1fbcfffab7e3f9a5d3'
    }
    
    url(method, params) {
        const baseUri = 'https://api.flickr.com/services/rest/?';
        const format = '&format=json&nojsoncallback=1';
        
        params = Object.keys(params).map(k => `&${k}=${params[k]}`).join("")
        
        return `${baseUri}&method=flickr.${method}&api_key=${this.key}${format}${params}`
    }
    
    photosByTags(tags, page) {
        return new Promise((resolve, reject) => {
            fetch(
                this.url('photos.search', { tags, page, 'per_page': 20, 'privacy_filter': 1 }),
                { method: 'GET', headers: { Accept: 'application/json' }}
            )
            .then(res => res.json().then(json => resolve(json.photos)))
            .catch(reject)
        })
    }
    
    photoInformation(photo_id, secret) {
        return new Promise((resolve, reject) => {
           fetch(
                this.url('photos.getInfo', { photo_id, secret }),
                { method: 'GET', headers: { Accept: 'application/json' }}
            )
            .then(res => res.json().then(json => resolve(json.photo)))
            .catch(reject)
        })
    }
    
    getPhotos(tags, page) {
        return new Promise((resolve, reject) => {
            this.photosByTags(tags, page).then(results => {
                asy.mapSeries(results.photo, (photo, cb) => {
                    this.photoInformation(photo.id, photo.secret)
                        .then(info => cb(null, info))
                        .catch(err => cb(err, null))
                }, (err, results) => {
                    if (err) throw err
                    resolve(results)
                })
            }).catch(err => {
                throw err
            })    
        })
    }
}

export default new Flickr()