import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from "react-redux";

//Components
import GlobalStyle from "./components/style-utils/GlobalStyle";
import App from './components/App';

//Redux store
import store from "./store";

ReactDOM.render(
   <Provider store={store}>
      <Router>
         <GlobalStyle />
         <App />
      </Router>
   </Provider>, document.getElementById('root')
);
