import inbox from "../../component/Default Project/inbox"
import today from "../../component/Default Project/today"
import history from "../../component/Default Project/history"
import { setCurrentState } from "../state"
import renderLayout from "../render"
import projectDialogHandler from "./projectDialogHandler"
import projectContainerObj from "../../component/projectContainer"
import closeThis from "../common/closeThis"
import openThis from "../common/openThis"
import { deleteProjectConfirmHandler } from "./confirmDialogHandler"
import { editProjectDialogHandler } from "./editDialogHandler"

export default function menuHandler(){
    const menu = document.querySelector('.menu')
    const inboxNav = menu.querySelector('.inbox__nav')
    const todayNav = menu.querySelector('.today__nav')
    const projectNav = menu.querySelector('.project__nav')
    const historyNav = menu.querySelector('.history__nav')
    const projectAddButtonDiv = menu.querySelector('.project__add-btn')
    const projectAddButton = projectAddButtonDiv.querySelector('button')
    const projectDialog = document.getElementById('project__add-dialog')
    const projectListItems = document.querySelectorAll('.project__list-item')

    inboxNav.addEventListener('click', () => {
        setCurrentState(inbox)
        renderLayout()
        openMenu()
    })
    todayNav.addEventListener('click', () => {
        setCurrentState(today)
        renderLayout()
        openMenu()
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
        setCurrentState(history)
        renderLayout()
        openMenu()
    })
    projectAddButton.addEventListener('click', () => {
        projectDialog.showModal()
        projectDialog.classList.add('df')
        projectDialogHandler()
    })

    projectListItems.forEach(item => {
        const projects = projectContainerObj.getAllItem()
        const title = item.querySelector('span')
        const targetProject = projects.find(prj => prj.getValue().title === item.textContent)

        title.addEventListener('click', () => {
            setCurrentState(targetProject)
            renderLayout()
            openMenu()
            openProjectList()
        })

        const editBtn = item.querySelector('.edit__btn')
        editBtn.addEventListener('click', () => {
            const editDialog = document.getElementById('item__edit-dialog')
            const todoForm = editDialog.querySelector('#todo__edit-form')
            const noteForm = editDialog.querySelector('#note__edit-form')
            const projectForm = editDialog.querySelector('#project__edit-form')

            editDialog.showModal()
            openThis(projectForm)
            closeThis(noteForm)
            closeThis(todoForm)
            editProjectDialogHandler(targetProject)
            openProjectList()
        })

        const deleteBtn = item.querySelector('.delete__btn')
        deleteBtn.addEventListener('click', () => {
            const confirmDialog = document.getElementById('confirm__dialog')
            confirmDialog.showModal()
            const index = projectContainerObj.getAllItem().findIndex(prj => prj.getValue().title === title.textContent)
            deleteProjectConfirmHandler(projectContainerObj, index )
        })
    })

}
export function isProjectListOpen(){
    const menu = document.querySelector('.menu')
    const list = menu.querySelector('ul')
    if(!list.classList.contains('d-off')){
        return true
    }else{
        return false
    }
}

export function openProjectList(){
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

export function isMenuOpen(){
    const menu = document.querySelector('.menu')
    if(!menu.classList.contains('d-off')){
        return true
    }else{
        return false
    }
}

export function openMenu(){
    const navBar = document.querySelector('.nav__bar')
    const menu = document.querySelector('.menu')

    closeThis(navBar)
    openThis(menu)
}