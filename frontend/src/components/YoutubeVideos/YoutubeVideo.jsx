import React, { useEffect, useState } from "react";
import "./YoutubeVideo.css";

const YoutubeVideo = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    //here we used static data you can change to dynamic using url w/c you found from apple youtube
    fetch("/youtubeapple.json")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
        console.log(videos);
      });
  }, []);
  // console.log(videos);
  return (
    <div className="allVideosWrapper">
      {/* video section */}
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wrapper bold video-title-wrapper">
              <h1>Latest Videos</h1>
            </div>
          </div>
          {videos.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let allVideos = (
              <div key={i} className="col-sm-12 col-md-6">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return allVideos;
          })}
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;
