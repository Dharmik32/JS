console.log("HELLO");

// oLDDuHXZ6zugk7zL8N6NUqrXy6bpalNN;
// oLDDuHXZ6zugk7zL8N6NUqrXy6bpalNN;

// video api key
//PG2Z9HRQ6ASjllxEBAtAake8n8a5W1hI

const API_KEY = "oLDDuHXZ6zugk7zL8N6NUqrXy6bpalNN";
const div = document.getElementById("divs");
console.log("div", div);

function search() {
  const searchTerm = document.getElementById("search-input").value.trim();
  console.log("search", searchTerm);
  div.innerHTML = "";
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=10`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
      data.data.forEach((gif) => {
        const d = document.createElement("div");
        d.classList.add("item");
        const img = document.createElement("img");
        img.src = gif.images.fixed_height.url;
        d.appendChild(img);
        div.appendChild(d);
      });
    });
}
