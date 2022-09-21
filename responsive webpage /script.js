const header = document.querySelector('header');
const backButton = document.querySelector('#backToTop');
const mobButton = document.querySelector('#mob_button');
const nav = document.querySelector('nav');
let links = document.querySelector('nav ul li a');

window.onscroll = function () {
    scrollFunction();
};

const scrollFunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('nav-active');
        backButton.style.display = 'block';
    } else {
        header.classList.remove('nav-active');
        backButton.style.display = 'none';
    }
};


// Get the button:
let mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




const mobMenu = () => {

    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
        document.body.style.overflow = '';
    } else {
        nav.classList.add(responsive);
        document.body.style.overflow = 'hidden';
    }

};

for (const link of links) {
    link.addEventListener('click', mobMenu);
}

backButton.addEventListener('click', getToTop);
mobButton.addEventListener('click', mobMenu);



/// MODAL


const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

