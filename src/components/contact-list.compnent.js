import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Contact = props => (
  <tr>
    <td>{props.contact.username}</td>
    <td>{props.contact.number}</td>
    <td>
      <Link to={"/edit/"+props.contact._id}>Edit Number</Link> | <a href="#" onClick={() => { props.deleteContact(props.contact._id) }}>Delete Number</a>
    </td>
  </tr>
)

export default class ContactList extends Component {
  constructor(props) {
    super(props);

    this.deleteContact = this.deleteContact.bind(this)

    this.state = {contact: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/contact/')
      .then(response => {
        this.setState({ contact: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteContact(id) {
    axios.delete('http://localhost:5000/contact/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      contact: this.state.contact.filter(el => el._id !== id)
    })
  }

  contactList() {
    return this.state.contact.map(currentcontact => {
      return <Contact contact={currentcontact} deleteContact={this.deleteContact} key={currentcontact._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Contact List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.contactList() }
          </tbody>
        </table>
      </div>
    )
  }
}
