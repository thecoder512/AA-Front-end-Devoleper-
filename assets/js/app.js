
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
function scrollHeader() {
  this.scrollY >= 50 ? scrollDown.classList.add('scroll-scroll') : scrollDown.classList.remove('scroll-scroll')
  // this.scrollY >= 50 ? header.classList.add('header-on-scroll') : header.classList.remove('header-on-scroll')
}
window.addEventListener('scroll', scrollHeader)

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
letter.forEach((e) => {
  e.addEventListener('mouseover', () => {
    // in keyframes you will find animation keyframe if you want to know how this animation work
    e.classList.remove('animate__rubberBand')
    e.classList.add('animate__animated')
    e.classList.add('animate__rubberBand')
    e.classList.remove('animate__heartBeat')


    setTimeout(() => {
      e.classList.remove('animate__animated')
      e.classList.remove('animate__rubberBand')
    }, 800);
  });
})

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


window.onload = () => {
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
        letter[index].classList.add('animate__heartBeat')
        letter[index].classList.add('animate__rubberBand')
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


themToggle.addEventListener('click', () => {
  themToggle.classList.toggle('light')
})


