import inbox from "../../component/Default Project/inbox";
import today from "../../component/Default Project/today";
import history from "../../component/Default Project/history";
import { setCurrentState } from "../state";
import renderLayout from "../render";
import projectDialogHandler from "./projectDialogHandler";
import projectContainerObj from "../../component/projectContainer";
import closeThis from "../common/closeThis";
import openThis from "../common/openThis";
import { deleteProjectConfirmHandler } from "./confirmDialogHandler";
import { editProjectDialogHandler } from "./editDialogHandler";
import searchResult from "../../component/Default Project/searchResult";
import searchAllItems from "../common/searchAllItems";
import appearanceHandler from "./appearanceHandler";
import { loadFromLocalStorage, saveToLocalStorage } from "../localStorage";

export default function menuHandler() {
  const menu = document.querySelector(".menu");
  const inboxNav = menu.querySelector(".inbox__nav");
  const todayNav = menu.querySelector(".today__nav");
  const projectNav = menu.querySelector(".project__nav");
  const historyNav = menu.querySelector(".history__nav");
  const projectAddButton = menu.querySelector(".project__add-btn button");
  const projectListItems = document.querySelectorAll(".project__list-item");
  const searchBtn = menu.querySelector(".search__icon");
  const appearanceBtn = menu.querySelector(".menu__bot");

  inboxNav.addEventListener("click", () =>
    navClickHandler(projectContainerObj.getItem(0))
  );
  todayNav.addEventListener("click", () =>
    navClickHandler(projectContainerObj.getItem(1))
  );
  projectNav.addEventListener("click", toggleProjectList);
  historyNav.addEventListener("click", () => {
    if (localStorage.getItem("history")) {
      navClickHandler(loadFromLocalStorage("history"));
    } else {
      navClickHandler(history);
      saveToLocalStorage("history", history);
    }
  });
  projectAddButton.addEventListener("click", handleProjectAddButtonClick);

  projectListItems.forEach((item) => {
    const title = item.querySelector("span");
    const editBtn = item.querySelector(".edit__btn");
    const deleteBtn = item.querySelector(".delete__btn");
    const projects = projectContainerObj.getAllItem();
    const targetProject = projects.find(
      (prj) => prj.getValue().title === item.textContent
    );

    title.addEventListener("click", () => handleTitleClick(targetProject));
    editBtn.addEventListener("click", () =>
      handleEditButtonClick(targetProject)
    );
    deleteBtn.addEventListener("click", () =>
      handleDeleteButtonClick(title.textContent)
    );
  });

  searchBtn.addEventListener("click", handleSearchButtonClick);

  appearanceBtn.addEventListener("click", appearanceHandler);
}

function navClickHandler(project) {
  const listOpen = isProjectListOpen();
  setCurrentState(project);
  renderLayout();
  openMenu(false);
  if (listOpen) toggleProjectList();
}

function toggleProjectList() {
  const list = document.querySelector(".menu ul");
  list.classList.toggle("d-off");
  const arrow = document.querySelector(".arrow");
  arrow.classList.toggle("rotate-180");
}

function handleProjectAddButtonClick() {
  const projectDialog = document.getElementById("project__add-dialog");
  projectDialog.showModal();
  projectDialog.classList.add("df");
  projectDialogHandler();
}

function handleTitleClick(project) {
  setCurrentState(project);
  renderLayout();
  openMenu(false);
  openProjectList();
}

function handleEditButtonClick(project) {
  const editDialog = document.getElementById("item__edit-dialog");
  const todoForm = editDialog.querySelector("#todo__edit-form");
  const noteForm = editDialog.querySelector("#note__edit-form");
  const projectForm = editDialog.querySelector("#project__edit-form");

  editDialog.showModal();
  openThis(projectForm);
  closeThis(noteForm);
  closeThis(todoForm);
  editProjectDialogHandler(project);
  openProjectList();
}

function handleDeleteButtonClick(title) {
  const confirmDialog = document.getElementById("confirm__dialog");
  confirmDialog.showModal();
  const index = projectContainerObj
    .getAllItem()
    .findIndex((prj) => prj.getValue().title === title);
  deleteProjectConfirmHandler(projectContainerObj, index);
}

function handleSearchButtonClick() {
  const searchInput = document.querySelector(".search__input");
  if (searchInput.value !== "") {
    const searchResultObj = searchResult();
    const results = searchAllItems(searchInput.value);
    results.forEach((item) => searchResultObj.addItem(item));
    setCurrentState(searchResultObj);
    renderLayout();
    openMenu(false);
  }
}

export function isProjectListOpen() {
  const list = document.querySelector(".menu ul");
  return !list.classList.contains("d-off");
}

export function openProjectList() {
  const list = document.querySelector(".menu ul");
  const arrow = document.querySelector(".arrow");
  list.classList.remove("d-off");
  arrow.classList.add("rotate-180");
}

export function isMenuOpen() {
  const menu = document.querySelector(".menu");
  return !menu.classList.contains("d-off");
}

export function openMenu(animated) {
  const navBar = document.querySelector(".nav__bar");
  const menu = document.querySelector(".menu");
  closeThis(navBar);
  if (animated === false) {
    openThis(menu);
  } else {
    menu.classList.add("slideInLeft");
    openThis(menu);
  }
}

export function closeMenu() {
  const navBar = document.querySelector(".nav__bar");
  const menu = document.querySelector(".menu");
  closeThis(menu);
  navBar.classList.add("slideInLeft");
  openThis(navBar);
}
