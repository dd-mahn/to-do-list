import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage'
import inboxObj from './Default Project/inbox'
import todayObj from './Default Project/today'

export function projectContainer() {
    const arr = []
    const type = 'projectContainer'

    const addItem = (prj) => {
        arr.push(prj)
    }

    const getItem = (index) => {
        if(index >= 0 && index < arr.length) return arr[index]
    }

    const getAllItem = () => {
        return arr
    }

    const deleteItem = (index) => {
        if(index === 0){
            arr.splice(0,1)
        }else{
            arr.splice(index, 1)
        }
    }

    const getType = () => type

    return{
        addItem,
        getItem,
        getAllItem,
        deleteItem,
        getType
    }
}

function projectContainerConstructor() {
    if(localStorage.getItem('projectContainer') === null){
        console.log('Saving to local storage')
        const projectContainerObj = projectContainer()
        projectContainerObj.addItem(inboxObj)
        projectContainerObj.addItem(todayObj)
        saveToLocalStorage('projectContainer', projectContainerObj)
        return projectContainerObj
    }else{
        const loadedProjectContainer = loadFromLocalStorage('projectContainer')
        console.log(loadedProjectContainer)
        return loadedProjectContainer
    }
}

const projectContainerObj = projectContainerConstructor()

export default projectContainerObj