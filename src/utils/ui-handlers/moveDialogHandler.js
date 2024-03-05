import projectContainerObj from "../../component/projectContainer"
import executeWithAnimation from "../common/executeWithAnimation"
import renderLayout from "../render"

export default function moveDialogHandler(curr, index){
    const moveDialog = document.getElementById('item__move-dialog')
    const projectInput = moveDialog.querySelector('.item__project-input')
    const saveBtn = moveDialog.querySelector('.add__btn')
    const cancelBtn = moveDialog.querySelector('.close__btn')

    const projects = projectContainerObj.getAllItem()

    saveBtn.addEventListener('click', () => {
        const item = curr.getItem(index)
        const destination = projects.find(prj => prj.getValue().title === projectInput.value)
        curr.deleteItem(index)
        destination.addItem(item)
        executeWithAnimation(moveDialog, () => {
            moveDialog.close('saved')
            renderLayout()
        })
    })

    cancelBtn.addEventListener('click', () => {
        executeWithAnimation(moveDialog, () => {
            moveDialog.close('canceled')
        })
    })
}