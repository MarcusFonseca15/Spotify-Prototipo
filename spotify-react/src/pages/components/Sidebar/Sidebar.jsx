import React from "react";
import "./Sidebar.css";
import logoSpotify from "../../../assets/icons/logo-spotify.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-navigation">
        <div className="logo">
          <Link to="/">
            <img src={logoSpotify} alt="Logo do Spotify" />
          </Link>
        </div>
        <ul>
          <li>
            <a href="">
              <span className="fa fa-home"></span>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="">
              <span className="fa fa-search"></span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>

      <nav className="sidebar-lib">
        <div className="lib-content">
          <button className="lib-button">
            <span className="fa fas fa-book"></span>
            <span>Sua biblioteca</span>
          </button>
          <span className="fa fa-plus"></span>
        </div>

        <section className="section-playlist">
          <div className="section-playlist-content">
            <span className="text title">Crie sua primeira playlist</span>
            <span className="text subtitle">É fácil, vamos te ajudar!</span>
            <button className="section-playlist-button">Criar Playlist</button>
          </div>
        </section>

        <div className="cookies">
          <a href="">Cookies</a>
        </div>
        <div className="language">
          <button className="language-button">
            <span className="fa fa-globe"></span>
            <span>Português do Brasil</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
