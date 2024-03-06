import inboxObj from "../../component/Default Project/inbox"
import closeThis from "../common/closeThis"
import executeWithAnimation from "../common/executeWithAnimation"
import renderLayout from "../render"
import { setCurrentState } from "../state"
import { isMenuOpen, isProjectListOpen, openMenu, openProjectList } from "./menuHandler"
import { undoDelete } from "./undoHandler"


export function deleteConfirmHandler(project, item, index){
    const confirmDialog = document.getElementById('confirm__dialog')
    const yesBtn = confirmDialog.querySelector('.add__btn')
    const noBtn = confirmDialog.querySelector('.close__btn')

    yesBtn.addEventListener('click', () => {
        const menuOpen = isMenuOpen()
        const listOpen = isProjectListOpen()
        executeWithAnimation(confirmDialog, () => {
            const deleteItem = project.getItem(index)
            project.deleteItem(index)
            confirmDialog.close('deleted')
            executeWithAnimation(item, () => {
                closeThis(item)
                renderLayout()
                if(menuOpen) openMenu(false)
                if(listOpen) openProjectList()
                undoDelete(project,deleteItem)
            })           
        })
    })

    noBtn.addEventListener('click', () => {
        executeWithAnimation(confirmDialog, () => {
            confirmDialog.close('cancelled')
        })
    })
}

export function deleteProjectConfirmHandler(project, index){
    const confirmDialog = document.getElementById('confirm__dialog')
    const yesBtn = confirmDialog.querySelector('.add__btn')
    const noBtn = confirmDialog.querySelector('.close__btn')

    yesBtn.addEventListener('click', () => {
        executeWithAnimation(confirmDialog, () => {
            const deleteItem = project.getItem(index)
            project.deleteItem(index)
            confirmDialog.close('deleted')
            setCurrentState(inboxObj)
            renderLayout()
            openMenu(false)
            openProjectList()
            undoDelete(project,deleteItem)
        })
    })

    noBtn.addEventListener('click', () => {
        executeWithAnimation(confirmDialog, () => {
            confirmDialog.close('cancelled')
        })
    })
}

