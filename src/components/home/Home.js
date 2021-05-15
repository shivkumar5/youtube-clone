import React from 'react';
import VideoItem from '../videoItem/VideoItem';
import './home.scss';

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'flex-start'
    }}>
      {
        [...new Array(20)].map((item, i) => {
          return (
              <VideoItem key={i + 'i'}/>
          );
        })
      }
    </div>
  );
};

export default Home;
