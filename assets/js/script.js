'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

function openNewtab(url) {
  window.open(url, '_blank');
}
// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');

for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}

// const links = document.querySelectorAll('a');

// links.forEach(link => {
//   link.addEventListener('click', function (event) {
//     event.preventDefault(); // Prevents the default action of following the link
//     const url = this.getAttribute('href'); // Get the URL from the clicked link
//     openNewtab(url); // Open the URL in a new tab
//   });
// });



let includes = document.getElementsByTagName('include');
for (var i = 0; i < includes.length; i++) {
  let include = includes[i];
  load_file(includes[i].attributes.src.value, function (text) {
    include.insertAdjacentHTML('afterend', text);
    include.remove();
  });
}
function load_file(filename, callback) {
  fetch(filename).then(response => response.text()).then(text => callback(text));
}