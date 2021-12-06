import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({title, url}) => {
  return (
    <figure className=" card animate__animated animate__fadeInUp">
      <img src={url} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
