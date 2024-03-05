import inboxObj from "../../component/Default Project/inbox"
import executeWithAnimation from "../common/executeWithAnimation"
import renderLayout from "../render"
import { setCurrentState } from "../state"
import { undoDelete } from "./undoHandler"


export function deleteConfirmHandler(project, index){
    const confirmDialog = document.getElementById('confirm__dialog')
    const yesBtn = confirmDialog.querySelector('.add__btn')
    const noBtn = confirmDialog.querySelector('.close__btn')

    yesBtn.addEventListener('click', () => {
        executeWithAnimation(confirmDialog, () => {
            const deleteItem = project.getItem(index)
            project.deleteItem(index)
            confirmDialog.close('deleted')
            renderLayout()
            undoDelete(project,deleteItem)
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
            undoDelete(project,deleteItem)
        })
    })

    noBtn.addEventListener('click', () => {
        executeWithAnimation(confirmDialog, () => {
            confirmDialog.close('cancelled')
        })
    })
}

