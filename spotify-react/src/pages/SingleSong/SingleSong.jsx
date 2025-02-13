import React from "react";
import Player from "../components/player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../../assets/database/songs";
import { artistArray } from "../../assets/database/artists";

const SingleSong = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio, index } = songsArray.filter(
    (atualSongObj) => atualSongObj.id === Number(id)
  )[0];

  const artistObj = artistArray.filter(
    (atualArtistObj) => atualArtistObj.name === artist
  )[0];

  //--------------
  const songsArrayFromArtists = songsArray.filter(
    (atualSongObj) => atualSongObj.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtists.length - 1)
  );

  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtists.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtists[randomIndex].id;

  const randomId2FromArtist = songsArrayFromArtists[randomIndex].id;

  return (
    <div className="song">
      <div
        className="song__container"
        style={{ display: "flex", flexDirection: "column", gap: "50px" }}
      >
        <div className="song__image-container">
          <img src={image} alt={`Nome da Música ${name}`} />
        </div>
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`}>
          <div className="song__artist-image">
            <img
              width={100}
              height={100}
              src={artistObj.image}
              alt={`Imagem do artista ${artist}`}
            />
          </div>
        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
        />
      </div>
    </div>
  );
};

export default SingleSong;
