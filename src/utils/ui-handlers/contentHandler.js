import historyObj from '../../component/Default Project/history'
import closeThis from '../common/closeThis'
import executeWithAnimation from '../common/executeWithAnimation'
import openThis from '../common/openThis'
import setPriorityClass from '../common/setPriorityClass'
import renderLayout from '../render'
import { getCurrentState } from '../state'
import { deleteConfirmHandler } from './confirmDialogHandler'
import { openDetail, changeDetail } from './detailHandler'
import { editNoteDialogHandler, editTodoDialogHandler } from './editDialogHandler'
import { isMenuOpen, openMenu } from './menuHandler'
import moveDialogHandler from './moveDialogHandler'
import { undoCheckbox } from './undoHandler'

export default function contentHandler() {
    const titleDiv = document.querySelector('.content__title')
    const detailBtn = titleDiv.querySelector('i')
    const contentItems = document.querySelectorAll('.content__item')
    const currentProject = getCurrentState()

    function handleDetailClick(index) {
        const item = currentProject.getItem(index)
        changeDetail(item)
        openDetail()
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

    function handleMoveButtonClick(item, index) {
        const moveDialog = document.getElementById('item__move-dialog')
        moveDialog.showModal()
        moveDialogHandler(currentProject, item, index)
    }

    function handleDeleteButtonClick(item, index) {
        const confirmDialog = document.getElementById('confirm__dialog')
        confirmDialog.showModal()
        deleteConfirmHandler(currentProject, item, index)
    }

    function handlePriorityButtonClick(index, priorityBtn) {
        const currentItem = currentProject.getItem(index)
        const priority = currentItem.getValue().priority
        const newPriority = priority === 'low' ? 'medium' : (priority === 'medium' ? 'high' : 'low')
        currentItem.changePriority(newPriority)
        setPriorityClass(priorityBtn, newPriority)
    }

    function handleCheckboxChange(item, index) {
        const menuOpen = isMenuOpen()
        setTimeout(() => {
            const finishedItem = currentProject.getItem(index)
            finishedItem.changeStatus()
            historyObj.addItem(finishedItem)
            currentProject.deleteItem(index)
            executeWithAnimation(item, () => {
                closeThis(item)
                renderLayout()
                if (menuOpen) openMenu(false)
                undoCheckbox(currentProject, finishedItem)
            })
        }, 500)
    }

    detailBtn.addEventListener('click', () => {
        changeDetail(currentProject)
        openDetail()
    })

    contentItems.forEach((item, index) => {
        const isSearchResult = currentProject.getValue().title === 'Search Result'
        if (!item.classList.contains('finished') && !isSearchResult) {
            const title = item.querySelector('.title')
            title.addEventListener('click', () => handleDetailClick(index))

            const editBtn = item.querySelector('.edit__btn')
            editBtn.addEventListener('click', () => handleEditButtonClick(item, index))

            const moveBtn = item.querySelector('.move__btn')
            moveBtn.addEventListener('click', () => handleMoveButtonClick(item, index))

            const deleteBtn = item.querySelector('.delete__btn')
            deleteBtn.addEventListener('click', () => handleDeleteButtonClick(item, index))

            if (item.classList.contains('to-do')) {
                const priorityBtn = item.querySelector('.priority__btn')
                priorityBtn.addEventListener('click', () => handlePriorityButtonClick(index, priorityBtn))

                const checkbox = item.querySelector('.checkbox__input')
                checkbox.addEventListener('change', () => handleCheckboxChange(item, index))
            }
        } else {
            const title = item.querySelector('.title')
            title.addEventListener('click', () => handleDetailClick(index))

            if (!isSearchResult) {
                const deleteBtn = item.querySelector('.delete__btn')
                deleteBtn.addEventListener('click', () => handleDeleteButtonClick(item, index))
            }
        }
    })
}
