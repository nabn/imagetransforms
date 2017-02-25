import './App.css'
import React, { Component } from 'react'
import ImageContainer from './Components/ImageContainer'
import Actions from './Components/Actions'
import { take, takeLast } from 'ramda'

class App extends Component {
  state = { imageSrc: null 
    , classNameSuffixes: [] }


  setCSSClass = suffix => _ => {
    const {classNameSuffixes} = this.state
    this.setState({classNameSuffixes: [
      ...classNameSuffixes
      , suffix
    ]})
  }

  allActions = [{ id: 1
    , action: 'rotate'
    , classNameSuffix: 'rotated'
    , handler: this.setCSSClass('rotated')
  } , { id: 2
    , action: 'translate'
    , classNameSuffix: 'translated'
    , handler: this.setCSSClass('translated')
  } , { id: 3
    , action: 'opacity'
    , classNameSuffix: 'opacity-changed'
    , handler: this.setCSSClass('opacity-changed')
  } , { id: 1
    , action: 'scale'
    , classNameSuffix: 'rotated'
    , handler: this.setCSSClass('scale')
  }]

  clearTransforms = _ => this.setState({classNameSuffixes: []})

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
          classNameSuffixes={this.state.classNameSuffixes} />
        <Actions
          clear={this.clearTransforms}
          available={take(3, this.allActions)}
          applied={takeLast(1, this.allActions)} />
      </div>
    )
  }
}

export default App
