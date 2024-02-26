import closeThis from "../common/closeThis"
import openThis from "../common/openThis"

export function detailHandler(){
    const detail = document.querySelector('.detail')
    const closeBtn = detail.querySelector('.close__btn')
    const deleteBtn = detail.querySelector('.delete__btn')
    const content = document.querySelector('.content')


    closeBtn.addEventListener('click', () => {
        console.log('close button clicked')
        closeThis(detail)
        content.classList.remove('show__detail')
    })
    
}

export function detailOpen(){
    const content = document.querySelector('.content')
    const detail = document.querySelector('.detail')
    if(detail.classList.contains('d-off')){
        openThis(detail)
        content.classList.add('show__detail')
        console.log('detail is opened')
        detailHandler()
    }
}