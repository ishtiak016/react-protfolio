import React, { useEffect, useRef } from "react";
import videod from "../../assets/video-mp.mp4";
import "./VideoPlayer.css";
const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const videoRef = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5; // Set volume to 50%
      if (!playState) {
        videoRef.current.pause();
      }
    }
  }, [playState]);
  return (
    <div
      className={`video-player ${playState ? "" : "hide"} `}
      onClick={closePlayer}
      ref={player}
    >
      <video ref={videoRef} src={videod} autoFocus autoPlay controls></video>
    </div>
  );
};

export default VideoPlayer;
