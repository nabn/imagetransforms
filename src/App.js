import './App.css'
import React, { Component } from 'react'
import ImageContainer from './Components/ImageContainer'
import Actions from './Components/Actions'
import { take, takeLast } from 'ramda'

class App extends Component {
  state = { imageSrc: null
    , classNameSuffixes: []
    , transforms: [] }


  setCSSClass = suffix => _ => {
    const {classNameSuffixes} = this.state
    this.setState({classNameSuffixes: [
      ...classNameSuffixes
      , suffix
    ]})
  }

  setTransform = t => _ => {
    const {transforms} = this.state
    this.setState({transforms: [
      ...transforms
      , t
    ]})
  }

  allActions = [{ id: 1
    , action: 'rotate'
    , handler: this.setTransform('rotate(45deg)')
  } , { id: 2
    , action: 'translate'
    , handler: this.setTransform('translateX(-40px)')
  } , { id: 3
    , action: 'opacity'
    , handler: this.setCSSClass('transparent')
  } , { id: 1
    , action: 'scale'
    , handler: this.setTransform('scale(0.5)')
  }]

  clearTransforms = _ =>
    this.setState({ classNameSuffixes: []
      , transforms: []})

  handleFileChange = e => {
    const reader = new FileReader()
    const file = e.target.files[0]

    if (!file) return

    reader.onloadend = _ => {
      this.setState({
        imageSrc: reader.result
      })
    }

    reader.readAsDataURL(file)
  }

  render() {
    const { imageSrc
          , transforms
          , classNameSuffixes } = this.state
    return (
      <div className="App">
        <ImageContainer
          src={imageSrc}
          handleFileChange={this.handleFileChange}
          transforms={transforms}
          classNameSuffixes={classNameSuffixes} />
        <Actions
          clear={this.clearTransforms}
          available={take(3, this.allActions)}
          applied={takeLast(1, this.allActions)} />
      </div>
    )
  }
}

export default App
