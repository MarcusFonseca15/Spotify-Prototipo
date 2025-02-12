import "./App.css";
import Header from "./pages/components/Header/Header.jsx";
import Sidebar from "./pages/components/Sidebar/Sidebar.jsx";
import Principal from "./pages/components/Principal/Principal.jsx";
import Footer from "./pages/components/Footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Artists from "./pages/Artists/Artists.jsx";
import SingleArtist from "./pages/SingleArtist/SingleArtist.jsx";
import Songs from "./pages/Songs/Song.jsx";
import SingleSong from "./pages/SingleSong/SingleSong.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Sidebar />
          <div className="content-container">
            <Header /> {/*Fica fora das Rotas pois é comum em todas as pags */}
            {/*Gerencia a estrurua de rotas */}
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/artist/:id" element={<SingleArtist />} />
              <Route path="/songs" element={<Songs />} />
              <Route path="/song/:id" element={<SingleSong />} />{" "}
              {/*/:id indica que tudo depois do : é uma variavel */}
            </Routes>
          </div>
          {/*CONTENT CONTAINER */}
        </div>
        {/*APP CONTAINER */}
      </BrowserRouter>
    </>
  );
}

export default App;
