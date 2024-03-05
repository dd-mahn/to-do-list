import executeWithAnimation from '../common/executeWithAnimation'
import renderLayout from '../render'
import { changeDetail, isDetailOpen, openDetail } from './detailHandler'
import { isMenuOpen, isProjectListOpen, openMenu, openProjectList } from './menuHandler'

function populateTodoForm(todoForm, item) {
    const { title, description, startDate, dueDate} = item.getValue()
    todoForm.querySelector('.todo__title-input').value = title
    todoForm.querySelector('.todo__des-input').value = description
    todoForm.querySelector('.todo__start-input').value = new Date(startDate).toISOString().split('T')[0]
    todoForm.querySelector('.todo__due-input').value = new Date(dueDate).toISOString().split('T')[0]
}

function populateNoteForm(noteForm, item) {
    const { title, description } = item.getValue()
    noteForm.querySelector('.note__title-input').value = title
    noteForm.querySelector('.note__des-input').value = description
}

function populateProjectForm(projectForm, item) {
    const { title, description } = item.getValue()
    projectForm.querySelector('.project__title-input').value = title
    projectForm.querySelector('.project__des-input').value = description
}


function attachFormListeners(editDialog, item, saveHandler) {
    const saveBtn = editDialog.querySelector('.add__btn')
    const cancelBtn = editDialog.querySelector('.close__btn')

    saveBtn.addEventListener('click', () => {
        executeWithAnimation(editDialog, () => {
            const menuOpen = isMenuOpen()
            const projectListOpen = isProjectListOpen()
            // const detailOpen = isDetailOpen()
            saveHandler(item)
            editDialog.close('saved')
            renderLayout()
            if (menuOpen) openMenu(false)
            // if (detailOpen){
                changeDetail(item)
                openDetail()
            // } 
            if (projectListOpen) openProjectList()
        })
    })

    cancelBtn.addEventListener('click', () => {
        executeWithAnimation(editDialog, () => {
            editDialog.close('cancelled')
        })
    })
}

export function editTodoDialogHandler(item) {
    const editDialog = document.getElementById('item__edit-dialog')
    const todoForm = editDialog.querySelector('#todo__edit-form')
    populateTodoForm(todoForm, item)
    attachFormListeners(editDialog, item, (item) => {
        const { title, description, startDate, dueDate} = todoForm.elements
        item.changeValue(title.value, description.value, startDate.value, dueDate.value, item.getValue().priority)
    })
}

export function editNoteDialogHandler(item) {
    const editDialog = document.getElementById('item__edit-dialog')
    const noteForm = editDialog.querySelector('#note__edit-form')
    populateNoteForm(noteForm, item)
    attachFormListeners(editDialog, item, (item) => {
        const { title, description } = noteForm.elements
        item.changeValue(title.value, description.value)
    })
}

export function editProjectDialogHandler(item) {
    const editDialog = document.getElementById('item__edit-dialog')
    const projectForm = editDialog.querySelector('#project__edit-form')
    populateProjectForm(projectForm, item)
    attachFormListeners(editDialog, item, (item) => {
        const { title, description } = projectForm.elements
        item.changeValue(title.value, description.value)
    })
}
