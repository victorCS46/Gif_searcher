import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

  // const [images, setImages] = useState([]);
  const { data: images, loading } = useFetchGifs(category);


  return (
    <>
      <h3>{ category }</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid">
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
    </>
  );
}
