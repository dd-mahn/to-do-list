import historyObj from "../../component/Default Project/history";
import projectContainerObj from "../../component/projectContainer";
import closeThis from "../common/closeThis";
import executeWithAnimation from "../common/executeWithAnimation";
import openThis from "../common/openThis";
import setPriorityClass from "../common/setPriorityClass";
import { loadFromLocalStorage, saveToLocalStorage } from "../localStorage";
import renderLayout from "../render";
import { getCurrentState, setCurrentState } from "../state";
import { deleteConfirmHandler } from "./confirmDialogHandler";
import { openDetail, changeDetail } from "./detailHandler";
import {
  editNoteDialogHandler,
  editTodoDialogHandler,
} from "./editDialogHandler";
import {
  isMenuOpen,
  isProjectListOpen,
  openMenu,
  openProjectList,
} from "./menuHandler";
import moveDialogHandler from "./moveDialogHandler";
import { undoCheckbox } from "./undoHandler";

export default function contentHandler() {
  const titleDiv = document.querySelector(".content__title");
  const detailBtn = titleDiv.querySelector("i");
  const contentItems = document.querySelectorAll(".content__item");
  const currentProject = getCurrentState();

  function handleDetailClick(index) {
    const item = currentProject.getItem(index);
    changeDetail(item);
    openDetail();
  }

  function handleEditButtonClick(item, index) {
    const editDialog = document.getElementById("item__edit-dialog");
    const todoForm = editDialog.querySelector("#todo__edit-form");
    const noteForm = editDialog.querySelector("#note__edit-form");

    editDialog.showModal();
    if (item.classList.contains("note")) {
      handleNoteEdit(noteForm, todoForm, index);
    } else {
      handleTodoEdit(todoForm, noteForm, index);
    }
  }

  function handleNoteEdit(noteForm, todoForm, index) {
    openThis(noteForm);
    closeThis(todoForm);
    editNoteDialogHandler(currentProject.getItem(index));
  }

  function handleTodoEdit(todoForm, noteForm, index) {
    openThis(todoForm);
    closeThis(noteForm);
    editTodoDialogHandler(currentProject.getItem(index));
  }

  function handleMoveButtonClick(item, index) {
    const moveDialog = document.getElementById("item__move-dialog");
    moveDialog.showModal();
    moveDialogHandler(currentProject, item, index);
  }

  function handleDeleteButtonClick(item, index) {
    const confirmDialog = document.getElementById("confirm__dialog");
    confirmDialog.showModal();
    deleteConfirmHandler(currentProject, item, index);
  }

  function handlePriorityButtonClick(index, priorityBtn) {
    const currentItem = currentProject.getItem(index);
    const priority = currentItem.getValue().priority;
    const newPriority =
      priority === "low" ? "medium" : priority === "medium" ? "high" : "low";
    currentItem.changePriority(newPriority);
    saveToLocalStorage("projectContainer", projectContainerObj);
    setPriorityClass(priorityBtn, newPriority);
  }

  function handleCheckboxChange(item, index) {
    const menuOpen = isMenuOpen();
    const projectListOpen = isProjectListOpen();
    setTimeout(() => {
      const finishedItem = currentProject.getItem(index);
      finishedItem.changeStatus();

      const history = localStorage.getItem("history")
        ? loadFromLocalStorage("history")
        : historyObj;
      history.addItem(finishedItem);
      saveToLocalStorage("history", history);

      currentProject.deleteItem(index);
      saveToLocalStorage("projectContainer", projectContainerObj);

      executeWithAnimation(item, () => {
        closeThis(item);
        setCurrentState(getCurrentState());
        renderLayout();
        if (menuOpen) openMenu(false);
        if (projectListOpen) openProjectList();
        undoCheckbox(currentProject, finishedItem);
      });
    }, 500);
  }

  detailBtn.addEventListener("click", () => {
    changeDetail(currentProject);
    openDetail();
  });

  contentItems.forEach((item, index) => {
    const isSearchResult = currentProject.getValue().title === "Search Result";
    const title = item.querySelector(".title");
    title.addEventListener("click", () => handleDetailClick(index));

    if (!isSearchResult) {
      const deleteBtn = item.querySelector(".delete__btn");
      deleteBtn.addEventListener("click", () =>
        handleDeleteButtonClick(item, index)
      );
    }

    if (!item.classList.contains("finished") && !isSearchResult) {
      const editBtn = item.querySelector(".edit__btn");
      editBtn.addEventListener("click", () =>
        handleEditButtonClick(item, index)
      );

      const moveBtn = item.querySelector(".move__btn");
      moveBtn.addEventListener("click", () =>
        handleMoveButtonClick(item, index)
      );

      if (item.classList.contains("to-do")) {
        const priorityBtn = item.querySelector(".priority__btn");
        priorityBtn.addEventListener("click", () =>
          handlePriorityButtonClick(index, priorityBtn)
        );

        const checkbox = item.querySelector(".checkbox__input");
        checkbox.addEventListener("change", () =>
          handleCheckboxChange(item, index)
        );
      }
    }
  });
}
