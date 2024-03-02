import openThis from '../common/openThis'
import closeThis from '../common/closeThis'
import todo from '../../component/todo'
import note from '../../component/note'
import projectContainerObj from '../../component/projectContainer'
import renderLayout from '../render'
import itemContainerObj from '../../component/itemContainer'
import { isMenuOpen } from './menuHandler'
import { openMenu } from './navHandler'
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
        if(selectInput.value === 'to-do'){
            todoForm.removeAttribute('novalidate')
            itemDialog.close("canceled")
            todoForm.setAttribute('novalidate','true')
        }else{
            noteForm.removeAttribute('novalidate')
            itemDialog.close("canceled")
            noteForm.setAttribute('novalidate','true')
        }
    })

    addBtn.addEventListener('click', () => {
        const menuOpen = isMenuOpen()
        const detailOpen = isDetailOpen()
        if (selectInput.value === 'to-do') {
            addTodo()
        } else if (selectInput.value === 'note') {
            addNote()
        }
        renderLayout()
        menuOpen === true ? openMenu() : false
        detailOpen === true ? openDetail() : false
    })

    function addTodo() {
        const titleInput = todoForm.querySelector('.todo__title-input')
        const desInput = todoForm.querySelector('.todo__des-input')
        const startInput = todoForm.querySelector('.todo__start-input')
        const dueInput = todoForm.querySelector('.todo__due-input')
        const priorityInput = todoForm.querySelector('.todo__priority-input')

        const newTodo = todo()
        newTodo.changeValue(titleInput.value, desInput.value, startInput.value, dueInput.value, priorityInput.value)
        getSelectedProject().addItem(newTodo)
        itemContainerObj.addItem(newTodo)
    }

    function addNote() {
        const titleInput = noteForm.querySelector('.note__title-input')
        const desInput = noteForm.querySelector('.note__des-input')

        const newNote = note()
        newNote.changeValue(titleInput.value, desInput.value)
        getSelectedProject().addItem(newNote)
    }

    function getSelectedProject() {
        const projectList = document.querySelector('.item__project-input')
        const selectedValue = projectList.value
        return projectContainerObj.getAllProject().find(prj => prj.getValue().title === selectedValue)
    }
}
