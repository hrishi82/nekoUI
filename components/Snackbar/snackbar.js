const showToast = document.querySelector('#show-toast') 
const toastCloseBtn = document.querySelector('.toast-close-btn') 
const toast = document.querySelector('.toast') 

showToast.addEventListener('click', ()=>{
    toast.style.display = 'flex'
})

toastCloseBtn.addEventListener('click', ()=>{
    toast.style.display = 'none'
})
