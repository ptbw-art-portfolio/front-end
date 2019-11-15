import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Colors from "./Colors";
import {axiosWithAuth as axios} from "../utils/axiosWithAuth";

//action creators
import { login } from "../store/auth/useAuthActions";

function App({token, error, login}) {
   useEffect(() => {
      //check for a stored token
      console.log(`Token: ${token}`);
      login();
      if (!token) {
         token = localStorage.getItem("token");
      }
      
      axios(token)
         .then()



   }, []);

   return (
      <div className="App">
         <h1>Welcome to the App</h1>

         {token && <div>User logged in</div>}
         {error && <div>{}</div>}
      </div>
   );
}

const mapStateToProps = state => {
   return {
      token: state.auth.token,
      error: state.auth.error
   };
};

const mapDispatchToProps = {
   login
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
