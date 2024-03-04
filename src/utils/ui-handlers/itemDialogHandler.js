import openThis from '../common/openThis'
import closeThis from '../common/closeThis'
import todo from '../../component/todo'
import note from '../../component/note'
import projectContainerObj from '../../component/projectContainer'
import renderLayout from '../render'
import itemContainerObj from '../../component/itemContainer'
import { isMenuOpen, openMenu } from './menuHandler'
import { isDetailOpen, openDetail } from './detailHandler'

export default function itemDialogHandler() {
    const itemDialog = document.getElementById('item__add-dialog')
    const selectInput = itemDialog.querySelector('.select__item-input')
    const todoForm = document.getElementById('todo__add-form')
    const noteForm = document.getElementById('note__add-form')
    const closeBtn = itemDialog.querySelector('.close__btn')
    const addBtn = itemDialog.querySelector('.add__btn')

    function switchForm() {
        const formToShow = selectInput.value === 'to-do' ? todoForm : noteForm
        const formToHide = selectInput.value === 'to-do' ? noteForm : todoForm
        openThis(formToShow)
        closeThis(formToHide)
    }

    selectInput.addEventListener('change', switchForm)

    closeBtn.addEventListener('click', () => {
        const form = selectInput.value === 'to-do' ? todoForm : noteForm
        form.removeAttribute('novalidate')
        itemDialog.close('canceled')
        form.setAttribute('novalidate', 'true')
    })

    addBtn.addEventListener('click', () => {
        const menuOpen = isMenuOpen()
        const detailOpen = isDetailOpen()
        if (selectInput.value === 'to-do') addTodo()
        else if (selectInput.value === 'note') addNote()
        renderLayout()
        if (menuOpen) openMenu()
        if (detailOpen) openDetail()
    })

    function addTodo() {
        const newTodo = todo()
        populateTodo(newTodo, todoForm)
        getSelectedProject().addItem(newTodo)
        itemContainerObj.addItem(newTodo)
    }

    function addNote() {
        const newNote = note()
        populateNote(newNote, noteForm)
        getSelectedProject().addItem(newNote)
    }

    function populateTodo(item, form) {
        const titleInput = form.querySelector('.todo__title-input')
        const desInput = form.querySelector('.todo__des-input')
        const startInput = form.querySelector('.todo__start-input')
        const dueInput = form.querySelector('.todo__due-input')
        const priorityInput = form.querySelector('.todo__priority-input')
        item.changeValue(titleInput.value, desInput.value, startInput.value, dueInput.value, priorityInput.value)
    }

    function populateNote(item, form) {
        const titleInput = form.querySelector('.note__title-input')
        const desInput = form.querySelector('.note__des-input')
        item.changeValue(titleInput.value, desInput.value)
    }

    function getSelectedProject() {
        const projectList = document.querySelector('.item__project-input')
        const selectedValue = projectList.value
        return projectContainerObj.getAllProject().find(prj => prj.getValue().title === selectedValue)
    }
}
