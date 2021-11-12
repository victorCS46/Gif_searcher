import React from 'react'

export const GifGrid = ( { category } ) => {

  const apiKey = 'qMtD1tALRHFhjCu89VUdCCLC02t85nYL';

  const getGifs = async () => {

    // const url = ``;
    const resp = await fetch(`api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}`);
    const data = await resp.status;
    console.log(data);
  }

  getGifs()


  return (
    <div>
      <h3>{ category }</h3>
    </div>
  );
}
