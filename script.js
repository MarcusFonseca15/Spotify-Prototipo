/*USO APLICADO DE DOM */
const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json()) //devolve a resposta e converte em json
    .then((results) => displayResults(results));
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden"); //adicionei uma classe nos elementos que as esconde
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  //SE NAO DIGITAR NADA: Nao mostra nada
  if (searchTerm === "") { // '===' confere se os valores sao iguais E do mesmo tipo
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return; //para a execução aqui (nao quero que mais nada aconteça)
  }
  requestApi(searchTerm);
});

const pesquisa2 = document.querySelectorAll('.cards'); //seleciona todas as classes e faz uma NodeLIst (tipo array)
