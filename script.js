const menuButton = document.querySelector('.menuButton');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.navigationBar');
const navItems = document.querySelectorAll('.navItem');

let showMenu = false;
menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuButton.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    showMenu = true;
  } else {
    menuButton.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false;
  }
}

$('nav')
  .find('.pageLink')
  .click(function(e) {
    menuButton.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false;
    let section = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top - 40
    });
  });

function handlePage() {
  handleIconClick();
}

$('.videoPlayer').hide();
$('#viewDemo').click(function(e) {
  e.preventDefault();
  $('.videoPlayer').fadeIn();
});

$(handlePage);

const nameLine = document.querySelectorAll('.nameLine');

function isScrolled() {
  const docViewTop = $(window).scrollTop();
  return docViewTop > 0;
}

$(document).ready(function() {
  $(window).scroll(function() {
    if (isScrolled() === true) {
      $(nameLine).addClass('moveToTop');
    } else {
      $(nameLine).removeClass('moveToTop');
    }
  });
});
