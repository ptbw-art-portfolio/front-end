import React from 'react';
import Colors from "./Colors";

import Login from './Login';

//action creators
import {} from "../store/auth/useAuthActions";

function App() {
   return (
      <div className="App">
         <h1>Welcome to the App</h1>
         <Login />
      </div>
   );
}

export default App;