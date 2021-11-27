import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => setCategories( prevState => [...prevState, 'Yasuo'] );

  return(
    <>
      <div className="header">
        <h2>Gif App</h2>
      </div>
      <AddCategory setCategories={ setCategories } />
      <hr />
      <ul>
        { 
          categories.map( ( item ) => (
            <GifGrid 
              key={ item } 
              category={ item } 
            />
          ))
        }
      </ul>
      <div className="footer">
        <h2>Search whatever you want</h2>
      </div>
    </>
  );
}

export default GifApp;