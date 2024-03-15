import createTodo from "./createTodo";
import createNote from "./createNote";
import appendChildren from "../../utils/common/appendChildren";
import createDivWithClass from "../../utils/common/createDivWithClass";
import createFinishedTodo from "./createFinishedTodo";

export default function createContent(prj) {
  const title = prj.getValue().title;

  const contentDiv = createDivWithClass("content");

  const titleDiv = createDivWithClass("content__title");
  const titleH1 = document.createElement("h1");
  titleH1.innerHTML = title;

  const titleIcon = document.createElement("i");
  titleIcon.classList.add("ri-information-2-fill");

  const itemDiv = createDivWithClass("content__items");

  const items = prj.getAllItem();
  items.forEach((item) => {
    const itemType = item.getType();
    if (prj.getValue().title === "History") {
      console.log("added finished item");
      itemDiv.appendChild(createFinishedTodo(item));
    } else if (itemType === "note") {
      itemDiv.appendChild(createNote(item));
    } else if (itemType === "todo") {
      itemDiv.appendChild(createTodo(item));
    }
  });

  appendChildren(titleDiv, [titleH1, titleIcon]);
  appendChildren(contentDiv, [titleDiv, itemDiv]);

  return contentDiv;
}
