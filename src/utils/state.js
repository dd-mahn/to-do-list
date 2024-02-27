import inbox from "../component/Default Project/inbox"

let currentState = {
    currentProject: inbox
}

export function setCurrentState(obj){
    currentState.currentProject = obj
}

export function getCurrentState(){
    return currentState.currentProject
}