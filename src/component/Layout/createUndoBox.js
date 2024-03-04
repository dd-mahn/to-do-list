import createDivWithClass from "../../utils/common/createDivWithClass";

export default function createUndoBox(message){
    const undoBox = createDivWithClass('undo__box')
    undoBox.innerHTML = `
        <span>${message}</span>
        <div class="buttons">
            <button class="btn undo__btn">Undo</button>
            <button class="btn close__btn">Close</button>
        </div>
        `

    return undoBox
}