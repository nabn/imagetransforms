import React from 'react'

const ImageContainer = ({ handleFileChange, src, classNameSuffixes }) => (
  <div className='image-container'>
    <div className='image-wrapper'>
      <img
        src={src}
        role='presentation'
        className={'picked-image ' + classNameSuffixes.join(' ')}/>
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
