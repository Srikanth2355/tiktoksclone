import React,{useState} from 'react'
import "./VideoSidebar.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MessageIcon from '@material-ui/icons/Message';

function VideoSidebar({ likes, shares, messages }) {
    const [liked, setliked] =useState(false)
    return (
        <div className="videosidebar">
            <div className="videosidebar__button">
            {liked ? (<FavoriteIcon  onClick={e => setliked(false)} />) : (<FavoriteBorderIcon onClick={e => setliked(true)} />)}
                <p>{liked ? likes+1 : likes}</p>
            </div>
            <div className="videosidebar__button">
                <MessageIcon />
                <p>{messages}</p>
            </div> <div className="videosidebar__button">
                <ShareIcon />
                <p>{shares}</p>
            </div>
            
        </div>
    )
}

export default VideoSidebar
