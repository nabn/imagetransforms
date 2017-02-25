import './App.css'
import React, { Component } from 'react'
import ImageContainer from './Components/ImageContainer'
import Actions from './Components/Actions'
import {clone} from 'ramda'

class App extends Component {

  setCSSClass = (suffix, id) => _ => {
    const { classNameSuffixes
      , availableActions
      , appliedActions } = this.state

    const thisAction = availableActions.filter(a => a.id === id)[0]
    thisAction['applied'] = true

    this.setState({ classNameSuffixes: [...classNameSuffixes , suffix]
                  , availableActions: availableActions.filter(a => a.id !== id)
                  , appliedActions: [...appliedActions, thisAction]
    })
  }

  setTransform = (t, id) => _ => {
    const { transforms
          , availableActions
          , appliedActions } = this.state

    const thisAction = availableActions.filter(a => a.id === id)[0]
    thisAction.applied = true

    this.setState({ transforms: [...transforms , t]
                  , availableActions: availableActions.filter(a => a.id !== id)
                  , appliedActions: [...appliedActions, thisAction]
    })
  }

  removeAction = id => _ => {
    const { availableActions
      , appliedActions
      , transforms } = this.state
    const thisAction = appliedActions.filter(a => a.id === id)[0]
    thisAction.applied = false

    /* eslint-disable react/no-direct-mutation-state  */
    // we do want to directly mutate state
    // in this case, because we don't want
    // react to rerender twice
    if ('notranslate' in thisAction) {
      this.state.classNameSuffixes = []
    } else {
      this.state.transforms = transforms.filter(t => t !== thisAction.action)
    }

    this.setState({ availableActions: [...availableActions, thisAction]
                  , appliedActions: appliedActions.filter(a => a.id !== id)})
  }

  allActions = [{ id: 1
    , label: 'rotate'
    , action: 'rotate(45deg)'
    , handler: this.setTransform('rotate(45deg)', 1)
    , applied: false
  } , { id: 2
    , label: 'translate'
    , action: 'translateX(-40px)'
    , handler: this.setTransform('translateX(-40px)', 2)
    , applied: false
  } , { id: 3
    , label: 'opacity'
    , handler: this.setCSSClass('transparent', 3)
    , applied: false
    , notranslate: true
  } , { id: 4
    , label: 'scale'
    , action: 'scale(0.5)'
    , handler: this.setTransform('scale(0.5)', 4)
    , applied: false
  }]

  state = { imageSrc: null
          , classNameSuffixes: []
          , transforms: []
          , availableActions: clone(this.allActions)
          , appliedActions: []}

  clearTransforms = _ => {
    this.setState({ classNameSuffixes: []
                  , transforms: []
                  , availableActions: clone(this.allActions)
                  , appliedActions: []})
  }

  handleFileChange = e => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onloadend = _ => {
      this.clearTransforms()
      this.setState({
        imageSrc: reader.result
      })
    }

    reader.readAsDataURL(file)
  }

  render() {
    const { imageSrc
          , transforms
          , availableActions
          , appliedActions
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
          removeAction={this.removeAction}
          available={availableActions}
          applied={appliedActions} />
      </div>
    )
  }
}

export default App
