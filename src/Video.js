import React , {useRef, useState} from 'react'
import "./Video.css"
import VideoFooter from "./VideoFooter"
import VideoSidebar from "./VideoSidebar"

function Video({url, channel, description, song, likes, messages, shares}) {
    const [playing, setplaying] = useState(false);
    const videoRef = useRef(null);
    const onvideopress =() => {
        if(playing){
            videoRef.current.pause();
            setplaying(false);
        }else {
            videoRef.current.play();
            setplaying(true);
        }
    };
    return (
        <div className="video">
            <video 
                loop
                onClick={onvideopress}
                ref={videoRef}
                className="video__player" 
                src={url}>

            </video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} messages={messages} shares={shares} />
        </div>
    )
}

export default Video
