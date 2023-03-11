/// Declaring Elements 
const bigToggle = document.querySelector('.nav-toggles'),
    toggleOne = document.querySelector('.toggle-one'),
    toggleTwo = document.querySelector('.toggle-two'),
    bigTraigle = document.querySelector('.tra-container'),
    bigMenu = document.querySelector('.nav-menu'),
    bigThemeIcon = document.querySelector('.theme-toggle'),
    letter = document.querySelectorAll('.letter'),
    homeTitle = document.querySelector('.home-title'),
    homeSubtitle = document.querySelector('.home-subtitle'),
    logo = document.querySelector('.logo'),
    loading = document.querySelector('.loading'),
    homeBtn = document.querySelector('.button'),
    scrollDown = document.querySelector('.scloll-down'),
    themToggle = document.querySelector('.theme-toggle'),
    logoShape = document.querySelector('.loader'),
    menuLinks = document.querySelectorAll('.list-link'),
    main = document.querySelector('#main'),
    letterTwo = document.querySelectorAll('.letter-two')

// const sectionsPos = new Map();

// document.querySelectorAll("section").forEach((section) => {
//     sectionsPos.set(
//         section.id,
//         (window.scrollY || section.scrollTop) +
//         section.getBoundingClientRect().y
//     );
// });

// Functions

// Toggle Function 
function toggleAnimationIn() {
    bigToggle.classList.add('toggle-out')
    bigTraigle.classList.add('tra-in')
    main.classList.add('hide')
    setTimeout(() => bigMenu.classList.add('show-menu'), 400)
}

function toggleAnimationOut() {
    bigToggle.classList.remove('toggle-out')
    bigTraigle.classList.add('colory')
    bigTraigle.classList.remove('tra-in')
    bigMenu.classList.remove('show-menu')
    main.classList.remove('hide')

    setTimeout(() => bigTraigle.classList.remove('colory'), 350)
}

// theme toggle function
function themeIconAnimation() {
    bigThemeIcon.classList.toggle('light')
}

// letter animation function
function letterAnimaion(e) {
    e.forEach((e) => {
        e.addEventListener('mouseover', () => {
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

// on load function
function windowLoad() {
    window.addEventListener('load', () => {
        document.body.style.overflow = 'hidden'
        logoShape.classList.add('animation')
        main.classList.add('tags')

        setTimeout(() => {
            logo.classList.add('logo-after-animtion')
        }, 2200);

        setTimeout(() => {
            toggleOne.classList.add('toggle-on-loading');
            loading.classList.add('loading-off');
        }, 3250);

        setTimeout(() => {
            homeTitle.classList.add('home-title-animation')
            for (let index = 0; index < letter.length; index++) {
                setTimeout(() => {
                    letter[index].style = 'opacity: 1; scale: 1;'
                    letter[index].classList.add('animate__animated');
                    letter[index].classList.add('animate__rubberBand');
                    letter[index].classList.add('animate__bounceIn');

                    letter[index].classList.add('chart')
                }, 90 * index);
            }
        }, 3700);

        setTimeout(() => {
            homeSubtitle.classList.add('animate__animated');
            homeSubtitle.classList.add('animate__fadeInUp');
            homeSubtitle.classList.add('home-subtitle-animation');
        }, 4200);

        setTimeout(() => {
            homeBtn.classList.add('animate__animated');
            homeBtn.classList.add('animate__backInLeft');
            homeBtn.classList.add('home-btn-animation');
        }, 4700);

        setTimeout(() => {
            themToggle.classList.add('dark');
        }, 5700);

        setTimeout(() => {
            scrollDown.classList.add('show-scroll');
            document.body.style.overflow = 'auto';
        }, 6200);

    })
}



toggleOne.addEventListener('click', toggleAnimationIn)
toggleTwo.addEventListener('click', toggleAnimationOut)
menuLinks.forEach((e) => {
    e.addEventListener('click', toggleAnimationOut)
});
bigThemeIcon.addEventListener('click', themeIconAnimation)
letterAnimaion(letter)
letterAnimaion(letterTwo)
windowLoad()

// console.log(bigTitleLetter)