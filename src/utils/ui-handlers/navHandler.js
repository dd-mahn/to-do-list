import history from "../../component/Default Project/history";
import { setCurrentState } from "../state";
import renderLayout from "../render";
import { openMenu, openProjectList } from "./menuHandler";
import appearanceHandler from "./appearanceHandler";
import { loadFromLocalStorage, saveToLocalStorage } from "../localStorage";
import projectContainerObj from "../../component/projectContainer";

export default function navHandler() {
  const navBar = document.querySelector(".nav__bar");
  const searchNav = navBar.querySelector(".search__nav");
  const inboxNav = navBar.querySelector(".inbox__nav");
  const todayNav = navBar.querySelector(".today__nav");
  const projectNav = navBar.querySelector(".project__nav");
  const historyNav = navBar.querySelector(".history__nav");
  const appearanceBtn = navBar.querySelector(".appearance__mode");

  searchNav.addEventListener("click", () => openMenu());

  inboxNav.addEventListener("click", () => {
    setCurrentState(projectContainerObj.getItem(0));
    renderLayout();
  });
  todayNav.addEventListener("click", () => {
    setCurrentState(projectContainerObj.getItem(1));
    renderLayout();
  });
  projectNav.addEventListener("click", () => {
    openMenu();
    openProjectList();
  });
  historyNav.addEventListener("click", () => {
    if (localStorage.getItem("history")) {
      setCurrentState(loadFromLocalStorage("history"));
    } else {
      setCurrentState(history);
      saveToLocalStorage("history", history);
    }

    renderLayout();
  });

  appearanceBtn.addEventListener("click", appearanceHandler);
}
