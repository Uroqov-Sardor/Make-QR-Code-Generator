const imgBox = document.querySelector("#imgBox"),
  qrImage = document.querySelector("#qrImage"),
  qrText = document.querySelector("#qrText"),
  qrGeneratorCodebtn = document.querySelector("#qrGeneratorCodebtn");

const genratorQR = () => {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;

    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    console.log(1);
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
};

qrGeneratorCodebtn.addEventListener("click", () => genratorQR());
