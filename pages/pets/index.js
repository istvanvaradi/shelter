const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const logo = document.getElementById('logo')
const header = document.querySelector('header')
function toggleButton() {
    if (navList.style.display === 'none') {
        navList.style.display = 'block'
        hamburgerButton.classList.toggle('rotate')
        hamburgerButton.style = ' margin-right: 4rem;'
        header.style.height = '100vh'
    } else {
        navList.style.display = 'none'
        hamburgerButton.classList.remove('rotate')
        hamburgerButton.style = ' margin-right: 0;'
    }
}
hamburgerButton.addEventListener('click', toggleButton)
