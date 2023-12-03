/* function readJson(){
    let xhr = new XMLHttpRequest();
    console.log(xhr);
}

window.onload = readJson(); */
document.getElementById("searchForm").addEventListener("submit", function(event)
{
    //böngésző alapértelmezett működését megakadályozza
event.preventDefault();
const keresettFilm = document.getElementById("search").value
console.log(keresettFilm)

const xhr = new XMLHttpRequest();
console.log(xhr);

const url = `https://www.omdbapi.com/?s=${encodeURI(keresettFilm)}&apiKey=9606ae0f`;
console.log(url)
//ajax kérést beállítjuk
xhr.open("GET", url, true);
//ajax kérés futásának ellenőrzése
xhr.onload = function(){
    //státusz ellenőrzése
    if (xhr.status === 200) {
        //json válasz feldolgozás
        console.log(xhr.responseText);
        const response = JSON.parse(xhr.responseText)
        console.log(response);
        //ha van találat a rendszerben
        if (response.Search){
            renderFilmek(response.Search);
        }else{
            console.error("Nincs találat")
        }
        
    }else{
        //ha a státusz nem 200
        console.error("Ajax hiba:", xhr.statusText);
    }
}
//ajax kérés elküldése
//enélkül nem fut le
xhr.send();
});
function renderFilmek(films){
    const filmekContainer = document.getElementById("filmek");
    filmekContainer.innerHTML = "";
    let text = "";

    Object.entries(films).forEach(val =>{
        const [key, value] = val;
        console.log(value.Title);
        text += value.Title + "<BR>";
        });
        
    filmekContainer.innerHTML = text;
}