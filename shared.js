
let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let modalNoButton = document.querySelector('.modal__action--negative')
let selectPlanButtons = document.querySelectorAll('.plane button')
let toggleButton = document.querySelector('.toggle-button')
let mobileNav = document.querySelector('.mobile-nav')
let mainNavItems = document.querySelector('.main-nav__items')

if (selectPlanButtons) {
    for (let i = 0; i < selectPlanButtons.length; i++){
        selectPlanButtons[i].addEventListener("click", () => {
            console.log("click")
            // modal.style.display = 'block'
            // backdrop.style.display = 'block'
            modal.classList.add('open')
            backdrop.classList.add('open')

        })
    }
}

if (backdrop) {  
    backdrop.addEventListener("click", () => {
        mobileNav.classList.remove('open')
        closeModal()
    })
}

if (modalNoButton) {
    modalNoButton.addEventListener("click", closeModal)
}

function closeModal() {
    backdrop.classList.remove('open')
    modal.classList.remove('open')
}

toggleButton.addEventListener("click", () => {
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
})