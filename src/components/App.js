import React from 'react';
import Colors from "./Colors";
 // import { Route } from 'react-router-dom';
import './App.css';
import ArtistGallery from "./ArtistGallery"
import NavBar from './NavBar';
import styled from 'styled-components';

//action creators
import {} from "../store/auth/useAuthActions";

const Banner = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5%;
  box-sizing: border-box;
  border: 1px solid orange;
  height: 6rem;
  width: 100%;
`

const AppName = styled.h1`
  font-size: 3rem;
`

const ArtistSearchForm = styled.form`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  border: 1px solid green;
`

const ArtistSearchBox = styled.input`
  margin: 1rem;
  border-radius: .75rem;
  font-size: 1.5rem;
`

function App() {
   return (
     <div className="mainProgram">
       <section className="top">
         <NavBar />
         {/* <Route path='/upload' component={} /> */}
         {/* <Route path='/sign-in' component={} /> */}
 
         <Banner>
           <AppName>Art Portfolio</AppName>
         </Banner>
 
         <ArtistSearchForm>
           <ArtistSearchBox type="text" name="search" placeholder="&#x1f50d; Search artists..." />
         </ArtistSearchForm>
       </section>
 
       <ArtistGallery />
     </div>
   );
 }
 
 export default App;
 