import React from 'react'

const Actions = ({ available, applied, clear, removeAction }) => {
  const renderActionButton = action => (
    <button
      key={action.id}
      onClick={action.applied ? removeAction(action.id) : action.handler }
      className='action-button'>
      {action.label}
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
        <button
          onClick={clear}
          className='reset action-button'>
          reset
        </button>
      </div>
    </div>
  )
}

export default Actions
