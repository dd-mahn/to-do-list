import createTodo from "./createTodo"
import createNote from "./createNote"
import todo from "../todo"
import note from "../note"
import appendChildren from "../../utils/appendChildren"
import createDivWithClass from "../../utils/createDivWithClass"

export default function createContent(prj) {
    const title = prj.getValue().title

    const contentDiv = createDivWithClass('content')

    const titleDiv = createDivWithClass('content__title')
    const titleH1 = document.createElement('h1')
    titleH1.innerHTML = title

    const titleIcon = document.createElement('i')
    titleIcon.classList.add('ri-information-2-fill')

    const itemDiv = createDivWithClass('content__items')

    const items = prj.getAllItem()
    items.forEach(item => {
        const itemType = item.getType()
        if (itemType === 'note') {
            itemDiv.appendChild(createNote(item))
        } else if (itemType === 'todo') {
            itemDiv.appendChild(createTodo(item))
        }
    })

    appendChildren(titleDiv, [titleH1, titleIcon])
    appendChildren(contentDiv, [titleDiv, itemDiv])

    return contentDiv
}


