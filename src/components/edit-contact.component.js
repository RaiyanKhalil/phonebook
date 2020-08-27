import React, { Component } from 'react';
import axios from 'axios';

export default class EditContact extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      number: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/contact/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          number: response.data.number,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeNumber(e) {
    this.setState({
      number: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const contacts = {
      username: this.state.username,
      number: this.state.number,
    }

    console.log(contacts);

    axios.post('http://localhost:5000/contact/update/' + this.props.match.params.id, contacts)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Contact Details</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
            />
        </div>
        <div className="form-group"> 
          <label>Number: </label>
          <input  type="number"
              required
              className="form-control"
              value={this.state.number}
              onChange={this.onChangeNumber}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Save" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
