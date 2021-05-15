import React from 'react';
import '../../videoItem/video_item.scss';
function SearchTile () {
  return (
    <div style={{
      display: 'flex',
      gap: 20
    }}>
      <div className="video">
        <div className="video__top">
          <img src="https://i.ytimg.com/vi/7TuZFZ8bgmI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcJtSlIWccQ4wtJBHD-wfSUEWTLw"
            alt="" />
          <span>05:18</span>
        </div>
      </div>

      <div>
        <h2>Title</h2>
        <div style={{ display: 'flex', gap: 10 }}>
          <span style={{
            fontSize: 12
          }}>6.4k Views</span>
          <span style={{
            fontSize: 12
          }}>11 months ago</span>
        </div>
        <div className="video__channel"
          style={{ padding: '8px 0' }}>
        <img
          src="https://yt3.ggpht.com/ytc/AAUvwniqHMFoLXPnpESjBJVEHk5k3t6j8NLO5SHM1PCWqQ=s68-c-k-c0x00ffffff-no-rj"
          alt="ghdjd"/>
        <span style={{
          fontSize: 12
        }}>My Channel</span>
      </div>
      <div>
        <p style={{
          fontSize: 12
        }}>description</p>
      </div>
      </div>

    </div>
  );
}

export default SearchTile;
