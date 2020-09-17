const triggerElement = document.querySelector('.hidden_action')
const hiddenElement = document.querySelector('.hidden_field')

const showHideElement = function (el) {
  hiddenElement.classList.toggle('triggered')
  triggerElement.classList.toggle('triggered')
}

triggerElement.addEventListener('click', showHideElement)
