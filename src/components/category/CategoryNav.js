import React, { useState } from 'react';
import './category_nav.scss';

const categories = [
  'All',
  'abcd',
  'bcde',
  'react',
  'angular',
  'node',
  'js',
  'dsa',
  'dance',
  'stock',
  'politics',
  'bla',
  'bla'
];
const CategoryNav = () => {
  const [selected, setSelected] = useState('All');
  const handleClick = (category) => {
    setSelected(category);
    console.log(selected);
  };
  return (
    <div className="category-nav">
      {
        categories.map((category, index) => {
          return <span
                  onClick={() => handleClick(category)}
                  key={index + 'cat'}
                  className={selected === category ? 'category-nav__span category-nav__span--selected' : 'category-nav__span'}>
                    {category}
                </span>;
        })
      }
    </div>
  );
};

export default CategoryNav;
