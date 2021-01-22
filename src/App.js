// Imported Libraries
import React, { Component } from "react";
import { connect } from 'react-redux';

// Local Imports
import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { fetchSmurfs } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
          <AddForm/>
          <SmurfDisplay/>
        </main>
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.