import createUndoBox from "../../component/Layout/createUndoBox"
import renderLayout from "../render"
import { undoDeleteHandler } from "./undoHandler"

let undoBoxQueue = [] // Queue to store undoBox elements

export function deleteConfirmHandler(project, index){
    const confirmDialog = document.getElementById('confirm__dialog')
    const yesBtn = confirmDialog.querySelector('.add__btn')
    const noBtn = confirmDialog.querySelector('.close__btn')

    yesBtn.addEventListener('click', () => {
        const deleteItem = project.getItem(index)
        project.deleteItem(index)
        confirmDialog.close('deleted')
        renderLayout()
        setTimeout(() => {
            const content = document.querySelector('.content')
            const undoBox = createUndoBox('1 item deleted')
            content.appendChild(undoBox)
            undoDeleteHandler(project, deleteItem, undoBox) // Pass undoBox to undoDeleteHandler
            undoBoxQueue.push(undoBox) // Add undoBox to the queue
            checkUndoBoxQueue() // Check the queue for handling undoBox elements
        }, 500)
    })

    noBtn.addEventListener('click', () => {
        confirmDialog.close('cancelled')
    })
}

export function removeUndoBox(undoBox) {
    const index = undoBoxQueue.indexOf(undoBox)
    if (index !== -1) {
        undoBoxQueue.splice(index, 1)
        undoBox.parentElement.removeChild(undoBox) // Remove the parent element containing undoBox
    }
}

function checkUndoBoxQueue() {
    setTimeout(() => {
        const undoBox = undoBoxQueue.shift() // Get the first undoBox from the queue
        if (undoBox) {
            undoBox.parentElement.removeChild(undoBox) // Remove the undoBox from the DOM
            checkUndoBoxQueue() // Check the queue for more undoBox elements
        }
    }, 5000)
}