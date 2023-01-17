import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './watchVideo.css';

function WatchVideo({ match }) {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/watch/${match.params.courseId}/${match.params.videoId}`)
      .then((res) => {
        setVideo(res.data);
      })
      .catch((err) => console.log(err));
  }, [match]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="watch-video">
      <h1>{video.title}</h1>
      <video controls src={video.url}></video>
    </div>
  );
}

export default WatchVideo;
