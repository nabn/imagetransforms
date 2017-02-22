import React from 'react'

const Actions = ({ available, applied }) => {
  const renderActionButton = btn => (
    <button
      key={btn}
      className='action-button'>
      {btn}
    </button>
  )

  return (
    <div className='actions'>
      <div className='available flex-actions'>
        <h4>Available Actions</h4>
        {available.map(renderActionButton)}
      </div>
      <div className='applied flex-actions'>
        <h4>Applied Actions</h4>
        {applied.map(renderActionButton)}
        <button className='reset action-button'>
          reset
        </button>
      </div>
    </div>
  )
}

export default Actions
