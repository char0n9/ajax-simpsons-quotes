function getQuotes() {
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    axios.get(url)
        .then(res=>res.data)
        .then (function(arrayOfQuoteObjects){
            arrayOfQuoteObjects.forEach(e=>{
                const quote=`<h2">${e.quote} </h1><img src=${e.image}/> <h4>${e.character}</h4>`
                document.querySelector('#quotes').innerHTML = quote;
            })
        })
        
            
      
}
getQuotes();

function reload() {
    location.reload(true)

}

const btn = document.getElementById('clickMe');
btn.addEventListener('click',reload);