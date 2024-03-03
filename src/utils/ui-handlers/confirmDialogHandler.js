import renderLayout from "../render"

export function deleteConfirmHandler(project, index){
    const confirmDialog = document.getElementById('confirm__dialog')
    const yesBtn = confirmDialog.querySelector('.add__btn')
    const noBtn = confirmDialog.querySelector('.close__btn')

    yesBtn.addEventListener('click', () => {
        project.deleteItem(index)
        confirmDialog.close('deleted')
        renderLayout()
    })

    noBtn.addEventListener('click', () => {
        confirmDialog.close('cancelled')
    })
}