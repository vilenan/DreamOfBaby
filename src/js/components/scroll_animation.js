const windowHeight = document.documentElement.clientHeight;
const windowCenter = windowHeight/2;

const directionsSection = document.querySelector('.directions');
const items = document.querySelectorAll('.directions__item');
const directionsSectionHeight = directionsSection.offsetHeight;

const advantagesBox = document.querySelector('.advantages');
const advantages = document.querySelectorAll('.advantages__item');
const advantagesBoxHeight = advantagesBox.offsetHeight;

const aboutSection = document.querySelector('.about');
const aboutSectionHeight =aboutSection.offsetHeight;

const servicesBox = document.querySelector('.services');
const servicesBoxHeight = servicesBox.offsetHeight;

const processBox = document.querySelector('.process');
const processBoxHeight = processBox.offsetHeight;

const heroContent = document.querySelector('.hero__content-wrapper');

document.addEventListener('DOMContentLoaded', () => {
  heroContent.classList.add('hero__content-wrapper--visible');
})

function scrollDirectionsBlockHandler() {
  // направления деятельности
  if (( directionsSection.getBoundingClientRect().top <= windowHeight - directionsSectionHeight/2)
    || (directionsSection.getBoundingClientRect().top <= windowCenter)) {
    items.forEach((item) => {
      item.classList.add('directions__item--visible');
    })

  } else {
    items.forEach((item) => {
      item.classList.remove('directions__item--visible');
    })
  }

  // преимущества
  if ( advantagesBox.getBoundingClientRect().top <=  windowHeight - advantagesBoxHeight/2) {
    advantages.forEach((advantage) => {
      advantage.classList.add('advantages__item--visible');
    });
  } else {
    advantages.forEach((advantage) => {
      advantage.classList.remove('advantages__item--visible');
    });
  }

  //обо мне
  if (aboutSection.getBoundingClientRect().top <= windowHeight - aboutSectionHeight/2) {
    aboutSection.classList.add('about--visible');
  } else {
    aboutSection.classList.remove('about--visible');
  }

  //услуги
  if (( servicesBox.getBoundingClientRect().top <= windowHeight - servicesBoxHeight/2 )
    || ( servicesBox.getBoundingClientRect().top <= windowCenter)) {
    servicesBox.classList.add('services--visible');
  } else {
    servicesBox.classList.remove('services--visible');
  }

  //как работаю
  if (processBox.getBoundingClientRect().top <= windowHeight - processBoxHeight/2 ) {
    processBox.classList.add('process--visible');
  } else {
    processBox.classList.remove('process--visible');
  }


};

window.addEventListener('scroll', scrollDirectionsBlockHandler);
