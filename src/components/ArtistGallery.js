import React from 'react';
import './ArtistGallery.css';
// import styled from 'styled-components';

const artists = [
  {username: "leonardo", fullname: "Leonardo Da Vinci", img: "./img/mona_lisa_by_leonardo_da_vinci.jpg"},
  {username: "vincent", fullname: "Vincent Van Gogh", img: "./img/the_starry_night_by_vincent_van_gogh.jpg"},
  {username: "rembrandt", fullname: "Rembrandt", img: "./img/the_night_watch_by_rembrandt.jpg"},
  {username: "gustav", fullname: "Gustav Klimt", img: "./img/the_kiss_by_gustav_klimt.jpg"},
  {username: "jan", fullname: "Jan Van Eyck", img: "./img/the_arnolfini_portrait_by_jan_van_eyck.jpg"},
  {username: "johannes", fullname: "Johannes Vermeer", img: "./img/the_girl_with_a_pearl_earring_by_johannes_vermeer.jpg"},
  {username: "claude", fullname: "Claude Monet", img: "./img/impression,_sunrise_by_claude_monet.jpg"},
];

function ArtistGallery() {
  return (
    <section className="ArtistGallery">
      {artists.map(artist => {
        return (
          <div className="ArtistGalleryThumbnail" key={artist.username}>
            <img className="ArtistGalleryImage" src={require(`${artist.img}`)} title={`${artist.fullname}'s works`} alt={`${artist.fullname}'s works`}></img>
            <div className="attribution">{artist.name}</div>
          </div>
        )
      })}
    </section>
  );
}

export default ArtistGallery;
