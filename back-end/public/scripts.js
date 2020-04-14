const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

cards.forEach(card => card.addEventListener('click', function() {
  const videoId = card.getAttribute('id')

  modalOverlay.classList.add('active')

  modalOverlay.querySelector('iframe').src=`https://www.youtube.com/embed/${videoId}`
}))

document.querySelector('.close-modal')
  .addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src=""
  })


