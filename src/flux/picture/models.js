import { Record, List } from 'immutable'

export class PictureModel extends Record({
    id: 0,
    thumbnail: "",
    title: "",
    owner: "",
    link: "",
    date: "",
    tags: new List()
}) {
    constructor(props) {
        props.thumbnail = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}_z.jpg`
        props.link = `https://www.flickr.com/photos/${props.owner.username}/${props.id}`
        props.date = props.dates.taken
        props.owner = props.owner.realname
        props.tags = props.tags.tag
        props.title = props.title._content
        
        super(props)   
    }
}

    
