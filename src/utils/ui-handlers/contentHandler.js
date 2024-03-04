import historyObj from '../../component/Default Project/history'
import createUndoBox from '../../component/Layout/createUndoBox'
import closeThis from '../common/closeThis'
import openThis from '../common/openThis'
import setPriorityClass from '../common/setPriorityClass'
import renderLayout from '../render'
import { getCurrentState } from '../state'
import { addToQueue, checkUndoBoxQueue, deleteConfirmHandler } from './confirmDialogHandler'
import { openDetail, detailHandler, changeDetail } from './detailHandler'
import { editNoteDialogHandler, editTodoDialogHandler } from './editDialogHandler'
import moveDialogHandler from './moveDialogHandler'
import { undoCheckboxHandler } from './undoHandler'

export default function contentHandler() {
    const titleDiv = document.querySelector('.content__title')
    const detailBtn = titleDiv.querySelector('i')
    const contentItems = document.querySelectorAll('.content__item')
    const currentProject = getCurrentState()

    function handleDetailClick(index) {
        changeDetail(currentProject.getItem(index))
        openDetail()
        detailHandler()
    }

    function handleEditButtonClick(item, index) {
        const editDialog = document.getElementById('item__edit-dialog')
        const todoForm = editDialog.querySelector('#todo__edit-form')
        const noteForm = editDialog.querySelector('#note__edit-form')

        editDialog.showModal()
        if (item.classList.contains('note')) {
            openThis(noteForm)
            closeThis(todoForm)
            editNoteDialogHandler(currentProject.getItem(index))
        } else {
            openThis(todoForm)
            closeThis(noteForm)
            editTodoDialogHandler(currentProject.getItem(index))
        }
    }

    function handleMoveButtonClick(index) {
        const moveDialog = document.getElementById('item__move-dialog')
        moveDialog.showModal()
        moveDialogHandler(currentProject, index)
    }

    function handleDeleteButtonClick(index) {
        const confirmDialog = document.getElementById('confirm__dialog')
        confirmDialog.showModal()
        deleteConfirmHandler(currentProject, index)
    }

    function handlePriorityButtonClick(index, priorityBtn) {
        const currentItem = currentProject.getItem(index)
        const priority = currentItem.getValue().priority
        if (priority === 'low') {
            currentItem.changePriority('medium')
        } else if (priority === 'medium') {
            currentItem.changePriority('high')
        } else {
            currentItem.changePriority('low')
        }
        setPriorityClass(priorityBtn, currentItem.getValue().priority)
    }

    function handleCheckboxChange(index) {
        setTimeout(() => {
            const finishedItem = currentProject.getItem(index)
            finishedItem.changeStatus()
            historyObj.addItem(finishedItem)
            currentProject.deleteItem(index)
            renderLayout()
            console.log('rerendered')

            setTimeout(() => {
                const content = document.querySelector('.content')
                const undoBox = createUndoBox('1 item marked finished')
                content.appendChild(undoBox)
                undoCheckboxHandler(currentProject, finishedItem, undoBox) // Pass undoBox to undoDeleteHandler
                addToQueue(undoBox) // Add undoBox to the queue
                checkUndoBoxQueue() // Check the queue for handling undoBox elements
            }, 500)
        }, 500)
    }

    detailBtn.addEventListener('click', () => {
        changeDetail(currentProject)
        openDetail()
        detailHandler()
    })

    contentItems.forEach((item, index) => {
        if (!item.classList.contains('finished') && currentProject.getValue().title !== 'Search Result') {
            const title = item.querySelector('.title')
            title.addEventListener('click', () => handleDetailClick(index))

            const editBtn = item.querySelector('.edit__btn')
            editBtn.addEventListener('click', () => handleEditButtonClick(item, index))

            const moveBtn = item.querySelector('.move__btn')
            moveBtn.addEventListener('click', () => handleMoveButtonClick(index))

            const deleteBtn = item.querySelector('.delete__btn')
            deleteBtn.addEventListener('click', () => handleDeleteButtonClick(index))

            if (item.classList.contains('to-do')) {
                const priorityBtn = item.querySelector('.priority__btn')
                priorityBtn.addEventListener('click', () => handlePriorityButtonClick(index, priorityBtn))

                const checkbox = item.querySelector('.checkbox__input')
                checkbox.addEventListener('change', () => {
                    handleCheckboxChange(index)
                })
            }
        } else if(currentProject.getValue().title === 'Search Result'){
            const title = item.querySelector('.title')
            title.addEventListener('click', () => handleDetailClick(index))
        }else {
            const title = item.querySelector('.title')
            title.addEventListener('click', () => handleDetailClick(index))

            const deleteBtn = item.querySelector('.delete__btn')
            deleteBtn.addEventListener('click', () => handleDeleteButtonClick(index))
        }
    })
}
