import { Component } from 'inferno'
import './registerServiceWorker'
import './App.css'
import stages from './assets/adventure'
import Adventure from './components/adventure/Adventure'

export default class App extends Component {
  state = {
    stage: stages[0].id
  }

  render() {
    return (
      <div className="app">
        <Adventure {...this.getStage()} move={this.changeStage.bind(this)} />
      </div>
    )
  }

  getStage() {
    return stages.find(s => s.id===this.state.stage)
  }

  changeStage(stage) {
    this.setState({stage})
  }
}
