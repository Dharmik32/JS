function generateLorem() {
  const paragraphs = document.getElementById("paragraphs").value;
  const apiUrl = `https://api.api-ninjas.com/v1/loremipsum?paragraphs=${paragraphs}`;
  const apiKey = "7Q5gpOc3IKHq+G8V3b5jOw==xHScjF78yoBBhV98";

  fetch(apiUrl, { headers: { "X-Api-Key": apiKey } })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("loremText").innerText = data.text;
    });
}
