const forms = document.querySelector('form')

forms.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML =` please give a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML =` please give a valid height ${weight}`
    } else {
        (weight / ((height * height) / 1000)).toFixed(2)
        //show result
        results.innerHTML = `<span>${bmi}</span>`
    }

});