import React from 'react';
import SearchTile from './SearchTile';
function Search () {
  return (
    <div>
      {
        [...new Array(10)].map((item, i) => {
          return (
            <SearchTile key={i + 'i'}/>
          );
        })
      }
    </div>
  );
}

export default Search;
