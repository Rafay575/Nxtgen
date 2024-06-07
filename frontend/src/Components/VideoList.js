import React from "react";
import YouTube from "react-youtube";

const VideoList = () => {
  const videoData = [
    {
      id: "L-jXxX1h1d4",
    },
    {
      id: "0i7NS4UMfqM",
    },

  ];
  const opts = {
    height: "100%", // These values are overridden by className, but are necessary
    width: "100%", // to prevent console warnings or errors.
  };

  return (
    <>
      
      <div className="flex justify-center items-center py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-4/5">
          {videoData.map((video, index) => (
            <div key={index} className="">
              <YouTube
                videoId={video.id}
                className="cols-span-1"
                opts={opts}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoList;