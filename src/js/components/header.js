const header = document.querySelector('.header');

function headerScrollHandler() {
  const scrollTop = window.scrollY;
  if (scrollTop) {
    header.classList.add('header--colored');
  } else {
    header.classList.remove('header--colored');
  }
}

window.addEventListener('scroll', headerScrollHandler);
