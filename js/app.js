/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section") // geting all sections in the page
const navUl = document.querySelector("#navbar__list") // get the ul 
var activeElemet // variable to store active section, by doing that i dont need to use a querySelector once more to remove the active class form the prevous section
var activeButton
var isScrolling

const oldLocation = location;


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function setActiveButton(button, rectTop) {
    button.classList.add('selected-button');
    window.scrollTo(0, rectTop);
}

function resetActiveElements(){ // a function to remove the current active elements
    if (activeElemet != undefined) {
     
        activeElemet.classList.remove("your-active-class")
        activeButton.classList.remove("selected-button")
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

function setActiveClass() {
    for (let i = 0; i < sections.length; i++) { // i used this for loop insted of "of" so i can get the button and section using the same index insted of using 2 for loops
        let section = sections[i];
        let rectTop = section.getBoundingClientRect().top
        if (rectTop < 300 && rectTop > -400) {
            console.log(section.id + " " + rectTop)
            resetActiveElements() 
            activeElemet = section
            activeButton = buttons[i]
            section.classList.add("your-active-class")
            activeButton.classList.add("selected-button")
            //window.history.pushState("", "/", section.id );
            return
        }
    }

    resetActiveElements() // rmove the active elements if we scroll top and there is no section showd

}



// build the nav

for (section of sections) {
    let dataNav = section.getAttribute("data-nav")
    let rectTop = section.getBoundingClientRect().top // to get the coordnets of each section        
    navUl.innerHTML += `<li><button  onclick="setActiveButton(this,${rectTop})" class="menu__link"> ${dataNav}</button></li>`
}

const buttons = document.querySelectorAll("button") // geting all buttons in the page

document.addEventListener("scroll", (e) => {
    window.clearTimeout(isScrolling)
    isScrolling = setTimeout(setActiveClass, 500)
})
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


