import React from 'react'

const ImageContainer = _ => (
  <div className='image-container'>
    <div className='image'></div>
    <button
      className='choose-image-button'
      onClick={console.log}>
      Choose Image
    </button>
  </div>
)

export default ImageContainer
