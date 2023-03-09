const convertBtn = document.getElementById("convert-btn");
const resultDiv = document.getElementById("result");

function convertTemp() {
  const tempInput = document.getElementById("temp").value;
  const unitFrom = document.getElementById("unit-from").value;
  const unitTo = document.getElementById("unit-to").value;

  if (unitFrom === unitTo) {
    resultDiv.innerHTML = "Please select different units to convert";
    return;
  }

  let convertedTemp;

  switch (unitFrom) {
    case "celsius":
      if (unitTo === "fahrenheit") {
        convertedTemp = (tempInput * 9 / 5) + 32;
      } else if (unitTo === "kelvin") {
        convertedTemp = parseFloat(tempInput) + 273.15;
      }
      break;
    case "fahrenheit":
      if (unitTo === "celsius") {
        convertedTemp = (tempInput - 32) * 5 / 9;
      } else if (unitTo === "kelvin") {
        convertedTemp = (tempInput - 32) * 5 / 9 + 273.15;
      }
      break;
    case "kelvin":
      if (unitTo === "celsius") {
        convertedTemp = tempInput - 273.15;
      } else if (unitTo === "fahrenheit") {
        convertedTemp = (tempInput - 273.15) * 9 / 5 + 32;
      }
      break;
  }

  resultDiv.innerHTML = `${tempInput}&deg; ${unitFrom} = ${convertedTemp.toFixed(2)}&deg; ${unitTo}`;
}

convertBtn.addEventListener("click", convertTemp);