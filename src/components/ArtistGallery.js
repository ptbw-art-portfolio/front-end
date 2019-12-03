import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import {axiosWithAuth as axios} from "../utils/axiosWithAuth";

const ArtistGallerySection = styled.section`
  margin: auto;
  display: grid;
  // grid-template-columns: 25% 25% 25% 25%;
  grid-row-gap: .25rem;
  box-sizing: border-box;
  border: 1px solid blue;
  border-radius: .5rem;
  width: 90%;

  @media only screen and (min-width: 1201px) {
    grid-template-columns: 16.67% 16.67% 16.67% 16.67% 16.67% 16.67%;
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    grid-template-columns: 20% 20% 20% 20% 20%;
  }
  
  @media only screen and (min-width: 769px) and (max-width: 992px) {
    grid-template-columns: 25% 25% 25% 25%;
  }
  @media only screen and (min-width: 577px) and (max-width: 768px) {
    grid-template-columns: 33.3% 33.3% 33.3%;
  }

  @media only screen and (max-width: 576px) {
    grid-template-columns: 50% 50%;
  }
`;

const ArtistGalleryThumbnail = styled.div`
  margin: .5rem;
  border: 1px solid indigo;
  border-radius: .35rem;
  position: relative;
  text-align: center;
  color: white;
`;

const ArtistGalleryImage = styled.img`
  width: 100%;
  border: 1px solid yellow;
  border-radius: .35rem;
  :hover {
    border: 1px solid red;
  }
`;

const Attribution = styled.div`
  font-size: 1.6rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.65);
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

/*
{
   "id": 1,
   "fullName": "Rob Towe",
   "username": "robbie",
   "email": "robtowe@mail.com",
   "created_at": "2019-11-14 22:47:30",
   "updated_at": "2019-11-14 22:47:30"
}
*/
function pasteArtists(artist) {
   return (
      <Link to={`artist/${artist.id}`}>
         <ArtistGalleryThumbnail>
            <ArtistGalleryImage src={`https://via.placeholder.com/250/464655/eddfef`} title={`${artist.fullName}'s works`} alt={`${artist.fullName}'s works`} />
            <Attribution>{artist.fullName}</Attribution>
         </ArtistGalleryThumbnail>
      </Link>
   )
}

/*
{
   "id": 1,
   "title": "title1",
   "medium": "paint",
   "image_url": "someURLsdkfjl",
   "description": "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
   "likes": 0,
   "created_at": "2019-11-15T02:50:46.622Z",
   "updated_at": "2019-11-15T02:50:46.622Z",
   "user_id": 1
}
*/
function pasteImages(image) {
   return (
      <Link to={`posts/${image.id}`}>
         <ArtistGalleryThumbnail>
            <ArtistGalleryImage src={`https://via.placeholder.com/250/eddfef/464655`} title={`${image.title}'s works`} alt={`${image.title}'s works`}></ArtistGalleryImage>
            <Attribution>{`${image.title}: \t${image.medium}`}</Attribution>
         </ArtistGalleryThumbnail>
      </Link>
   )
}

function ArtistGallery({ match: { params: { userId } }}) {
   const [dataArray, setDataArray] = useState();
   const pasteIt = (typeof userId == "undefined") ? pasteArtists : pasteImages;
   const renderData = () => {
      if (!dataArray) {
         return <p>Loading...</p>
      }
      if (dataArray.length === 0) {
         return <p>No data to display</p>
      }
      
      return dataArray.map(data => <Fade key={data.id} bottom big>{pasteIt(data)}</Fade>)
   }

   useEffect(() => {
      const url = (!userId)? "/users" : `/users/${userId}/posts`;
      console.log("ArtistGallery 1st render -- URL: ", url);

      axios()
         .get(url)
         .then(response => {
            setDataArray(response.data);
         })
         .catch(error => {
            console.error(error.response);
         })
   }, [userId]);

   return <ArtistGallerySection>{renderData(pasteIt)}</ArtistGallerySection>;
}

export default ArtistGallery;
