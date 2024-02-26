import closeThis from "../common/closeThis"
import openThis from "../common/openThis"
import {getCurrentState} from '../state'
import changeDetail from "./changeDetail"
import { detailOpen, detailHandler } from "./detailHandler"

export default function contentHandler(){
    const titleDiv = document.querySelector('.content__title')
    const detailBtn = titleDiv.querySelector('i')
    const contentItems = document.querySelectorAll('.content__item')
    const currentProject = getCurrentState()

    detailBtn.addEventListener('click', () => {
        changeDetail(currentProject)
        detailOpen()
        detailHandler()
        console.log('detail btn clicked')
    })

    contentItems.forEach((item,index) => {
        const title = item.querySelector('.title')
        title.addEventListener('click', () => {
            console.log('item clicked')
            changeDetail(currentProject.getItem(index))
            detailOpen()
            detailHandler()
        })
    })
}


