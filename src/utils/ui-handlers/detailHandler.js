import createDetail from "../../component/Layout/createDetail"
import closeThis from "../common/closeThis"
import openThis from "../common/openThis"

export function detailHandler(){
    const detail = document.querySelector('.detail')
    const closeBtn = detail.querySelector('.close__btn')
    const deleteBtn = detail.querySelector('.delete__btn')


    closeBtn.addEventListener('click', () => {
        closeDetail()
    })

    // deleteBtn.addEventListener('click', () => {

    // })
    
}

export function changeDetail(obj){
    const container = document.querySelector('.container')
    const oldDetail = container.querySelector('.detail')
    const newDetail = createDetail(obj)
    
    container.removeChild(oldDetail)
    container.appendChild(newDetail)
}

export function openDetail(){
    const detail = document.querySelector('.detail')
    if(detail.classList.contains('d-off')){
        openThis(detail)
        detailHandler()
    }
}

export function closeDetail(){
    const detail = document.querySelector('.detail')
    detail.setAttribute('closing','')
    detail.addEventListener('animationend', () => {
        detail.removeAttribute('closing')
        closeThis(detail)
    })
}

export function isDetailOpen(){
    const detail = document.querySelector('.detail')
    if(!detail.classList.contains('d-off')){
        return true
    }else{
        return false
    }
}