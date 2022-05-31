const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const logo = document.getElementById('logo')

function toggleButton() {
    if (navList.style.display === 'none') {
        navList.style.display = 'flex'
    } else {
        navList.style.display = 'none'
    }
}

hamburgerButton.addEventListener('click', toggleButton)
