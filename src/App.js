import React, { Component } from 'react'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from 'react-router-dom'
import { history } from "./utils/helpers/history";
import Routers from "./router";

import store from './store';

//CSS
import './App.scss';


 class App extends Component {
  render() {
    return (
     <React.Fragment>
      <Provider store={store}>
        <Router basename="/" history={history}>
          <Routers />

        </Router>
      </Provider>
     </React.Fragment>
    )
  }
}


export default App;



