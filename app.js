
/*const searchInput = document.getElementById("searchBox");

if(searchInput){
searchInput.addEventListener("keyup",function(){

let q=this.value.toLowerCase();

let filtered=allProducts.filter(p=>p.name.toLowerCase().includes(q));

displayProducts(filtered);

});
} */

const langData = {

en:{

title:"Women Community Marketplace",

subtitle:"Empowering Women Entrepreneurs",

navHome:"Home",

navProducts:"Products",

navServices:"Services",

navTraining:"Training",

navContact:"Contact"

},

ta:{

title:"பெண்கள் சமூக சந்தை",

subtitle:"பெண் தொழில்முனைவோருக்கான தளம்",

navHome:"முகப்பு",

navProducts:"பொருட்கள்",

navServices:"சேவைகள்",

navTraining:"பயிற்சி",

navContact:"தொடர்பு"

}

};

function setLang(lang){

document.getElementById("title").innerText=langData[lang].title;

document.getElementById("subtitle").innerText=langData[lang].subtitle;

document.getElementById("navHome").innerText=langData[lang].navHome;

document.getElementById("navProducts").innerText=langData[lang].navProducts;

document.getElementById("navServices").innerText=langData[lang].navServices;

document.getElementById("navTraining").innerText=langData[lang].navTraining;

document.getElementById("navContact").innerText=langData[lang].navContact;

}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log("Service Worker Registered"))
      .catch(err => console.log("SW Error", err));
  });
}

function showPage(page){

let sections=document.querySelectorAll("section");

sections.forEach(function(sec){
sec.style.display="none";
});

let target=document.getElementById(page);

if(target){
target.style.display="block";
}else{
console.warn("Page not found:",page);
}

}



// PRODUCTS

let allProducts=[];

fetch("products.json")

.then(res=>res.json())

.then(data=>{

allProducts=data;

displayProducts(allProducts);

});

// DISPLAY PRODUCTS

function displayProducts(products){

let html="";

products.forEach(p=>{

let wp=`https://wa.me/${p.contact}?text=I want to order ${p.name}`;

html+=`

<div class="card">

<h4>${p.name}</h4>

<p>Price: ₹${p.price}</p>

<p>${p.description}</p>

<a class="whatsapp" href="${wp}" target="_blank">Order WhatsApp</a>

</div>

`;

});

document.getElementById("productList").innerHTML=html;

}

// SEARCH
const searchInput = document.getElementById("searchBox");

if(searchInput){
searchInput.addEventListener("keyup",function(){

let q=this.value.toLowerCase();

let filtered=allProducts.filter(p=>p.name.toLowerCase().includes(q));

displayProducts(filtered);

});
}


/*document.getElementById("searchBox").addEventListener("keyup",function(){

let q=this.value.toLowerCase();

let filtered=allProducts.filter(p=>p.name.toLowerCase().includes(q));

displayProducts(filtered);

});*/


// Services

let allServices=[];

fetch("services.json")

.then(res=>res.json())

.then(data=>{

allServices=data;

displayServices(allServices);

});

// DISPLAY servicesS

function displayServices(services){

let html="";

services.forEach(s=>{

let wp=`https://wa.me/${s.contact}?text=I want to order ${s.name}`;

html+=`

<div class="card">

<h4>${s.name}</h4>



<p>${s.description}</p>

<a class="whatsapp" href="${wp}" target="_blank">Order WhatsApp</a>

</div>

`;

});

document.getElementById("servicesList").innerHTML=html;

}

// Events 
let allEvents=[];

fetch("events.json")

.then(res=>res.json())

.then(data=>{

allEvents=data;

displayEvents(allEvents);

});


// DISPLAY Events

function displayEvents(events){

let html="";

events.forEach(e=>{

let wp=`https://wa.me/${e.contact}?text=I want to order ${e.title}`;

html+=`

<div class="card">

<h4>${e.title}</h4>

<p>${e.location}</p>

<a class="whatsapp" href="${wp}" target="_blank">Order WhatsApp</a>

</div>`;

});

document.getElementById("eventsList").innerHTML=html;

}
