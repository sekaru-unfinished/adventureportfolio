import { Component } from 'inferno'
import './ChoiceButton.css'

export default class ChoosePath extends Component {
  render() {
    return (
      <div className="choice">
        {this.props.text}
      </div>
    )
  }
}
