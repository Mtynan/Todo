import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/AppNavbar"
import ItemList from "./components/ItemList"
import { Provider } from "react-redux";
import store from "./store"
import ItemForm from "./components/ItemForm"


class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <ItemForm />
        <ItemList />
      </div>
    </Provider>
    );
  }
}

export default App;
