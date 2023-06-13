import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  onEatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="main-container">
        <div className="fruits-container">
          <h1 className="title">
            Bob ate <span className="span-element">{mango}</span> mangoes
            <span className="span-element">{` ${banana}`}</span> bananas
          </h1>
          <div className="icon-buttons-container">
            <div className="cards-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruits-icon"
                alt="mango"
              />
              <button type="button" className="btn" onClick={this.onEatMango}>
                Eat Mango
              </button>
            </div>
            <div className="cards-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruits-icon"
                alt="banana"
              />
              <button type="button" className="btn" onClick={this.onEatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
