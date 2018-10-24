import { Component, linkEvent } from 'inferno'
import './Adventure.css'
import ChoiceButton from '../choicebutton/ChoiceButton'

export default class Adventure extends Component {
  render() {
    return (
      <div className="adventure">
        <div className="adventureContent">
          <h1>{this.props.title}</h1>

          {
            this.props.desc.map(d => <p>{d}</p>)
          }
          
          <div className="choices">
            {
              this.props.commands.map(c => <div onClick={() => {console.log('hi'); this.props.move("intro")}} ><ChoiceButton text={c.text} /></div>)
            }
          </div>
        </div>
      </div>
    )
  }
}
