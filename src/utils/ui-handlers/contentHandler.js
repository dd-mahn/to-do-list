import closeThis from '../common/closeThis'
import openThis from '../common/openThis'
import {getCurrentState} from '../state'
import changeDetail from "./changeDetail"
import { openDetail, detailHandler } from "./detailHandler"

export default function contentHandler(){
    const titleDiv = document.querySelector('.content__title')
    const detailBtn = titleDiv.querySelector('i')
    const contentItems = document.querySelectorAll('.content__item')
    const currentProject = getCurrentState()

    detailBtn.addEventListener('click', () => {
        changeDetail(currentProject)
        openDetail()
        detailHandler()
    })

    contentItems.forEach((item,index) => {
        const title = item.querySelector('.title')
        title.addEventListener('click', () => {
            changeDetail(currentProject.getItem(index))
            openDetail()
            detailHandler()
        })

        const editBtn = item.querySelector('.edit__btn')
        editBtn.addEventListener('click', () => {
            const editDialog = document.getElementById('item__edit-dialog')
            const todoForm = editDialog.querySelector('#todo__edit-form')
            const noteForm = editDialog.querySelector('#note__edit-form')

            editDialog.showModal()
            if(item.classList.contains('note')){
                openThis(noteForm)
                closeThis(todoForm)
            }else{
                openThis(todoForm)
                closeThis(noteForm)
            }
        })
    })
}


