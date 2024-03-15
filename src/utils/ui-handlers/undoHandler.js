import historyObj from "../../component/Default Project/history";
import createUndoBox from "../../component/Layout/createUndoBox";
import projectContainerObj from "../../component/projectContainer";
import executeWithAnimation from "../common/executeWithAnimation";
import { saveToLocalStorage } from "../localStorage";
import renderLayout from "../render";
import {
  isMenuOpen,
  isProjectListOpen,
  openMenu,
  openProjectList,
} from "./menuHandler";

let undoBoxQueue = []; // Queue to store undoBox elements

function addToQueue(item) {
  undoBoxQueue.push(item);
}

function removeUndoBox(undoBox) {
  const index = undoBoxQueue.indexOf(undoBox);
  if (index !== -1) {
    undoBoxQueue.splice(index, 1);
    undoBox.parentElement.removeChild(undoBox);
  }
}

function checkUndoBoxQueue() {
  setTimeout(() => {
    const undoBox = undoBoxQueue.shift(); // Get the first undoBox from the queue
    if (undoBox) {
      executeWithAnimation(undoBox, () => {
        undoBox.parentElement.removeChild(undoBox); // Remove the undoBox from the DOM
        checkUndoBoxQueue(); // Check the queue for more undoBox elements
      });
    }
  }, 3000);
}

function undoDeleteHandler(project, item, undoBox) {
  const undoBtn = undoBox.querySelector(".undo__btn");
  const closeBtn = undoBox.querySelector(".close__btn");

  undoBtn.addEventListener("click", () => {
    const menuOpen = isMenuOpen();
    const projectListOpen = isProjectListOpen();
    executeWithAnimation(undoBox, () => {
      project.addItem(item);
      saveToLocalStorage("projectContainer", projectContainerObj);
      removeUndoBox(undoBox);
      renderLayout();
      if (menuOpen) openMenu(false);
      if (projectListOpen) openProjectList();
    });
  });

  closeBtn.addEventListener("click", () => {
    executeWithAnimation(undoBox, () => {
      removeUndoBox(undoBox);
    });
  });
}

function undoCheckboxHandler(project, item, undoBox) {
  const undoBtn = undoBox.querySelector(".undo__btn");
  const closeBtn = undoBox.querySelector(".close__btn");

  undoBtn.addEventListener("click", () => {
    const menuOpen = isMenuOpen();
    const projectListOpen = isProjectListOpen();
    executeWithAnimation(undoBox, () => {
      item.changeStatus();
      project.addItem(item);
      const index = historyObj
        .getAllItem()
        .findIndex((obj) => obj.getValue().title === item.getValue().title);
      historyObj.deleteItem(index);
      saveToLocalStorage("projectContainer", projectContainerObj);
      saveToLocalStorage("history", historyObj);
      removeUndoBox(undoBox);
      renderLayout();
      if (menuOpen) openMenu(false);
      if (projectListOpen) openProjectList();
    });
  });

  closeBtn.addEventListener("click", () => {
    executeWithAnimation(undoBox, () => {
      removeUndoBox(undoBox);
    });
  });
}

export function undoCheckbox(project, item) {
  setTimeout(() => {
    const content = document.querySelector(".content");
    const undoBox = createUndoBox("1 item marked finished");
    content.appendChild(undoBox);
    undoCheckboxHandler(project, item, undoBox);
    addToQueue(undoBox);
    checkUndoBoxQueue();
  }, 500);
}

export function undoDelete(project, item) {
  setTimeout(() => {
    const content = document.querySelector(".content");
    const undoBox = createUndoBox("1 item deleted");
    content.appendChild(undoBox);
    undoDeleteHandler(project, item, undoBox);
    addToQueue(undoBox);
    checkUndoBoxQueue();
  }, 500);
}
