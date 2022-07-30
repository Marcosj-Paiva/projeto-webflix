//var XMLHttpRequest = require('xhr2');
export function get(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

export function catalogpopularmovie() {
  let data = get(
    "https://api.themoviedb.org/3/movie/popular?api_key=efc27e063cff19aefee686a5f6062149"
  );
  data = JSON.parse(data);
  return data;
}

export function catalogpopulartv() {
  let datatv = get(
    "https://api.themoviedb.org/3/tv/popular?api_key=efc27e063cff19aefee686a5f6062149&language=en-US&page=1"
  );
  datatv = JSON.parse(datatv);
  return datatv;

}

export function getserie(idtv) {
  let dataserie = get(
    "https://api.themoviedb.org/3/tv/"+idtv+"?api_key=efc27e063cff19aefee686a5f6062149&language=en-US&page=1"
  );
  dataserie = JSON.parse(dataserie);
  return dataserie;
}

export function seach(movie) {
  let requestmovie = get(
    "https://api.themoviedb.org/3/search/movie?api_key=efc27e063cff19aefee686a5f6062149&language=en-US&query="+movie+"&page=1&include_adult=false"
  );
  let getmovie = JSON.parse(requestmovie);
  return  getmovie;
}


