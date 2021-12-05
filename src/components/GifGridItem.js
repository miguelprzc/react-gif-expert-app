import React from 'react'

export const GifGridItem = ({title, url}) => {
  return (
    <figure className=" card animate__animated animate__fadeInUp">
      <img src={url} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  )
}
