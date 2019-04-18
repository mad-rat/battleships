import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import './StartPage.sass'

class StartPage extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.userName = event.target.value;
  }

  handleSubmit(event) {
    this.props.onViewChange({changeView: true, userName: this.userName});
    event.preventDefault();
  }

  render() {
    return (
      <div className="flex-wrapper">
        <header className="StartPageHeader">
          <h1>AWESOME BATTLESHIPS</h1>
        </header>
        <div className="welcomeForm">
          <TextField
            className="nameLabel"
            label="Name"
            onChange={this.handleChange}
            variant="outlined"/>
          <Button variant="contained" color="secondary"  size="medium" className="jumpInButton" onClick={this.handleSubmit}>
            Jump IN
          </Button>
        </div>
      </div>
    )
  }
}

export default StartPage