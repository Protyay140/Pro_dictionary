const dic = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7ce9508df2msha6f774af068aee1p1edca4jsnca97108553b9',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            speak.innerHTML = `Here is the result for '<strong>${response.word}'</strong> <br>`
           
            def.innerHTML = `<ul> 
                                <li>${response.definition}</li> 
                            </ul>` ;
        })
        .catch(err => console.error(err));
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    dic(search.value);
})