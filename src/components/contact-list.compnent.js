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
    // this.onChangeNumber = this.onChangeNumber.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.state = {
    //   number: '',
    // }

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

  // onChangeNumber(e) {
  //   //const phoneRegEx = /^(?:\+?88)?01[15-9]\d{8}$/
  //   this.setState({
  //     number: e.target.value
  //   })
  // }

  // onSubmit(e) {
  //   e.preventDefault();

  //   const contacts = {
  //     number: this.state.number,
  //   }

  //   //alert(contacts.number);

  //   axios.get('http://localhost:5000/contact/find', contacts)
  //     .then(res => console.log(res.data));

  //   //window.location = '/';
  // }

  contactList() {
    return this.state.contact.map(currentcontact => {
      return <Contact contact={currentcontact} deleteContact={this.deleteContact} key={currentcontact._id}/>;
    })
  }

  render() {
    return (
      <div>
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
      {/* <div>
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Enter number to search using number</label>
            <input  
                type="number"
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
      </div> */}
      </div>
    )
  }
}
