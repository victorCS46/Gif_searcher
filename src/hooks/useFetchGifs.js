import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
  const [images, setImages] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category)
      .then( img => {
        setTimeout(() => {
          setImages({
            data: img,
            loading: false,
          });
          
          console.log(images)
        }, 3000);
      });
  }, [category]);

  return images;
}