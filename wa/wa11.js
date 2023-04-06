const jokebtnEl = document.getElementById("joke-btn");
const jokedivEl = document.getElementById("joke");

jokebtnEl.addEventListener("click", generateJoke);

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json"
    }
  };

  const response = await fetch("https://icanhazdadjoke.com/", config);
  const data = await response.json();
  jokedivEl.innerHTML = data.joke;
}