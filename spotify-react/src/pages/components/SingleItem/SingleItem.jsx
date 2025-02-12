import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({ id, name, image, banner, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${id}`} className="single-item">
      {/*{`${idPath}/${id}`} vai passar o caminho(se é artista ou musica) + o id do objeto: artist/12 ou song/8*/}
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Imagem de ${name}`}
          />
        </div>

        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>
      <div className="single-item__texts">
        <p className="single-item__title">{name}</p>
        <p className="single-item__type">
          {artist ?? "Artista"}
          {/*SE não foi passado o nome, usa "Artista", senão usa o nome*/}
          {/*Podia usar artist === undefined ? "Artista" : artist */}
        </p>
      </div>
    </Link>
  );
};

export default SingleItem;
