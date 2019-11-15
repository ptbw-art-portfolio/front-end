import React from 'react';
import './ArtistGallery.css';
// import styled from 'styled-components';

const artists = [
  {name: "Leonardo Da Vinci", img: "./img/mona_lisa_by_leonardo_da_vinci.jpg"},
  {name: "Vincent Van Gogh", img: "./img/the_starry_night_by_vincent_van_gogh.jpg"},
  {name: "Rembrandt", img: "./img/the_night_watch_by_rembrandt.jpg"},
  {name: "Gustav Klimt", img: "./img/the_kiss_by_gustav_klimt.jpg"},
  {name: "Jan Van Eyck", img: "./img/the_arnolfini_portrait_by_jan_van_eyck.jpg"},
  {name: "Johannes Vermeer", img: "./img/the_girl_with_a_pearl_earring_by_johannes_vermeer.jpg"},
  {name: "Claude Monet", img: "./img/impression,_sunrise_by_claude_monet.jpg"},
];

function ArtistGallery() {
  return (
    <section className="ArtistGallery">
      {artists.map(artist => {
        return (
          <div className="ArtistGalleryThumbnail" key={artist.name}>
            <img className="ArtistGalleryImage" src={require(`${artist.img}`)} title={`${artist.name}'s works`} alt={`${artist.name}'s works`}></img>
            <div className="attribution">{artist.name}</div>
          </div>
        )
      })}
    </section>
  );
}

export default ArtistGallery;
