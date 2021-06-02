import {useState, useEffect} from 'react'
import './App.css';
import Video from "./Video";
import db from "./firebase"

function App() {
  const [videos,setvideos] = useState([])
  useEffect(() => {
      db.collection('videos').onSnapshot(snapshot => (
        setvideos(snapshot.docs.map(doc=>doc.data()))
      ))
  }, [videos])
  return (
    <div className="app">
      <div className="app_videos">
      {videos.map(({url, channel, description, song, likes, messages, shares}) => (
        <Video 
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}
        />
      ))}

      </div>
    </div>
  );
}

export default App;
