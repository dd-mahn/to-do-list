import openThis from "../common/openThis";
import closeThis from "../common/closeThis";
import todo from "../../component/todo";
import note from "../../component/note";
import projectContainerObj from "../../component/projectContainer";
import renderLayout from "../render";
import {
  isMenuOpen,
  isProjectListOpen,
  openMenu,
  openProjectList,
} from "./menuHandler";
import { isDetailOpen, openDetail } from "./detailHandler";
import executeWithAnimation from "../common/executeWithAnimation";
import { saveToLocalStorage } from "../localStorage";
import { setCurrentState } from "../state";

export default function itemDialogHandler() {
  const itemDialog = document.getElementById("item__add-dialog");
  const selectInput = itemDialog.querySelector(".select__item-input");
  const todoForm = document.getElementById("todo__add-form");
  const noteForm = document.getElementById("note__add-form");
  const closeBtn = itemDialog.querySelector(".close__btn");
  const addBtn = itemDialog.querySelector(".add__btn");

  function switchForm() {
    const formToShow = selectInput.value === "to-do" ? todoForm : noteForm;
    const formToHide = selectInput.value === "to-do" ? noteForm : todoForm;
    openThis(formToShow);
    closeThis(formToHide);
  }

  selectInput.addEventListener("change", switchForm);

  closeBtn.addEventListener("click", () => {
    executeWithAnimation(itemDialog, () => {
      itemDialog.close("canceled");
    });
  });

  addBtn.addEventListener("click", () => {
    const filled = checkValue();
    if (filled) {
      executeWithAnimation(itemDialog, () => {
        const menuOpen = isMenuOpen();
        const detailOpen = isDetailOpen();
        const projectListOpen = isProjectListOpen();
        if (selectInput.value === "to-do") addTodo();
        else if (selectInput.value === "note") addNote();
        itemDialog.close("added");
        setCurrentState(getSelectedProject());
        renderLayout();
        if (menuOpen) openMenu(false);
        if (projectListOpen) openProjectList();
        if (detailOpen) openDetail();
      });
    }
  });

  function addTodo() {
    const newTodo = todo();
    populateTodo(newTodo, todoForm);
    getSelectedProject().addItem(newTodo);
    saveToLocalStorage("projectContainer", projectContainerObj);
  }

  function addNote() {
    const newNote = note();
    populateNote(newNote, noteForm);
    getSelectedProject().addItem(newNote);
    saveToLocalStorage("projectContainer", projectContainerObj);
  }

  function populateTodo(item, form) {
    const titleInput = form.querySelector(".todo__title-input");
    const desInput = form.querySelector(".todo__des-input");
    const startInput = form.querySelector(".todo__start-input");
    const dueInput = form.querySelector(".todo__due-input");
    const priorityInput = form.querySelector(".todo__priority-input");
    item.changeValue(
      titleInput.value,
      desInput.value,
      startInput.value,
      dueInput.value,
      priorityInput.value
    );
  }

  function populateNote(item, form) {
    const titleInput = form.querySelector(".note__title-input");
    const desInput = form.querySelector(".note__des-input");
    item.changeValue(titleInput.value, desInput.value);
  }

  function checkValue() {
    const form = selectInput.value === "to-do" ? todoForm : noteForm;
    if (selectInput.value === "to-do") {
      const titleInput = form.querySelector(".todo__title-input");
      const desInput = form.querySelector(".todo__des-input");
      const startInput = form.querySelector(".todo__start-input");
      const dueInput = form.querySelector(".todo__due-input");
      const priorityInput = form.querySelector(".todo__priority-input");

      return (
        titleInput.value &&
        desInput.value &&
        startInput.value &&
        dueInput.value &&
        priorityInput.value
      );
    } else {
      const titleInput = form.querySelector(".note__title-input");
      const desInput = form.querySelector(".note__des-input");

      return titleInput.value && desInput.value;
    }
  }

  function getSelectedProject() {
    const projectList = document.querySelector(".item__project-input");
    const selectedValue = projectList.value;
    return projectContainerObj
      .getAllItem()
      .find((prj) => prj.getValue().title === selectedValue);
  }
}
