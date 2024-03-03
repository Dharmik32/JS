const textInput = document.getElementById("text-input");
const generateButton = document.getElementById("generate-button");
const qrcodeDiv = document.getElementById("qr-code");
const downloadButton = document.getElementById("download-button");

generateButton.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text) {
    qrcodeDiv.innerHTML = ""; // clear the old QR code image
    const qrCode = new QRCode(qrcodeDiv, {
      text: text,
      width: 200,
      height: 200,
    });
    downloadButton.classList.remove("hidden");
  } else {
    alert("Please enter some text to generate a QR code.");
  }
});

downloadButton.addEventListener("click", () => {
  const qrCodeImage = document.querySelector("#qr-code img");
  const downloadLink = document.createElement("a");
  downloadLink.href = qrCodeImage.src;
  downloadLink.download = "qrcode.png";
  downloadLink.click();
});
