const searchForm = document.getElementById("search-form");

function imgSearch() {
  let searchWord = document.getElementById("search").value;

  fetch(
    `https://pixabay.com/api/?key=25766392-01b12b6ed5ab34bc2910d9c3e&q=${searchWord}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(function (response) {
    response.json().then((data) => {
      const largeImageURL = data.hits[0].largeImageURL;
      const img = "<img src='" + largeImageURL + "'width=400/>";
      document.getElementById("result").innerHTML = img;
    });
  });
}

searchForm.addEventListener("click", (e) => {
     e.preventDefault();
  imgSearch();
});






