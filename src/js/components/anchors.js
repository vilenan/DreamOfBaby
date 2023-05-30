const anchors = document.querySelectorAll('[data-scroll]');

anchors.forEach(anchor => {
  const scrollBlock = document.querySelector('.' + anchor.dataset.scroll);

  anchor.addEventListener('click', (evt) => {
    evt.preventDefault();

    const scrollBlockValue = scrollBlock.getBoundingClientRect().top + pageYOffset- document.querySelector('.header').offsetHeight;

    window.scrollTo({
      top: scrollBlockValue,
      behavior: "smooth",
    });
  })
})
