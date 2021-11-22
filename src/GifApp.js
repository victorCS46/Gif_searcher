import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => setCategories( prevState => [...prevState, 'Yasuo'] );

  return(
    <>
      <h2>Gif App</h2>
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
    </>
  );
}

export default GifApp;