// For projectDialogHandler
import project from "../../component/project"
import projectContainerObj from "../../component/projectContainer"
import executeWithAnimation from "../common/executeWithAnimation"
import renderLayout from "../render"
import { setCurrentState } from "../state"
import { openMenu, openProjectList } from "./menuHandler"

export default function projectDialogHandler() {
    const projectDialog = document.getElementById('project__add-dialog')
    const projectForm = document.getElementById('project__add-form')
    const nameInput = projectForm.querySelector('.project__title-input')
    const desInput = projectForm.querySelector('.project__des-input')
    const addBtn = projectForm.querySelector('.add__btn')
    const closeBtn = projectForm.querySelector('.close__btn')

    closeBtn.addEventListener('click', () => {
        executeWithAnimation(projectDialog, () => {
            projectForm.removeAttribute('novalidate')
            projectDialog.close('canceled')
            projectDialog.classList.remove('df')
            projectForm.setAttribute('novalidate', 'true')
        })
        
    })

    addBtn.addEventListener('click', () => {
        const allProjects = projectContainerObj.getAllItem()
        const nameValue = nameInput.value.trim()
        const desValue = desInput.value.trim()
        
        if (nameValue && desValue) {
            executeWithAnimation(projectDialog, () => {
                const existingProject = allProjects.find(prj => prj.getValue().title === nameValue)
                const newProject = project()
                if (existingProject) {
                    newProject.changeValue(nameValue + '1', desValue)
                } else {
                    newProject.changeValue(nameValue, desValue)
                }
                projectContainerObj.addItem(newProject)
                setCurrentState(newProject)
                renderLayout()
                openMenu()
                openProjectList()
            }) 
        } else {
            console.log('Empty input')
        }            
    })
}