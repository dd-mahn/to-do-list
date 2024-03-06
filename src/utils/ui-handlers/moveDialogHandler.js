import projectContainerObj from "../../component/projectContainer"
import closeThis from "../common/closeThis"
import executeWithAnimation from "../common/executeWithAnimation"
import renderLayout from "../render"
import { isMenuOpen, isProjectListOpen, openMenu, openProjectList } from "./menuHandler"

export default function moveDialogHandler(curr, item, index){
    const moveDialog = document.getElementById('item__move-dialog')
    const projectInput = moveDialog.querySelector('.item__project-input')
    const saveBtn = moveDialog.querySelector('.add__btn')
    const cancelBtn = moveDialog.querySelector('.close__btn')

    const projects = projectContainerObj.getAllItem()

    saveBtn.addEventListener('click', () => {
        const menuOpen = isMenuOpen()
        const listOpen = isProjectListOpen()
        const moveItem = curr.getItem(index)
        const destination = projects.find(prj => prj.getValue().title === projectInput.value)
        curr.deleteItem(index)
        destination.addItem(moveItem)
        executeWithAnimation(moveDialog, () => {
            moveDialog.close('saved')
            executeWithAnimation(item, () => {
                closeThis(item)
                renderLayout()
                if(menuOpen) openMenu(false)
                if(listOpen) openProjectList()
            })
        })
    })

    cancelBtn.addEventListener('click', () => {
        executeWithAnimation(moveDialog, () => {
            moveDialog.close('canceled')
        })
    })
}