import React, { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyAalE5MEJOs5bxdsl-RZDNDQ4hMgx8K3kY';
const VIDEO_ID = 'idYUy3hf3D0';

const VideoPlayer = () => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${VIDEO_ID}&key=${API_KEY}`
        );

        if (response.ok) {
          const data = await response.json();
          if (data.items.length > 0) {
            setVideo(data.items[0]);
          }
        } else {
          console.error('Error fetching video');
        }
      } catch (error) {
        console.error('Error fetching video', error);
      }
    };

    fetchVideo();
  }, []);

  return (
    <div>
      {video ? (
        <>
          <h2>{video.snippet.title}</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${VIDEO_ID}`}
            title={video.snippet.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default VideoPlayer;

