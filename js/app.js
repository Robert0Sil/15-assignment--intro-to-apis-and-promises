//console.log(superagent);
var request = superagent;

function infPais(apiRes){
  var bandEl = document.querySelector('#app-container .countries-container');
  //console.log(apiRes.body);

  var resObj = apiRes.body;
  //console.log(resObj);
  var arrPais = resObj.map(function infPais(someEl, i){
    //console.log(someEl);
    //console.log(arrPais);
    return `
      <div class="country-card">
        <img class=country-flag src="${someEl.flag}" alt="flag">
        <h4 class="country-name">${someEl.name}</h4>
        <p class="country-capital">${someEl.capital}</p>
      </div>`

  })

  var arrStr = arrPais.join("");
  //console.log(arrStr);

  bandEl.innerHTML = arrPais;
}












// iterar sobre los datos con map esto convertira el array de objetos en un array de strings

// hacer un .join sobre el array de strings para concatenar los datos espedificos que requiere

//hacer inner html para mostrar los datos


request
  .get('https://restcountries.eu/rest/v2/all')
  .then(infPais)
