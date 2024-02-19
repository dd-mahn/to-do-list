import appendChildren from "../../utils/appendChildren"
import createDivWithClass from "../../utils/createDivWithClass"
import createIconWithClass from "../../utils/createIconWithClass"

export default function createHeader() {
    const header = document.createElement('header')

    const menuBtn = createDivWithClass('menu__btn', 'icon__big')
    const menuIcon = createIconWithClass('ri-menu-line')
    menuBtn.appendChild(menuIcon)

    const logo = createDivWithClass('logo')
    logo.innerHTML = `
        <i class="ri-stack-line"></i>
        <span>Tasko</span>`

    const addBtn = createDivWithClass('add__btn', 'icon__big')
    const addIcon = createIconWithClass('ri-add-line')
    addBtn.appendChild(addIcon)

    appendChildren(header, [menuBtn, logo, addBtn])

    return header
}
