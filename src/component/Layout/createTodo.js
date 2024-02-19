import appendChildren from "../../utils/appendChildren"
import createButtonWithClass from "../../utils/createButtonWithClass"
import createDivWithClass from "../../utils/createDivWithClass"
import setPriorityClass from "../../utils/setPriorityClass"

export default function createTodo(todo) {
    const detail = todo.getValue()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('to-do')

    const checkboxDiv = createDivWithClass('checkbox')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkboxDiv.appendChild(checkbox)

    const titleDiv = createDivWithClass('title')
    titleDiv.innerHTML = `<span>${detail.title}</span>`

    const buttonDiv = createDivWithClass('buttons')
    const editBtn = createButtonWithClass('edit__btn', 'ri-edit-box-line')
    const priorityBtn = createButtonWithClass('priority__btn', 'ri-flag-2-line')
    const moveBtn = createButtonWithClass('move__btn', 'ri-arrow-right-circle-line')
    const deleteBtn = createButtonWithClass('delete__btn', 'ri-delete-bin-6-line')

    setPriorityClass(priorityBtn, detail.priority)

    appendChildren(buttonDiv, [editBtn, priorityBtn, moveBtn, deleteBtn])
    appendChildren(todoDiv, [checkboxDiv, titleDiv, buttonDiv])

    return todoDiv
}



