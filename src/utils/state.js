import projectContainerObj from "../component/projectContainer"
import { saveToLocalStorage } from "./localStorage"

let currentState = {
    currentProject: projectContainerObj.getItem(0)
}

export function setCurrentState(obj){
    currentState.currentProject = obj
}

export function getCurrentState(){
    return currentState.currentProject
}