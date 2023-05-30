const ancors = document.querySelectorAll('[data-scroll]');

ancors.forEach(ancor => {
  ancor.addEventListener('click', (evt) => {
    evt.preventDefault();

    const menuLink = evt.target;
    const scrollBlock = document.getElementById(menuLink.dataset.scroll);
    const scrollBlockValue = scrollBlock.getBoundingClientRect().top + pageYOffset- document.querySelector('.header').offsetHeight;

    window.scrollTo({
      top: scrollBlockValue,
      behavior: "smooth",
    });
  })
})
