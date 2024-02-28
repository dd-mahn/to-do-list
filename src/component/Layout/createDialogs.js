import appendChildren from "../../utils/common/appendChildren"
import createDivWithClass from "../../utils/common/createDivWithClass"
import projectContainer from '../projectContainer'

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
            <input required type="text" id="description" name="description" class="project__des-input">
        </div>
    `

    appendChildren(form, [createButtonDiv()])
    dialog.appendChild(form)

    return dialog
}

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

    appendChildren(dialog, [selectItemForm, todoAddForm, noteAddForm, createProjectSelect(), createButtonDiv()])

    return dialog
}

export function createConfirmDialog() {
    return document.createElement('dialog')
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
            <textarea col=10 row=5 id="description" name="description" class="todo__des-input"></textarea>
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
    const projectSelectList = document.createElement('select')
    projectSelectList.classList.add('item__project-input')
    projectSelectList.setAttribute('name', 'project')
    projectSelectList.setAttribute('id', 'project')

    appendChildren(projectSelectDiv, [projectSelectLabel, projectSelectList])

    const projects = projectContainer.getAllProject()
    projects.forEach(prj => {
        const option = document.createElement('option')
        option.innerText = `${prj.getValue().title}`
        projectSelectList.appendChild(option)
    })

    return projectSelectDiv
}

function createButtonDiv() {
    const buttonDiv = createDivWithClass('buttons')
    buttonDiv.innerHTML = `
        <button class="btn add__btn" formmethod="dialog">Create</button>
        <button class="btn close__btn" formmethod="dialog">Cancel</button>`

    return buttonDiv
}
