import React from "react";
import "./Principal.css";
import "../../../styles/reset.css";
import ItemList from "../ItemList/ItemList";
import { artistArray } from "../../../assets/database/artists";
import { songsArray } from "../../../assets/database/songs";

const Principal = ({ type }) => {
  return (
    <div className="main">
      {/*ITEM LIST DE ARTISTAS */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist" /*Para entrar na pag do artita */
        />
      ) : (
        <></>
      )}

      {/*ITEM LIST DE MUSICAS */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={24}
          itemsArray={songsArray}
          path="/songs"
          idPath="song" /*Para entrar na música*/
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Principal;
