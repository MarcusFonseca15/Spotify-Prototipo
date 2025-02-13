import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import "./SingleArtist.css";
import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";

const SingleArtist = () => {
  const { id } = useParams();

  const { name, banner } = artistArray.filter(
    (atualArtistObj) => atualArtistObj.id === Number(id)
  )[0];

  const songsArrayFromArtists = songsArray.filter(
    (atualSongObj) => atualSongObj.artist === name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtists.length - 1)
  );
  const randomIdFromArtist = songsArrayFromArtists[randomIndex].id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient( to bottom,rgba(0, 0, 0, 0.25),rgba(0, 0, 0, 0.25)),
    url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songsArray={songsArrayFromArtists} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default SingleArtist;
