import React from 'react';
import { Link, Route } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
// import './ArtistGallery.css';
import styled from 'styled-components';
import { colors } from "./style-utils/variables";

const artists = [
   {
      "id": 1,
      "fullName": "Rob Towe",
      "username": "robbie",
      "email": "robtowe@mail.com",
      "created_at": "2019-11-14 22:47:30",
      "updated_at": "2019-11-14 22:47:30"
   },
   {
      "id": 2,
      "fullName": "Rob Towe",
      "username": "robbies",
      "email": "robtowe@mails.com",
      "created_at": "2019-11-14 23:22:43",
      "updated_at": "2019-11-14 23:22:43"
   },
   {
      "id": 3,
      "fullName": "Rob Towe",
      "username": "robbiess",
      "email": "robtowe@mailss.com",
      "created_at": "2019-11-14 23:33:19",
      "updated_at": "2019-11-14 23:33:19"
   }
];

const images = [
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
   },
   {
      "id": 2,
      "title": "title2",
      "medium": "paint",
      "image_url": "someURLsdkfjl",
      "description": "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      "likes": 0,
      "created_at": "2019-11-15T02:54:37.200Z",
      "updated_at": "2019-11-15T02:54:37.200Z",
      "user_id": 1
   },
   {
      "id": 3,
      "title": "title3",
      "medium": "paint",
      "image_url": "someURLsdkfjl",
      "description": "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      "likes": 0,
      "created_at": "2019-11-15T02:55:31.235Z",
      "updated_at": "2019-11-15T02:55:31.235Z",
      "user_id": 1
   }
];

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

const ArtistGalleryThumbnail = styled(Link)`
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
  width: 100%;
  background: rgba(0, 0, 0, 0.65);
  color: black;
  background: magenta;
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
      <ArtistGalleryThumbnail to={`artist/${artist.id}`}>
         <ArtistGalleryImage src={`https://via.placeholder.com/250/464655/eddfef`} title={`${artist.fullName}'s works`} alt={`${artist.fullName}'s works`} />
         <Attribution>{artist.fullName}</Attribution>
      </ArtistGalleryThumbnail>
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
      <ArtistGalleryThumbnail to={`posts/${image.id}`}>
         <ArtistGalleryImage src={`https://via.placeholder.com/250/eddfef/464655`} title={`${image.title}'s works`} alt={`${image.title}'s works`}></ArtistGalleryImage>
         <Attribution>{`${image.title}: \t${image.medium}`}</Attribution>
      </ArtistGalleryThumbnail>
   )
}

function ArtistGallery({ match: { params: { userId } }}) {
   console.log(`userId: ${userId}`);
   const pasteIt = (typeof userId == "undefined") ? pasteArtists : pasteImages;

   return (
      <ArtistGallerySection>
         {artists.map(data => {
            return (
               // setTimeout(function() {pasteArtist(artist)}, 1000)
               // setTimeout(pasteArtist, 1000, artist)
               // setTimeout(function() {console.log(artist)}, 1000),
               // console.log("test"),
               <Fade key={data.id} bottom big>{
                  pasteIt(data)
               }</Fade>
            )
         })}
      </ArtistGallerySection>
   );
}

export default ArtistGallery;
