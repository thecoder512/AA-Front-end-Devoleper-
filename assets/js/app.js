//declating elements

const toggle = document.querySelector(".toggle"),
  toggleContainerOne = document.querySelector("#container"),
  toggleTwo = document.querySelector(".toggle-two"),
  navMenu = document.querySelector(".nav-menu"),
  traingle = document.querySelectorAll(".traingle"),
  navLink = document.querySelectorAll(".list-link");

//show the menu and second toggle and remove the first toggle
toggle.addEventListener("click", () => {
  toggle.classList.add("toggle-out");
  toggleContainerOne.classList.toggle("tra-in");
  navMenu.classList.add("nav-animation");
});

//remove the menu and second toggle and add the first toggle
toggleTwo.addEventListener("click", () => {
  traingle.forEach((e) => {
    e.classList.add("colory");
  });
  toggle.classList.remove("toggle-out");
  toggleContainerOne.classList.remove("tra-in");
  navMenu.classList.remove("nav-animation");
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
    setTimeout(() => {
      traingle.forEach((e) => {
        e.classList.remove("colory");
      });
    }, 500);
  });
});

//to add the classlist for the aniamiton
const letter = document.querySelectorAll('.letter');
letter.forEach((e) => {
  e.addEventListener('mouseover', () => {
    e.classList.add('animation')
    setTimeout(() => {
      e.classList.remove('animation')
    }, 500);
  });
})
