import closeThis from "../common/closeThis"
import openThis from "../common/openThis"

export default function contentHandler(){
    const titleDiv = document.querySelector('.content__title')
    const detailBtn = titleDiv.querySelector('i')

    detailBtn.addEventListener('click', () => {
        detailController()
    })
}

function detailController(){
    const content = document.querySelector('.content')
    const detail = document.querySelector('.detail')
    if(detail.classList.contains('d-off')){
        openThis(detail)
        content.classList.add('show__detail')
    }else{
        closeThis(detail)
        content.classList.add('show__detail')
    }
}
