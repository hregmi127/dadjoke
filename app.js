const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=";
const apiKey = "c+skKmZfT6sWle6ZUp7qIw==BPkswtedqRUBHudd";

const button = document.querySelector(".btn");
const jokes = document.querySelector(".joke");

button.addEventListener("click", getJoke);

const options = {
    method: "GET", headers: {"X-Api-Key": apiKey,}
}

async function getJoke(){
    try {
        jokes.innerText ="Loading.."
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    jokes.innerText = data[0].joke;
    } catch (error) {
        jokes.innerText = "An error occured.. Try again later"
    }


    
}