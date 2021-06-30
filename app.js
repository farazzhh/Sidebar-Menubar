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

const linkColor = document.querySelectorAll('.nav__link');