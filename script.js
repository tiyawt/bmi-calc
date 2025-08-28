const form = document.querySelector('form');
const resultTeks = document.getElementById('result')

//Berat Badan/(Tinggi Badan/100)^2

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value)
    const height = parseFloat(document.getElementById('height').value)

    const result = weight/(height/100)** 2
    if (result <18.5) {
        resultTeks.innerHTML = `Yout BMI is ${result.toFixed(2)} which means your are <b>Underweight</b>`
    } else if (result >=18.5 && result <= 24.9) {
        resultTeks.innerHTML = `Yout BMI is ${result.toFixed(2)} which means your are <b>Normal</b>`
    } else if (result >= 25 && result <= 29.9) {
        resultTeks.innerHTML = `Yout BMI is ${result.toFixed(2)} which means your are <b>Overweight</b>`
    } else {
        resultTeks.innerHTML = `Yout BMI is ${result.toFixed(2)} which means your are <b>Obesity</b>`
    }

})

