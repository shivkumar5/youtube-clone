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
            <div key={i + 'i'}
              style={{ marginBottom: 16 }}>
              <VideoItem />
            </div>
          );
        })
      }
    </div>
  );
};

export default Home;
