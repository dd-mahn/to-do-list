import project from "../../component/project"
import projectContainerObj from "../../component/projectContainer"
import renderLayout from "../render"

export default function projectDialogHandler(){
    const projectDialog = document.getElementById('project__add-dialog')
    const projectForm = document.getElementById('project__add-form')
    const nameInput = projectForm.querySelector('.project__title-input')
    const desInput = projectForm.querySelector('.project__des-input')
    const addBtn = projectForm.querySelector('.add__btn')
    const closeBtn = projectForm.querySelector('.close__btn')

    closeBtn.addEventListener('click', () => {
        // projectForm.removeAttribute("novalidate")
        projectDialog.close("canceled")
        // projectForm.setAttribute("novalidate","true")
    })

    addBtn.addEventListener('click', () => {
        if(nameInput.value !== '' && desInput.value !== ''){
            const newProject = project()
            newProject.changeValue(nameInput.value, desInput.value)
            projectContainerObj.addProject(newProject)
            renderLayout()
        }else{
            console.log('Empty input')
        }
    })
}
