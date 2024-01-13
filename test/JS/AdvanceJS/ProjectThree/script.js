const form = document.querySelector('form');

form.addEventListener('submit',function (e) {
    e.preventDefault()



    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const rr = document.querySelector('#rr')

    if ((height === '') || (height < 0) || (isNaN(height))) {
        document.querySelector('#height-error').innerHTML = 'Please provide a valid height'
    }
    else if ((weight === '') || (weight < 0) || (isNaN(weight))) {
        document.querySelector('#height-error').innerHTML = 'Please provide a valid weight'
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.5) {
            rr.innerHTML += `<span class="underweight">Underweight</span>`
            
        }
        else if ((bmi >= 18.5) && (bmi <= 24.9)) {
            rr.innerHTML += `<span class="normal">Normal</span>`
        }
        else if ((bmi >= 25) && (bmi <= 29.9)) {
            rr.innerHTML += `<span class="overweight">Overweight</span>`
        }
        else {
            rr.innerHTML += `<span class="obese">Obese</span>`
        }
    }


});
