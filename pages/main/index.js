const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const logo = document.getElementById('logo')
const cardCollection = document.getElementById('cardCollection')
const left = document.getElementById('left')
const right = document.getElementById('right')
const ourFriends = document.getElementById('our-friends')
const modal = document.getElementById('modal')
//card Carsoul
let margin = 0
left.addEventListener('click', (e) => {
    margin -= 200
    cardCollection.firstElementChild.style = `margin-left:${margin}px`
})
right.addEventListener('click', (e) => {
    margin += 200
    cardCollection.firstElementChild.style = `margin-left:${margin}px`
})
//toggle nav
function toggleButton() {
    if (navList.style.display === 'none') {
        navList.style.display = 'block'
        hamburgerButton.classList.toggle('rotate')
        hamburgerButton.style = ' margin-right: 4rem;'
    } else {
        navList.style.display = 'none'
        hamburgerButton.classList.remove('rotate')
        hamburgerButton.style = ' margin-right: 0;'
    }
}

hamburgerButton.addEventListener('click', toggleButton)

//fetch data
var objMain

fetch('./main.json')
    .then((result) => result.json())
    .then((data) => (objMain = data))
    .then((objMain) => {
        for (let ele of objMain) {
            let card = document.createElement('div')
            card.setAttribute('class', 'card')

            let name = document.createElement('p')
            name.innerHTML = ele['name']
            let image = document.createElement('img')
            let pagimage = document.createElement('img')
            let button = document.createElement('btn')
            let modal = document.createElement('div')
            let modalText = document.createElement('p')
            let close = document.createElement('button')
            close.innerHTML = 'X'
            close.setAttribute('class', 'close')
            modalText.innerHTML = ele['description']
            modal.appendChild(modalText)
            modal.setAttribute('class', 'modal')
            button.innerHTML = 'Learn more'
            button.setAttribute('class', 'btn-card')
            image.src = ele['img']
            pagimage.src = ele['img']
            image.style.width = '240px'
            card.appendChild(modal)
            modal.appendChild(close)
            modal.appendChild(pagimage)
            card.appendChild(image)
            card.appendChild(name)
            card.appendChild(button)
            cardCollection.appendChild(card)
            close.addEventListener('click', (e) => {
                e.target.parentNode.style = 'visibility:hidden'
                document.body.style = 'overflow-y:auto'
            })

            card.addEventListener('click', (e) => {
                if (e.target === image) {
                    e.target.parentNode.firstElementChild.style =
                        'visibility:visible'
                    document.body.style = 'overflow-y:hidden'
                }
            })
        }
    })

let close = document.createElement('button')
close.innerHTML = 'X'
