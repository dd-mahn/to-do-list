import projectContainerObj from "../../component/projectContainer"
import renderLayout from "../render"

export default function moveDialogHandler(curr, index){
    const moveDialog = document.getElementById('item__move-dialog')
    const projectInput = moveDialog.querySelector('.item__project-input')
    const saveBtn = moveDialog.querySelector('.add__btn')
    const cancelBtn = moveDialog.querySelector('.close__btn')

    const projects = projectContainerObj.getAllProject()

    saveBtn.addEventListener('click', () => {
        const item = curr.getItem(index)
        const destination = projects.find(prj => prj.getValue().title === projectInput.value)
        curr.deleteItem(index)
        destination.addItem(item)
        moveDialog.close('saved')
        renderLayout()
    })

    cancelBtn.addEventListener('click', () => {
        moveDialog.close('canceled')
    })
}