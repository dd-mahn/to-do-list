export default function createTodo(todo){
    const detail = todo.getValue()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('to-do')

    const checkboxDiv = document.createElement('div')
    checkboxDiv.classList.add('checkbox')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const titleDiv = document.createElement('div')
    titleDiv.classList.add('title')
    titleDiv.innerHtml = `<span>${detail.title}</span>`

    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('buttons')
    const editBtn = document.createElement('button')
    editBtn.innerHTML = `<i class="ri-edit-box-line"></i>`
    const priorityBtn = document.createElement('button')
    priorityBtn.classList.add('priority__btn')
    priorityBtn.innerHTML = `<i class="ri-flag-2-line"></i>`
    const moveBtn = document.createElement('button')
    moveBtn.innerHTML = `<i class="ri-arrow-right-circle-line"></i>`
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = `<i class="ri-delete-bin-6-line"></i>`

    switch(detail.priority){
        case 'low':
            priorityBtn.classList.add('priority__low')
            break
        case 'medium':
            priorityBtn.classList.add('priority__medium')
            break
        case 'high':
            priorityBtn.classList.add('priority__high')
            break
    }

    buttonDiv.appendChild(editBtn)
    buttonDiv.appendChild(priorityBtn)
    buttonDiv.appendChild(moveBtn)
    buttonDiv.appendChild(deleteBtn)

    todoDiv.appendChild(checkboxDiv)
    todoDiv.appendChild(titleDiv)
    todoDiv.appendChild(buttonDiv)

    return todoDiv
}