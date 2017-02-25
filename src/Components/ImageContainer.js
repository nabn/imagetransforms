import React from 'react'

const ImageContainer = ({ handleFileChange, src }) => (
  <div className='image-container'>
    <div className='image-wrapper'>
      <img
        src={src}
        className='picked-image'
        alt='pick one'/>
    </div>
    <input
      onChange={handleFileChange}
      className='choose-image-button'
      accept='image/*'
      capture='camera'
      type='file'/>
  </div>
)

export default ImageContainer
