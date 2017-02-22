import './App.css'
import React, { Component } from 'react'
import ImageContainer from './Components/ImageContainer'
import Actions from './Components/Actions'
import { take, takeLast } from 'ramda'

const allActions = [ 'rotate'
  , 'translate'
  , 'opacity'
  , 'scale'
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageContainer />
        <Actions
          available={take(3, allActions)}
          applied={takeLast(1, allActions)}
        />
      </div>
    )
  }
}

export default App
