const form = document.querySelector('form')

form.addEventListener('click',  function (e) {
    e.preventDefault()
    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)

    const result = document.querySelector('.results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "Please Provide a Valid height"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please Provide a Valid weight"
    }
    else{
        const bmi = (weight / ((height * height / 10000))).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
    }
})