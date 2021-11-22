import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {
  // console.log(img);
  return (
    <div>
      <p>{ title }</p>
      <img src={ url } alt={ title } />
    </div>
  )
}
