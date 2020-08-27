import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ContactList from "./components/contact-list.compnent";
import EditContact from "./components/edit-contact.component";
import CreateContact from "./components/create-contact.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ContactList} />
      <Route path="/edit/:id" component={EditContact} />
      <Route path="/create" component={CreateContact} />
      </div>
    </Router>
  );
}

export default App;