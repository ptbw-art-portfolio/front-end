import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";

//create redux store
import store from "./store";

ReactDOM.render(
   <Provider store={store}>
<<<<<<< HEAD
      <Router><App /></Router>
=======
      <Router>
         <App />
      </Router>
>>>>>>> fbbe9faa570757c04411e46a6aab70ebc68e5850
   </Provider>, document.getElementById('root')
);
