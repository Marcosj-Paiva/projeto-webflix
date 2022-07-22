function get(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function seach(movie) {
  let requestmovie = get(
    "https://api.themoviedb.org/3/search/movie?api_key=efc27e063cff19aefee686a5f6062149&language=en-US&query=" +
      movie +
      "&page=1&include_adult=false"
  );
  let getmovie = JSON.parse(requestmovie);
  return getmovie;
}

function video(IDMOVIE) {
  let requestvideo = get(
    "https://api.themoviedb.org/3/movie/"+IDMOVIE+"/videos?api_key=efc27e063cff19aefee686a5f6062149&language=en-US"
  );
  let getvideo = JSON.parse(requestvideo);
  return getvideo;
}

function queryString(parameter) {
  var loc = location.search.substring(1, location.search.length);
  var param_value = false;
  var params = loc.split("&");
  for (i = 0; i < params.length; i++) {
    param_name = params[i].substring(0, params[i].indexOf("="));
    if (param_name == parameter) {
      param_value = params[i].substring(params[i].indexOf("=") + 1);
    }
  }
  if (param_value) {
    return param_value;
  } else {
    return undefined;
  }
}

function createh3() {
  let data = seach(queryString("movies"));
  let datavideos = video(data["results"][0]["id"]);
  const texto = document.querySelector("h3");
  const sinopse = document.querySelector("p");

  return {
    text:
      texto.innerHTML =
        data["results"][0]["original_title"],
    sinopse: sinopse.innerHTML = data["results"][0]["overview"],
    img: document.querySelector("#cartaz").src =
      "https://image.tmdb.org/t/p/w500" + data["results"][0]["poster_path"],
    video: document.querySelector("iframe").src =
      "https://www.youtube.com/embed/" +
      datavideos["results"][datavideos["results"].length - 1]["key"],
  };
}

//
//
//["results"][0]["poster_path"]
const h3 = createh3(); //,seach(queryString("movies"))["results"][0]["overview"]);
h3;
