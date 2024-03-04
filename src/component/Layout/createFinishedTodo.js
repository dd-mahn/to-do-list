import appendChildren from "../../utils/common/appendChildren"
import createButtonWithClass from "../../utils/common/createButtonWithClass"
import createDivWithClass from "../../utils/common/createDivWithClass"

export default function createFinishedTodo(todo) {
    const detail = todo.getValue()

    const todoDiv = createDivWithClass('finished','content__item', 'to-do')

    const titleDiv = createDivWithClass('title')
    titleDiv.innerHTML = `<span>${detail.title}</span>`

    const buttonDiv = createDivWithClass('buttons')
    const deleteBtn = createButtonWithClass('delete__btn', 'ri-delete-bin-6-line')

    appendChildren(buttonDiv, [deleteBtn])
    appendChildren(todoDiv, [titleDiv, buttonDiv])

    return todoDiv
}