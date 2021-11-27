import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

  // const [images, setImages] = useState([]);
  const { data: images, loading } = useFetchGifs(category);


  return (
    <>
      <h3 className="animate__animated animate__delay-2s animate__fadeIn">{ category }</h3>
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="card-grid">
        {/* <ul> */}
          { 
            images.map( ( item ) => ( 
              <GifGridItem 
                key={ item.id } 
                { ...item } 
              /> 
            ))
          }
        {/* </ul> */}
      </div>
    </>
  );
}
