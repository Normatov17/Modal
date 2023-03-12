const showBtn = document.getElementById('show-btn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const overley = document.getElementById('overley')

// add classList hidden
const addHidden = () => {
    modal.classList.add('hidden')
    overley.classList.add('hidden')
}

const removHidden = () => {
    modal.classList.remove('hidden')
    overley.classList.remove('hidden')
}

showBtn.addEventListener('click',  () => {
    removHidden()
})

closeBtn.addEventListener('click',  () => {
    addHidden()
})

overley.addEventListener('click',  () => {
    addHidden()
})

document.addEventListener('keydown', (e) => {
    if (e.key == "Escape") {
       addHidden()
    }
})