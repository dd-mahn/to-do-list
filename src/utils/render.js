import createLayout from "../component/Layout/createLayout";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";
import { getCurrentState, setCurrentState } from "./state";
import contentHandler from "./ui-handlers/contentHandler";
import headerHandler from "./ui-handlers/headerHandler";
import menuHandler from "./ui-handlers/menuHandler";
import navHandler from "./ui-handlers/navHandler";

export default function renderLayout() {
    const body = document.querySelector('body')
    body.innerHTML = ''

    let currentProject = getCurrentState()

    createLayout(currentProject)
    
    if(body.innerHTML !== ''){
        headerHandler()
        navHandler()
        menuHandler()
        contentHandler()
    }
}