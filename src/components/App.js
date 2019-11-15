import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Colors from "./Colors";

//action creators
import { login } from "../store/auth/useAuthActions";

function App({token}) {
   useEffect(() => {
      //check for a stored token
      console.log(`Token: ${token}`);
      login();
   }, []);

   return (
      <div className="App">
         <h1>Welcome to the App</h1>

         {token && <div>User logged in</div>}
      </div>
   );
}

const mapStateToProps = state => {
   return {
      token: state.auth.token
   };
};

const mapDispatchToProps = {
   login
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
