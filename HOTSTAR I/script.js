// const api_key = "50211769a58cb89de2a84a6ca9b3ba10";


async function main(){
    let query = document.getElementById("query").value;
    let data = await getData(query);
    append(data);
}

async function getData(query) {
    const url = `http://www.omdbapi.com/?s=${query}&page=2&apikey=b1b82e76`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data)
    return data.Search;

}

function append(data){
    // console.log(data);
    if (!data) {
        return;
    }
    let container = document.getElementById("movies");
    container.innerHTML = null;

    data.forEach(function(el){
        let img = document.createElement("img");
        img.src = el.Poster;

        let p = document.createElement("p");
        p.innerText = el.Title;

        let div = document.createElement("div");
        div.setAttribute("class", "movie")
        div.append(img, p);
        container.append(div);
    });
}

let id;
function debounce(func, delay){
    if (id){
        clearInterval(id);
    }
    id = setTimeout(function(){
        func();
    },delay);
}