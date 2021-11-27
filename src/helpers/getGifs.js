const apiKey = 'qMtD1tALRHFhjCu89VUdCCLC02t85nYL'; //enviroment

export const getGifs = async ( category ) => { 
  const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=6&api_key=${apiKey}`);
  const { data } = await resp.json();
  const gifs = data.map(({ id, title, images: {downsized_medium} }) => {
    return {
      id,
      title,
      url: downsized_medium.url,
    }
  })
  // console.log(gifs);
  return gifs;
}