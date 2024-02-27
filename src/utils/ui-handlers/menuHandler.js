import inbox from "../../component/Default Project/inbox"
import today from "../../component/Default Project/today"
import history from "../../component/Default Project/history"
import { setCurrentState } from "../state"
import renderLayout from "../render"
import projectDialogHandler from "./projectDialogHandler"

export default function menuHandler(){
    const menu = document.querySelector('.menu')
    const inboxNav = menu.querySelector('.inbox__nav')
    const todayNav = menu.querySelector('.today__nav')
    const projectNav = menu.querySelector('.project__nav')
    const historyNav = menu.querySelector('.history__nav')
    const projectAddButtonDiv = menu.querySelector('.project__add-btn')
    const projectAddButton = projectAddButtonDiv.querySelector('button')
    const projectDialog = document.getElementById('project__add-dialog')

    
    inboxNav.addEventListener('click', () => {
        setCurrentState(inbox())
        renderLayout()
    })
    todayNav.addEventListener('click', () => {
        setCurrentState(today())
        renderLayout()
    })
    projectNav.addEventListener('click', () => {
        const list = menu.querySelector('ul')
        if(list.classList.contains('d-off')){
            openProjectList()
        }else{
            closeProjectList()
        }
    })
    historyNav.addEventListener('click', () => {
        setCurrentState(history())
        renderLayout()
    })
    projectAddButton.addEventListener('click', () => {
        projectDialog.showModal()
        projectDialogHandler()
    })

}

function openProjectList(){
    const menu = document.querySelector('.menu')
    const list = menu.querySelector('ul')
    const arrow = menu.querySelector('.arrow')

    list.classList.remove('d-off')
    arrow.classList.add('rotate-180')
}

function closeProjectList(){
    const menu = document.querySelector('.menu')
    const list = menu.querySelector('ul')
    const arrow = menu.querySelector('.arrow')

    list.classList.add('d-off')
    arrow.classList.remove('rotate-180')
}