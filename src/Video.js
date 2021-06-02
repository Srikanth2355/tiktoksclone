import React , {useRef, useState} from 'react'
import "./Video.css"
import VideoFooter from "./VideoFooter"

function Video() {
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
                src="https://cdn3.sharechat.com/slowProcessed_lb_657388_854a05a_1617494206486_v_500_480.mp4">

            </video>
            <VideoFooter channel="Sri" description="Hahahah" song="xyz" />
        </div>
    )
}

export default Video
