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
    })
}


