const form = document.getElementById("search-form");
// const searchForm = document.getElementById("btn");
const searcInput = document.getElementById("search");

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "25766392-01b12b6ed5ab34bc2910d9c3e";

function imgSearch() {
let searchWord = document.getElementById("search").value;
  fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchWord}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then((response) => {
    response.json()
      .then((data) => {
        const hitsNumber = Math.round(Math.random() * (20 - 1) + 1);
        const largeImageURL = data.hits[hitsNumber].largeImageURL;
        const img = "<img src='" + largeImageURL + "'width=400/>";
        document.getElementById("result").innerHTML = img;
      })
      .finally(() => {
        form.reset();
      });
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = searcInput.value;

if (searchTerm && searchTerm !== "") {
  imgSearch();

} else {
  window.location.reload();
}
});
