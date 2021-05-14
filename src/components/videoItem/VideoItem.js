import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import './video_item.scss';

const VideoItem = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/7TuZFZ8bgmI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcJtSlIWccQ4wtJBHD-wfSUEWTLw"
          alt="hola"/>
        <span>05:18</span>
      </div>
      <div className="video__title">
        bla bla bla bla  shhsjsjjss shhsjs shsjsjskksksks hshhjjsjssk hsshsj
      </div>
      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AAUvwniqHMFoLXPnpESjBJVEHk5k3t6j8NLO5SHM1PCWqQ=s68-c-k-c0x00ffffff-no-rj"
          alt="ghdjd"/>
        <span>My Channel</span>
      </div>
      <div className="video__details">
        <span>
          <AiFillEye/> 8M Views
        </span>
        <span>
          1 month ago
        </span>
      </div>
    </div>
  );
};

export default VideoItem;
