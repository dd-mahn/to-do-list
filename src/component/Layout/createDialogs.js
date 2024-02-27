import appendChildren from "../../utils/common/appendChildren"
import createButtonWithClass from "../../utils/common/createButtonWithClass"
import createDivWithClass from "../../utils/common/createDivWithClass"

function createProjectDialog(){
    const dialog = document.createElement('dialog')
    dialog.id = 'project__add-dialog'

    const form = document.createElement('form')
    form.id = 'project__add-form'

    form.innerHTML = `
        <div>
            <label for="name">Project Name:</label>
            <input required type="text" id="name" name="name" >
        </div>
        <div>
            <label for="description">Description:</label>
            <input required type="text" id="description" name="description" >
        </div>
    `;

    const buttonDiv = createDivWithClass('center')
    const addButton = createButtonWithClass('btn', 'add__btn')
    addButton.setAttribute('formmethod', 'dialog')
    addButton.textContent = 'Create'
    const cancelButton = createButtonWithClass('btn','close__btn')
    cancelButton.setAttribute('formmethod', 'dialog')
    cancelButton.value = 'canceled'
    cancelButton.textContent = 'Cancel'

    appendChildren(buttonDiv, [addButton, cancelButton])

    appendChildren(form, [buttonDiv])
    dialog.appendChild(form)
}

function createItemDialog(){
    const dialog = document.createElement('dialog')
    dialog.id = 'item__add-dialog'

    const selectItemForm = document.createElement('form')
    selectItemForm.setAttribute('action', 'select__item-form')

    selectItemForm.innerHTML = `
        <label for="item">Choose which item to create:</label>
        <select name="item" id="item">
            <option value="to-do">Todo</option>
            <option value="note">Note</option>
        </select>`

    const todoAddForm = document.createElement('form')
    todoAddForm.id = 'todo__add-form'

    todoAddForm.innerHTML = `
        <div>
            <label for="title">Title:</label>
            <input required type="text" id="title" name="title" >
        </div>
        <div>
            <label for="description">Description:</label>
            <input required type="text" id="description" name="description" >
        </div>
        <div>
            <label for="startDate">Start date:</label>
            <input required type="time" name="startDate" id="startDate" >
        </div>
        <div>
            <label for="dueDate">Due date:</label>
            <input required type="time" name="dueDate" id="dueDate" >
        </div>
        <div>
            <label for="priority">Priority:</label>
            <select name="priority" id="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
        <div>
            <label for="project">Project:</label>
            <select name="project" id="project">
                <option>Project 1</option>
                <option>Project 2</option>
                <option>Project 3</option>
            </select>
        </div>
    `;

    const todoButtonDiv = createDivWithClass('center')
    const todoAddButton = createButtonWithClass('btn', 'add__btn')
    todoAddButton.setAttribute('formmethod', 'dialog')
    todoAddButton.textContent = 'Create'
    const todoCancelButton = createButtonWithClass('btn', 'close__btn')
    todoCancelButton.setAttribute('formmethod', 'dialog')
    todoCancelButton.value = 'canceled'
    todoCancelButton.textContent = 'Cancel'
    appendChildren(todoButtonDiv, [todoAddButton, todoCancelButton])

    appendChildren(todoAddForm, [todoButtonDiv])

    const noteAddForm = document.createElement('form')
    noteAddForm.id = 'note__add-form'
    noteAddForm.classList.add('d-off')

    noteAddForm.innerHTML = `
        <div>
            <label for="title">Title:</label>
            <input required type="text" id="title" name="title" >
        </div>
        <div>
            <label for="description">Description:</label>
            <input required type="text" id="description" name="description" >
        </div>
        <div>
            <label for="project">Project:</label>
            <select name="project" id="project">
                <option>Project 1</option>
                <option>Project 2</option>
                <option>Project 3</option>
            </select>
        </div>
    `;

    const noteButtonDiv = createDivWithClass('center')
    const noteAddButton = createButtonWithClass('btn', 'add__btn')
    noteAddButton.setAttribute('formmethod', 'dialog')
    noteAddButton.textContent = 'Create'
    const noteCancelButton = createButtonWithClass('btn', 'close__btn')
    noteCancelButton.setAttribute('formmethod', 'dialog')
    noteCancelButton.value = 'canceled'
    noteCancelButton.textContent = 'Cancel'
    appendChildren(noteButtonDiv, [noteAddButton, noteCancelButton])
    appendChildren(noteAddForm, [noteButtonDiv])

    appendChildren(dialog, [selectItemForm, todoAddForm, noteAddForm])
}

function createConfirmDialog(){

}

export default function createDialogs(){
    createProjectDialog()
    createItemDialog()
    createConfirmDialog()
}


