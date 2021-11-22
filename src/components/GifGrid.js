import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

  const [images, setImages] = useState([]);
  
  const apiKey = ''; //enviroment
  
  useEffect( () => {
    const getGifs = async () => {
      
      // const url = ``;
      const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${category}&limit=6&api_key=${apiKey}`);
      const { data } = await resp.json();
      const gifs = data.map(({ id, title, images: {downsized_medium} }) => {
        return {
          id,
          title,
          url: downsized_medium.url,
        }
      })
      console.log(gifs);
      setImages(gifs);
    }
    getGifs();

  }, [category]);

  return (
    <div>
      <h3>{ category }</h3>
      <ul>
        { 
          images.map( ( item ) => ( 
            <GifGridItem 
              key={ item.id } 
              { ...item } 
            /> 
          )) 
        }
      </ul>
    </div>
  );
}
