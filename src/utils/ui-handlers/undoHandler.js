import renderLayout from "../render"
import { removeUndoBox } from "./confirmDialogHandler"

export function undoDeleteHandler(project, item, undoBox){
    const undoBtn = undoBox.querySelector('.undo__btn')
    const closeBtn = undoBox.querySelector('.close__btn')

    undoBtn.addEventListener('click', () => {
        project.addItem(item)
        removeUndoBox(undoBox)
        renderLayout()
    })

    closeBtn.addEventListener('click', () => {
        removeUndoBox(undoBox)
    })
}

export function undoCheckboxHandler(project, index){
    const content = document.querySelector('.content')
    const undoBox = document.querySelector('.undo__box')

    project.addItem(index)

    content.removeChild(undoBox)
}