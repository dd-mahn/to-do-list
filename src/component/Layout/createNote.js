import appendChildren from "../../utils/common/appendChildren.js";
import createDivWithClass from "../../utils/common/createDivWithClass.js";

export default function createNote(note) {
  const detail = note.getValue();

  const noteDiv = createDivWithClass("note", "content__item");

  const titleDiv = createDivWithClass("title");
  titleDiv.innerHTML = `<span>${detail.title}</span>`;

  const buttonDiv = createDivWithClass("buttons");
  buttonDiv.innerHTML = `
        <button class="edit__btn"><i class="ri-edit-box-line"></i></button>
        <button class="move__btn"><i class="ri-arrow-right-circle-line"></i></button>
        <button class="delete__btn"><i class="ri-delete-bin-6-line"></i></button>
    `;

  appendChildren(noteDiv, [titleDiv, buttonDiv]);

  return noteDiv;
}
