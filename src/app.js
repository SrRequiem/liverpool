import './style.css';

var quantity = document.querySelector('#quantity');
var addBtn = document.querySelector('#add-btn');

var rateContainer = document.querySelector('.product-rate')
var stars = rateContainer.querySelectorAll('.fa-star');

stars.forEach(star => {
    star.addEventListener('mouseover', () => {
        fillStars(star.dataset.value);
    });
    star.addEventListener('mouseout', () => {
        eraseStars();
    });
});

addBtn.addEventListener('click', () => {
    if (quantity.value < 2) {
        alert('La cantidad no es mayor a 2');
    }
});

function fillStars(value) {
    stars.forEach(star => {
        if (star.dataset.value <= value) {
            star.classList.replace('far', 'fas');
        }
    });
}

function eraseStars() {
    stars.forEach(star => {
        star.classList.replace('fas', 'far');
    });
}