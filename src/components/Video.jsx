import React from "react";

const Video = ({ src }) => {
  return (
    <video src={src} autoPlay muted className="video-element w-auto h-auto">
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
