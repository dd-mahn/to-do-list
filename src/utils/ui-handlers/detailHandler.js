import closeThis from "../common/closeThis"
import openThis from "../common/openThis"

export function detailHandler(){
    const detail = document.querySelector('.detail')
    const closeBtn = detail.querySelector('.close__btn')
    const deleteBtn = detail.querySelector('.delete__btn')


    closeBtn.addEventListener('click', () => {
        closeThis(detail)
    })

    deleteBtn.addEventListener('click', () => {

    })
    
}

export function openDetail(){
    const detail = document.querySelector('.detail')
    if(detail.classList.contains('d-off')){
        openThis(detail)
        detailHandler()
    }
}