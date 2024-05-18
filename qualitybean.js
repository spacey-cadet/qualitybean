//showdropdown function
const menu = document.querySelector('.hamburger-menu')
const dropdownContent = document.querySelector('.dropdown')

menu.addEventListener('click', function(ev) {
        dropdownContent.toggle('toggled');
  }, false)