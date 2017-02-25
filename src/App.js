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
  state = { imageSrc: null }

  handleFileChange = e => {
    const reader = new FileReader()
    const file = e.target.files[0]

    reader.onloadend = _ => {
      this.setState({
        imageSrc: reader.result
      })
    }

    reader.readAsDataURL(file)
  }

  render() {
    return (
      <div className="App">
        <ImageContainer
          src={this.state.imageSrc}
          handleFileChange={this.handleFileChange}
        />
        <Actions
          available={take(3, allActions)}
          applied={takeLast(1, allActions)}
        />
      </div>
    )
  }
}

export default App
