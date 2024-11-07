let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // Fixed missing '.' for class selector
let sections = document.querySelectorAll('section'); // Fixed typo 'querySelectorall' to 'querySelectorAll'
let navLinks = document.querySelectorAll('header nav a'); // Fixed typo 'querySelectorall' to 'querySelectorAll'

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // Fixed missing parentheses to get the ID

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Fixed incorrect multi-line string syntax
            });
        }
    });
};

// Toggle the menu icon and navbar on click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
