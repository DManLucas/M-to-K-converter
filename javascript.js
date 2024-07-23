(function () {
  "use strict";

  let convertType = "miles";
  const heading = document.querySelector("h1");
  const intro = document.querySelector("p");
  const answerDiv = document.getElementById("answer");
  const form = document.getElementById("convert");

  document.addEventListener("keydown", (e) => {
    let key = e.code;

    if (key === "KeyK") {
      convertType = "kilometers";
      //change heading
      heading.innerHTML = "Kilometers to Miles Converter";
      //change intro paragraph
      intro.innerHTML =
        " Type in a number of kilometers and click the button to convert the distance to miles.";
      //change value of the convertType
    } else if (key === "KeyM") {
      convertType = "kilometers";
      //change heading
      heading.innerHTML = "Miles to Kilometers Converter";
      //change intro paragraph
      intro.innerHTML =
        " Type in a number of miles and click the button to convert the distance to kilometers.";
      //change value of the convertType
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const distance = parseFloat(document.getElementById("distance").value);
    if (distance) {
      if (convertType === "miles") {
        //convert M to K 1.609344
        const converted = (distance * 1.609344).toFixed(3);
        answerDiv.innerHTML = `<h2>${distance} miles converts to ${converted} kilometers</h2>`;
      } else if (convertType === "kilometers") {
        //convert   K to M 0.621371192
        const converted = (distance * 0.621371192).toFixed(3);
        answerDiv.innerHTML = `<h2>${distance} kilometers converts to ${converted} miles</h2>`;
      }
    } else {
      answerDiv.innerHTML = "<h2>Please input a number</h2>";
    }
  });
})();
