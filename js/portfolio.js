// Navigation Script
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let sectionId = anchor.getAttribute('href').split('#')[1]
        let sectionPosition = document.getElementById(sectionId).offsetTop
        if (window.innerWidth > 768) {
            let headerHeight = document.querySelector('header').clientHeight
            sectionPosition -= headerHeight
        }
        window.scrollTo(0, sectionPosition)
    })
})
// Lenguage Menu Script 
let lenguageSelectorBtn = document.getElementById('lenguage-selector-btn')

function setElementPosition(parentElement, childElement) {
    let top = parentElement.offsetTop
    let left = parentElement.offsetLeft
    let heightParent = parentElement.clientHeight
    let widthParent = parentElement.clientWidth
    let widthChild = childElement.clientWidth
    let positionY = top + heightParent + 10
    let positionX = left + (widthParent / 2) - (widthChild / 2)
    console.log(left, widthParent, widthChild)
    childElement.style.left = (`${positionX}px`)
    childElement.style.top = (`${positionY}px`)
}

lenguageSelectorBtn.addEventListener('click', e => {
    let lenguageMenu = document.getElementById('lenguage-menu')
    if (lenguageMenu.hasAttribute('active')) {
        lenguageSelectorBtn.removeAttribute('selected')
        lenguageSelectorBtn.setAttribute('notSelected', '')
        lenguageMenu.removeAttribute('active')
    }
    else {
        if (window.innerWidth > 768) {
            lenguageMenu.setAttribute('active', '')
            lenguageSelectorBtn = document.getElementById('lenguage-selector-btn')
            lenguageSelectorBtn.removeAttribute('notSelected')
            lenguageSelectorBtn.setAttribute('selected', '')
            setElementPosition(lenguageSelectorBtn, lenguageMenu)
        }
        else {
            lenguageSelectorBtn.setAttribute('selected', '')
            lenguageMenu.setAttribute('active', '')
        }
    }
})
// Popups Script
function openPopup() {
    let popupId = this.getAttribute('popupId')
    document.querySelector(`#${popupId}`).setAttribute('active', '')
}

document.querySelectorAll('[popupId]').forEach(e => {
    e.onclick = openPopup
})

function closePopup() {
    this.parentNode.parentNode.removeAttribute('active')
}

document.querySelectorAll('[closePopup]').forEach(e => {
    e.onclick = closePopup
})
// Mobile menu script
document.getElementById('ham-menu').addEventListener('click', e => {
    let header = document.querySelector('header')
    if (header.hasAttribute('active')) {
        header.removeAttribute('active')
    }
    else {
        header.setAttribute('active', '')
    }
})
// Form Submit Script
document.getElementById('form-btn').addEventListener('click', e => {
    e.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let subject = document.getElementById('subject').value
    let company = document.getElementById('company').value
    let phone = document.getElementById('phone').value
    let message = document.getElementById('message').value
    Email.send({
        Host: "smtp.gmail.com",
        Username: "anlucasoliveira@gmail.com",
        Password: "twqfvxbmzvlcuklk",
        To: 'anlucasoliveira@gmail.com',
        From: `${email}`,
        Subject: `${subject}`,
        Body: `Nome: ${name} <br/>
                Empresa: ${company} <br/>
                E-mail: ${email} <br/>
                Telefone: ${phone} <br/>
                Mensagem: ${message}`
    }).then(
        message => {
            if (message == 'OK') {
                document.getElementById('contact-success').setAttribute('active', '')
            }
            else {
                alert(message)
            }
        }
    );
})