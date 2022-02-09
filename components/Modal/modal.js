const showModal = document.querySelector('#show-modal') 
const modalCloseBtn = document.querySelector('.modal-close-btn') 
const modal = document.querySelector('.modal') 

showModal.addEventListener('click', ()=>{
    modal.style.display = 'block'
})

modalCloseBtn.addEventListener('click', ()=>{
    modal.style.display = 'none'
})
