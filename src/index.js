import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";

//create redux store
import store from "./store";

ReactDOM.render(
   <Provider store={store}>
      <Router><App /></Router>
   </Provider>, document.getElementById('root')
);
