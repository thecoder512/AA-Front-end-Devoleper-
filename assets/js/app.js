


//declating elements
const toggle = document.querySelector(".toggle"),
  header = document.querySelector('.header'),
  toggleContainerOne = document.querySelector("#container"),
  toggleTwo = document.querySelector(".toggle-two"),
  navMenu = document.querySelector(".nav-menu"),
  traingle = document.querySelectorAll(".traingle"),
  navLink = document.querySelectorAll(".list-link"),
  main = document.getElementById('main'),
  body = document.querySelector('body'),
  resume = document.querySelector('.resume-download'),
  scrollDown = document.querySelector('.scloll-down')

/*=============== CHANGE BACKGROUND HEADER ===============*/

// window.onload = () => {
//   body.style = 'overflow:auto; height: auto; position: relative;'
// }

let lastKnownScrollPosition = window.scrollY
let sticky = false

function hasScrolled() {
  let currentScrollPosition = window.scrollY

  if (currentScrollPosition > lastKnownScrollPosition + 10) {

    header.classList.add("header-on-scroll")
    header.classList.add("sticky")
    scrollDown.classList.remove('show-scroll')

    // sections elements show
    showSectionTitle(letterTwo, aboutSection)

  } else if (currentScrollPosition < lastKnownScrollPosition - 11) {

    header.classList.remove("header-on-scroll")
    header.classList.add('glassy')
    scrollDown.classList.add('show-scroll')

    if (window.scrollY < 40) {
      header.classList.remove("sticky")
    }
  }
  lastKnownScrollPosition = currentScrollPosition
}

window.addEventListener('scroll', hasScrolled)

/*=============== NAV MENU ===============*/

toggle.addEventListener("click", () => {

  toggle.classList.add("toggle-out");
  toggleContainerOne.classList.toggle("tra-in");
  navMenu.classList.add("nav-animation");
  main.classList.add('main-animation')
  resume.classList.add('resume-push')

});

/*=============== REST MENU ===============*/

toggleTwo.addEventListener("click", () => {

  traingle.forEach((e) => {
    e.classList.add("colory");
  });

  toggle.classList.remove("toggle-out");
  toggleContainerOne.classList.remove("tra-in");
  navMenu.classList.remove("nav-animation");
  resume.classList.remove('resume-push')
  main.classList.remove('main-animation');

  // this for removing the blur color after the animation to start new onw with white color
  setTimeout(() => {
    traingle.forEach((e) => {
      e.classList.remove("colory");
    });
  }, 500);
});

/*=============== NAV LINKS ===============*/

navLink.forEach((e) => {
  e.addEventListener("click", () => {

    traingle.forEach((tra) => {
      tra.classList.add("colory");
    });

    toggle.classList.remove("toggle-out");
    toggleContainerOne.classList.remove("tra-in");
    navMenu.classList.remove("nav-animation");
    // this for removing the blur color after the animation to start new onw with white color
    main.classList.remove('main-animation')

    setTimeout(() => {
      traingle.forEach((e) => {
        e.classList.remove("colory");
      });
    }, 500);
  });
});

/*=============== LETTERS ANIMATION ===============*/

const letter = document.querySelectorAll('.letter');
function letterAnimaion(e) {
  e.forEach((e) => {
    e.addEventListener('mouseover', () => {
      // in keyframes you will find animation keyframe if you want to know how this animation work
      e.classList.add('animate__animated')
      e.classList.add('animate__rubberBand')
      e.classList.remove('animate__bounceIn')


      setTimeout(() => {
        e.classList.remove('animate__animated')
        e.classList.remove('animate__rubberBand')
      }, 750);
    });
  })
}

letterAnimaion(letter)

/*=============== THE PAGE IN LOADING ===============*/

const logoShape = document.querySelector('.loader'),
  loading = document.querySelector('.loading'),
  logo = document.querySelector('.logo'),
  homeTitle = document.querySelector('.home-title'),
  homeSubtitle = document.querySelector('.home-subtitle'),
  homeButton = document.querySelector('.home-button'),
  shape = document.querySelector('.shape'),
  dot = document.querySelectorAll('.dot'),
  themToggle = document.querySelector('#theme-toggle')


function onload() {
  body.classList.add('body-on-loading')
  logoShape.classList.add('animation')
  main.classList.add('tags')
  setTimeout(() => {
    body.classList.remove('body-on-loading')

  }, 3000);
  setTimeout(() => {
    logo.classList.add('logo-after-animtion')
  }, 2200);
  setTimeout(() => {
    toggle.classList.add('toggle-on-loading')
    loading.classList.add('loading-off')
  }, 3250);
  setTimeout(() => {
    homeTitle.classList.add('home-title-animation')
  }, 3700);
  setTimeout(() => {
    homeSubtitle.classList.add('home-title-animation')
    for (let index = 0; index < letter.length; index++) {
      setTimeout(() => {
        letter[index].style = 'opacity: 1; scale: 1;'
        letter[index].classList.add('animate__animated')
        letter[index].classList.add('animate__bounceIn')
        letter[index].classList.add('chart')
      }, 100 * index);
    }
  }, 4200);
  setTimeout(() => {
    homeButton.classList.add('home-button-animation')
  }, 4700);
  setTimeout(() => {
    themToggle.classList.add('dark')
  }, 5700);
  setTimeout(() => {
    scrollDown.classList.add('show-scroll')
  }, 6200);
}

window.onload = onload()


/*======================== THEME TOGGLE ========================*/

themToggle.addEventListener('click', () => {
  themToggle.classList.toggle('light')
})


/*======================== ABOUT TITLE ========================*/

const letterTwo = document.querySelectorAll('.letter-two')
const aboutSection = document.querySelector('.about-section')

letterAnimaion(letterTwo)

function showSectionTitle(x, y) {
  y.classList.add('show')
  for (let index = 0; index < x.length; index++) {
    setTimeout(() => {
      x[index].style = 'opacity: 1; scale: 1;'
      x[index].classList.add('animate__animated')
      x[index].classList.add('animate__bounceIn')
    }, 200 * index);
  }
}
