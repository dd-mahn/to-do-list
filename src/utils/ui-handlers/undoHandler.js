import historyObj from "../../component/Default Project/history"
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

export function undoCheckboxHandler(project, item, undoBox){
    const undoBtn = undoBox.querySelector('.undo__btn')
    const closeBtn = undoBox.querySelector('.close__btn')

    undoBtn.addEventListener('click', () => {
        item.changeStatus()
        project.addItem(item)
        const index = historyObj.getAllItem().findIndex(obj => obj.getValue().title === item.getValue().title)
        historyObj.deleteItem(index)
        removeUndoBox(undoBox)
        renderLayout()
    })

    closeBtn.addEventListener('click', () => {
        removeUndoBox(undoBox)
    })
}