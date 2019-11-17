import React from 'react';
import { Link, Route } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
// import './ArtistGallery.css';
import styled from 'styled-components';

const artists = [
  {username: "leonardo", fullname: "Leonardo Da Vinci", img: "./img/mona_lisa_by_leonardo_da_vinci.jpg"},
  {username: "vincent", fullname: "Vincent Van Gogh", img: "./img/the_starry_night_by_vincent_van_gogh.jpg"},
  {username: "rembrandt", fullname: "Rembrandt", img: "./img/the_night_watch_by_rembrandt.jpg"},
  {username: "gustav", fullname: "Gustav Klimt", img: "./img/the_kiss_by_gustav_klimt.jpg"},
  {username: "jan", fullname: "Jan Van Eyck", img: "./img/the_arnolfini_portrait_by_jan_van_eyck.jpg"},
  {username: "johannes", fullname: "Johannes Vermeer", img: "./img/the_girl_with_a_pearl_earring_by_johannes_vermeer.jpg"},
  {username: "claude", fullname: "Claude Monet", img: "./img/impression,_sunrise_by_claude_monet.jpg"},
];

const ArtistGallerySection = styled.section`
  margin: auto;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-row-gap: .25rem;
  box-sizing: border-box;
  border: 1px solid blue;
  border-radius: .5rem;
  width: 90%;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 33% 33% 33%;
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
  width: 100%;
  background: rgba(0, 0, 0, 0.65);
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function pasteArtist(artist) {
  return (
  <Link to={`/artist/${artist.username}`} key={artist.username}>
  <Fade bottom big>
  <ArtistGalleryThumbnail>
    <ArtistGalleryImage src={require(`${artist.img}`)} title={`${artist.fullname}'s works`} alt={`${artist.fullname}'s works`}></ArtistGalleryImage>
    <Attribution>{artist.fullname}</Attribution>
  </ArtistGalleryThumbnail>
  </Fade>
  {/* <Route path={`/artist/${artist.username}`} component={} /> */}
</Link>
  )
}

function ArtistGallery() {
  return (
    <ArtistGallerySection>
      {artists.map(artist => {
        return (
          // setTimeout(pasteArtist(artist), 1000)
          pasteArtist(artist)
        )
      })}
    </ArtistGallerySection>
  );
}

export default ArtistGallery;
