
//declating elements
const toggle = document.querySelector(".toggle"),
  toggleContainerOne = document.querySelector("#container"),
  toggleTwo = document.querySelector(".toggle-two"),
  navMenu = document.querySelector(".nav-menu"),
  traingle = document.querySelectorAll(".traingle"),
  navLink = document.querySelectorAll(".list-link"),
  main = document.getElementById('main');

//show the menu and second toggle and remove the first toggle
toggle.addEventListener("click", () => {
  toggle.classList.add("toggle-out");
  toggleContainerOne.classList.toggle("tra-in");
  navMenu.classList.add("nav-animation");
  main.classList.add('main-animation')
});

//remove the menu and second toggle and add the first toggle
toggleTwo.addEventListener("click", () => {
  traingle.forEach((e) => {
    e.classList.add("colory");
  });
  toggle.classList.remove("toggle-out");
  toggleContainerOne.classList.remove("tra-in");
  navMenu.classList.remove("nav-animation");
  main.classList.remove('main-animation')
  // this for removing the blur color after the animation to start new onw with white color
  setTimeout(() => {
    traingle.forEach((e) => {
      e.classList.remove("colory");
    });
  }, 500);
});

// clear the screen when nav link activated
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

// to add the classlist for the aniamiton
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

// loading animation

const logoShape = document.querySelector('.logo-shape'),
  loading = document.querySelector('.loading'),
  homeTitle = document.querySelector('.home-title'),
  homeSubtitle = document.querySelector('.home-subtitle'),
  homeButton = document.querySelector('.home-button'),
  shape = document.querySelector('.shape'),
  dot = document.querySelectorAll('.dot'),
  themToggle = document.querySelector('#theme-toggle');


window.onload = () => {
  logoShape.classList.add('animation')
  main.classList.add('tags')
  setTimeout(() => {
    loading.classList.add('logo-after-animtion')
  }, 2000);
  setTimeout(() => {
    toggle.classList.add('toggle-on-loading')
  }, 3000);
  setTimeout(() => {
    homeTitle.classList.add('home-title-animation')

  }, 3500);
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
  }, 4000);
  setTimeout(() => {
    homeButton.classList.add('home-button-animation')
  }, 4500);
  setTimeout(() => {
    themToggle.classList.add('dark')
  }, 5500);
}


themToggle.addEventListener('click', () => {
  themToggle.classList.toggle('light')
})

