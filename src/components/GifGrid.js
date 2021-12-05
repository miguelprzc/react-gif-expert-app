import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  const {data: gifs, loading} = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeInUp">{category}</h3>
      <div className="card-grid">
        {
          loading && <p className="animate__animated animate__flash">Loading...</p>
        }

        {
          gifs.map((gif) => (
            <GifGridItem 
              key={gif.id} 
              {...gif} 
            />
          ))
        }
      </div>
    </>
  )
}
