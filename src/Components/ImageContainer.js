import React from 'react'

const ImageContainer = ({ handleFileChange, src, transforms, classNameSuffixes }) => (
  <div className='image-container'>
    <div className='image-wrapper'>
      <img
        src={src}
        role='presentation'
        style={{ transform: transforms.join(' ') }}
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
