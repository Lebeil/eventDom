// Fonctionnalité 1 && Fonctionnalité 1-bis
let cfooter = document.querySelector("footer");
cfooter.addEventListener('click', function(){
    compteur++
    console.log('clic numero ' + compteur)
});

let compteur = 0

// Fonctionnalité 2
let button = document.querySelector('.navbar-toggler');
let navBar = document.getElementById('navbarHeader');
button.addEventListener("click", function(){
    navBar.classList.toggle('collapse');
});

// Fonctionnalité 3
let card = document.querySelectorAll('.card')[0]; // sélectionne la 1ère carte
//console.log(card)
let edit = card.querySelectorAll('.btn-group>.btn:not(:first-child)')[0];
//console.log(edit)
edit.addEventListener('click', function(){
    card.getElementsByClassName('card-text')[0].style.color = 'red';
});

// Fonctionnalité 4
let card2 = document.querySelectorAll('.card')[1]; // sélectionne la 1ère carte
let edit2 = card2.querySelectorAll('.btn-group>.btn:not(:first-child)')[0];
edit2.addEventListener('click', function(){
    let second = card2.getElementsByClassName('card-text')[0];
    if(second.style.color === 'green'){
        return second.style.color = 'red';
    }
    else{
        return second.style.color = 'green'
    }
});

// Fonctionnalité 5
let head = document.querySelector('header');
let bootstrap = document.querySelector('link');
head.addEventListener('dblclick', function(){
    if (bootstrap.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
        bootstrap.href = '';
    }else {
        bootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    }
});

// Fonctionnalité 6
let view = document.querySelectorAll('.btn.btn-sm.btn-success');
let cardText = document.querySelectorAll('.card-text');
let cardImg = document.querySelectorAll('.card-img-top');

for (let i = 0; i < view.length; i++){
    view[i].addEventListener('mouseover', function () {
        if (cardText[i].style.display !== 'none') {
            cardText[i].style.display = 'none';
            cardImg[i].style.width = "20%"
        } else {
            cardText[i].style.display = '';
            cardImg[i].style.width = "100%"
        }
    })
}

// Fonctionnalité 7
let cardsRight = document.querySelector('.album > .container > .row');
let next = document.querySelector('.btn.btn-secondary.my-2');

next.addEventListener('click', function()  {
    cardsRight.insertBefore(cardsRight.lastElementChild, cardsRight.firstElementChild);
});

// Fonctionnalité 8
let cardsLeft = document.querySelector('.album > .container > .row');
let previous = document.querySelector('.btn.btn-primary.my-2');

previous.removeAttribute('href')
previous.addEventListener('click', function()  {
    cardsLeft.insertBefore(cardsLeft.firstElementChild, cardsLeft.lastElementChild.nextSibling);
});

// Fonctionnalité 9
let logoNav = document.getElementsByClassName("navbar-brand d-flex align-items-center")[0];
var body = document.body


let onLogoNav = function (event) {
    if (event.key === "a") {
        body.className = ''
        body.classList.add("col-4");

    } else if (event.key === "y") {
        body.className = ''
        body.classList.add("col-4", "offset-md-4");
    } else if (event.key === "p") {
        body.className = ''
        body.classList.add("col-4", "offset-md-8");
    } else if (event.key === "b") {
        body.className = ''
    }
}
logoNav.addEventListener('keypress', onLogoNav)

