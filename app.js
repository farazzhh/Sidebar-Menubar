

// sidebar show & hide function
const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId),
    bodyPadding = document.getElementById(bodyId)

    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('show');
            toggle.classList.toggle('rotate');
            bodyPadding.classList.toggle('expander');
        })
    }
}

showMenu('nav-toggle', 'navbar', 'body')



// get content of page and put in mainSection element without page refreshing
    const linkColor = document.querySelectorAll('.nav__link');
    
    linkColor.forEach(link => {
        link.addEventListener('click', () => {
            const pageName = link.lastElementChild.innerText;
            
            if (!link.classList.contains("active")) {
                document.querySelector(".active").classList.remove("active");
                link.classList.add("active");
            }
            
            // use Jquery to grab specific page and put in mainSection element(body)
            $("#mainsection").load(`pages/${pageName}.html`);
        })
    })
    


// set default function 
const default_function = () => {
    $("#mainsection").load("pages/home.html");
}


//  (page = Home) when index.html loaded for first time
window.addEventListener("DOMContentLoaded", default_function );