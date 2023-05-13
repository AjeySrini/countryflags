// var val = fetch("https://api.covidtracking.com/v2/us/daily.json")
// .then((a)=>a.json()).then((a)=>console.log(a));

var divc = document.createElement("div");
divc.className="container";
divc.style.backgroundColor=" #6a6161";
var divrow = document.createElement("div");
divrow.className="row";

divc.append(divrow);
var val = fetch("https://restcountries.com/v3.1/all")
    .then((a) => a.json()).then((a) => createLabel(a));


function createLabel(data) {
 
    for (let i = 0; i < data.length; i++) {
       divrow.innerHTML +=`<div class="col-md-4" >
       <div class="card text-bg-success border-primary mb-3 style="max-width:18rem;">
       <img src="${data[i].flags.png}" class="card-img-top" alt="..." >
       <div class="card-header text-danger" style="text-align:center">${data[i].name.common}</div>
       <div class="card-body "style="text-align:center">
         <p class="card-title">Capital :${data[i].capital}</p>
         <p class="card-text">Region :${data[i].region}</p>
         <p class="card-text">Countrycode :${data[i].cca3}</p>
       </div>
       </div>
       </div>`;
        document.body.append(divc);
        
    }
}
