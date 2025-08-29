const form = document.querySelector('form');
const modalResult = document.getElementById('modal-result')
const btnclose = document.getElementById('popup-close')
const resultContent = document.getElementById('result')

const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')

let warn = document.getElementById('error')
let warn2 = document.getElementById('error2')

weightInput.addEventListener('input', ()=>{
    const weight = parseFloat(weightInput.value)
    if (isNaN(weight)) {
        warn.innerText = 'Berat badan harus angka!';
        weight.classList.add('warning');
    } else {
        warn.innerText = '';
        weight.classList.remove('warning');
    }
    
})

heightInput.addEventListener('input', ()=>{
    const height = parseFloat(heightInput.value)
    if (isNaN(height)) {
        warn2.innerText = 'Tinggi badan harus angka!';
        height.classList.add('warning');
    } else {
        warn2.innerHTML = '';
        height.classList.remove('warning')
    }
})


//Berat Badan/(Tinggi Badan/100)^2

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = weightInput.value/(heightInput.value/100)** 2
    let resultBMI = 0
    let status = ''
    let message = ''
    let gif = ''
    if (result <18.5) {
        status = 'Underweight'
        resultBMI = result.toFixed(2)
        message = "Eh, kayak angin lewat nih 😜, jangan lupa makan biar tambah power!"
        gif = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmNuNzRjbmtzdXVkY3U0N3Nva216b2dwbWU5NW5wd2RzdjV3eHByNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/buWJ4V8cHZg88/giphy.gif'
    } else if (result >=18.5 && result <= 24.9) {
        status = 'Normal'
        resultBMI = result.toFixed(2)
        message = "Top markotop! Stabil kayak WiFi full signal 📶. Chill dulu ga siee";
        gif = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW1mYXFvd2ExaWFzdmdmOGw1ZDAzdGpreG0yM2RhczlhbGZwN3p1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iAn1Wh7Fdnh6rKg4Tq/giphy.gif'
    } else if (result >= 25 && result <= 29.9) {
        status = 'Overweight'
        resultBMI = result.toFixed(2)
        message = 'Hmm… nyaman banget ya di zona snack 😅, ayo gerak dikit biar fit!'
        gif = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWM1YzQ0Zm1mbXZseWUxM215OHFwdmF2a2s0dzE2YmNtaTkzYmN3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IH8RsQsOKxyN2/giphy.gif'
    } else {
        status = 'Obesity'
        resultBMI = result.toFixed(2)
        message = "Waduh, waktunya bangun dari sofa 🛋️, biar bisa dance kayak pro! 💃😆"
        gif = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2NsMGJkN2hoN3A2cnNtbThwdXQ3MTI3dmpqbjJoaXpqemlva3ZreSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14qb1Uhf40ndw4/giphy.gif'
    }

    modalResult.style.display = 'flex'
    resultContent.innerHTML = `
        <p>BMI kamu ${resultBMI} artinya kamu ${status}</p>
        <img class="gif" src=${gif} alt="gif"/>
        <p>${message}</p>
    `
})


function closebtn () {
    modalResult.style.display ='none'
}
