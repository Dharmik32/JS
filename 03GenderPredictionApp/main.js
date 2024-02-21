function predictGender() {
  const userName = document.getElementById("nameInput").value.trim();
  console.log("object", userName);

  fetch(`https://api.genderize.io?name=${userName}`)
    .then((response) => response.json())
    .then(
      (data) =>
        (document.getElementById(
          "result"
        ).innerText = `The predicted gender for the name "${userName}" is ${data.gender}`)
    );
}
