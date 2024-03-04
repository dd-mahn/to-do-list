import appendChildren from "../../utils/common/appendChildren"
import createDivWithClass from "../../utils/common/createDivWithClass"
import projectContainer from '../projectContainer'
import {getCurrentState} from '../../utils/state'

// Project add dialog
export function createProjectDialog() {
    const dialog = document.createElement('dialog')
    dialog.id = 'project__add-dialog'

    const form = document.createElement('form')
    form.id = 'project__add-form'
    form.innerHTML = `
        <div>
            <label for="title">Project Title:</label>
            <input required type="text" id="title" name="title" class="project__title-input">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea required type="text" id="description" name="description" class="project__des-input"></textarea>
        </div>
    `

    appendChildren(form, [createAddButtonDiv()])
    dialog.appendChild(form)

    return dialog
}

// Item add dialog
export function createItemDialog() {
    const dialog = document.createElement('dialog')
    dialog.id = 'item__add-dialog'

    const selectItemForm = document.createElement('form')
    selectItemForm.classList.add('select__item-form')
    selectItemForm.innerHTML = `
        <label for="item">Choose which item to create:</label>
        <select name="item" id="item" class="select__item-input">
            <option value="to-do">Todo</option>
            <option value="note">Note</option>
        </select>`

    const todoAddForm = createTodoAddForm()
    const noteAddForm = createNoteAddForm()

    appendChildren(dialog, [selectItemForm, todoAddForm, noteAddForm, createProjectSelect(), createAddButtonDiv()])

    return dialog
}

function createTodoAddForm() {
    const todoAddForm = document.createElement('form')
    todoAddForm.id = 'todo__add-form'
    todoAddForm.innerHTML = `
        <div>
            <label for="title">Title:</label>
            <input required type="text" id="title" name="title" class="todo__title-input">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea required id="description" name="description" class="todo__des-input"></textarea>
        </div>
        <div>
            <label for="startDate">Start date:</label>
            <input required type="date" name="startDate" id="startDate" class="todo__start-input">
        </div>
        <div>
            <label for="dueDate">Due date:</label>
            <input required type="date" name="dueDate" id="dueDate" class="todo__due-input">
        </div>
        <div>
            <label for="priority">Priority:</label>
            <select name="priority" id="priority" class="todo__priority-input">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>`

    return todoAddForm
}

function createNoteAddForm() {
    const noteAddForm = document.createElement('form')
    noteAddForm.id = 'note__add-form'
    noteAddForm.classList.add('d-off')
    noteAddForm.innerHTML = `
        <div>
            <label for="title">Title:</label>
            <input required type="text" id="title" name="title" class="note__title-input">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" class="note__des-input"></textarea>
        </div>`

    return noteAddForm
}

function createProjectSelect() {
    const projectSelectDiv = document.createElement('div')
    const projectSelectLabel = document.createElement('label')
    projectSelectLabel.setAttribute('for', 'project')
    projectSelectLabel.innerHTML = `Put it in: `
    const projectSelectList = document.createElement('select')
    projectSelectList.classList.add('item__project-input')
    projectSelectList.setAttribute('name', 'project')
    projectSelectList.setAttribute('id', 'project')
    const currentProject = getCurrentState()

    appendChildren(projectSelectDiv, [projectSelectLabel, projectSelectList])

    const projects = projectContainer.getAllItem()
    projects.forEach(prj => {
        const option = document.createElement('option')
        option.innerText = `${prj.getValue().title}`
        projectSelectList.appendChild(option)
    })

    projectSelectList.value = currentProject.getValue().title
    return projectSelectDiv
}

function createAddButtonDiv() {
    const buttonDiv = createDivWithClass('buttons')
    buttonDiv.innerHTML = `
        <button class="btn add__btn" formmethod="dialog">Create</button>
        <button class="btn close__btn" formmethod="dialog">Cancel</button>`

    return buttonDiv
}

// Confirm dialog
export function createConfirmDialog() {
    const dialog = document.createElement('dialog')
    dialog.id = 'confirm__dialog'

    const message = document.createElement('span')
    message.innerHTML = `Are you sure?`

    const buttonDiv = createDivWithClass('buttons')
    buttonDiv.innerHTML = `
        <button class="btn add__btn" formmethod="dialog">Yes</button>
        <button class="btn close__btn" formmethod="dialog">No</button>`

    appendChildren(dialog, [message, buttonDiv])

    return dialog
}

// Item edit dialog
export function createEditDialog(){
    const dialog = document.createElement('dialog')
    dialog.id = 'item__edit-dialog'

    appendChildren(dialog, [createTodoEditForm(), createNoteEditForm(), createProjectEditForm(), createEditButtonDiv()])

    return dialog
}

function createTodoEditForm(){
    const todoEditForm = document.createElement('form')
    todoEditForm.id = 'todo__edit-form'
    todoEditForm.innerHTML = `
        <div>
            <label for="title">Title:</label>
            <input required type="text" id="title" name="title" class="todo__title-input">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea required id="description" name="description" class="todo__des-input"></textarea>
        </div>
        <div>
            <label for="startDate">Start date:</label>
            <input required type="date" name="startDate" id="startDate" class="todo__start-input">
        </div>
        <div>
            <label for="dueDate">Due date:</label>
            <input required type="date" name="dueDate" id="dueDate" class="todo__due-input">
        </div>`

    return todoEditForm
}

function createNoteEditForm(){
    const noteEditForm = document.createElement('form')
    noteEditForm.id = 'note__edit-form'
    noteEditForm.classList.add('d-off')
    noteEditForm.innerHTML = `
        <div>
            <label for="title">Title:</label>
            <input required type="text" id="title" name="title" class="note__title-input">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" class="note__des-input"></textarea>
        </div>`

    return noteEditForm
}

function createProjectEditForm(){
    const projectEditForm = document.createElement('form')
    projectEditForm.id = 'project__edit-form'
    projectEditForm.classList.add('d-off')
    projectEditForm.innerHTML = `
        <div>
            <label for="title">Title:</label>
            <input required type="text" id="title" name="title" class="project__title-input">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" class="project__des-input"></textarea>
        </div>`

    return projectEditForm
}

function createEditButtonDiv() {
    const buttonDiv = createDivWithClass('buttons')
    buttonDiv.innerHTML = `
        <button class="btn add__btn" formmethod="dialog">Save</button>
        <button class="btn close__btn" formmethod="dialog">Cancel</button>`

    return buttonDiv
}

// Move dialog 

export function createMoveDialog(){
    const dialog = document.createElement('dialog')
    dialog.id = 'item__move-dialog'
    appendChildren(dialog, [createProjectSelect(), createEditButtonDiv()])

    return dialog
}