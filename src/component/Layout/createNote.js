export default function createNote(note){
    const detail = note.getValue()

    const noteDiv = document.createElement('div')
    noteDiv.classList.add('note')

    const titleDiv = document.createElement('div')
    titleDiv.classList.add('title')
    titleDiv.innerHTML = `<span>${detail.title}</span>`

    const buttonDiv = document.createElement('div')
    buttonDiv.classList.add('buttons')
    buttonDiv.innerHTML = `<button class="edit__btn"><i class="ri-edit-box-line"></i></button>
    <button class="move__btn"><i class="ri-arrow-right-circle-line"></i></button>
    <button class="delete__btn"><i class="ri-delete-bin-6-line"></i></button>`

    noteDiv.appendChild(titleDiv)
    noteDiv.appendChild(buttonDiv)

    return noteDiv
}