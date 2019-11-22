import React from 'react';
import { Route, Link } from 'react-router-dom';

//Components
import ArtistGallery from "./ArtistGallery"
import NavBar from './NavBar';
import AddPostModal from './AddPostModal';
import styled from 'styled-components';

import Login from "./Login";

//action creators
import {} from "../store/auth/useAuthActions";
import ImageDetails from "./ImageDetails";

const Banner = styled.div`
   display: flex;
   align-items: center;
   padding-left: 5%;
   box-sizing: border-box;
   border: 1px solid orange;
   height: 6rem;
   width: 100%;
`

const AppName = styled(Link)`
   outline: transparent;
   text-decoration: none;

   h1 {
      font-size: 3rem;
   }
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
            <Route path='/upload' component={AddPostModal} />
            {/* <Route path='/upload' component={AddPostModal} /> */}
            {/* <Route path='/sign-in' component={Login} /> */}

            <Banner>
               <AppName to="/"><h2>Art Portfolio</h2></AppName>
            </Banner>

            {/* <CreatePost /> */}

            <ArtistSearchForm>
               <ArtistSearchBox type="text" name="search" placeholder="&#x1f50d; Search artists..." />
            </ArtistSearchForm>
         </section>

         <Route exact path="/" component={ArtistGallery} />
         <Route exact path="/artist/:userId" component={ArtistGallery} />
         <Route exact path="/artist/posts/:id" component={ImageDetails} />
      </div>
   );
}

export default App;
