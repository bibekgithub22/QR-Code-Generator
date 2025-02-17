let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function GenerateQr() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      encodeURIComponent(qrText.value);
    imgBox.classList.add("show-img");
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");

  // Save theme preference
  const isDarkTheme = document.body.classList.contains("dark-theme");
  localStorage.setItem("darkTheme", isDarkTheme);
}

// Load saved theme preference
document.addEventListener("DOMContentLoaded", () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  if (isDarkTheme) {
    document.body.classList.add("dark-theme");
  }
});
