import appendChildren from "../../utils/common/appendChildren"
import createButtonWithClass from "../../utils/common/createButtonWithClass"
import createDivWithClass from "../../utils/common/createDivWithClass"
import projectContainerObj from "../projectContainer"

export default function createMenu() {
    const menu = createDivWithClass('menu', 'd-off')

    const menuTop = createDivWithClass('menu__top')
    const menuItemsHTML = `
        <div class="search__bar">
            <input type="text" class="search__input">
            <div class="search__icon icon__small">
                <i class="ri-search-line"></i>
            </div>
        </div>
        <div class="menu__item inbox__nav ">
            <div class="icon__small">
                <i class="ri-inbox-2-line"></i>
            </div>
            <span>Inbox</span>
        </div>
        <div class="menu__item today__nav">
            <div class=" icon__small">
                <i class="ri-calendar-line"></i>
            </div>
            <span>Today</span>
        </div>
    `
    menuTop.innerHTML = menuItemsHTML
    const historyNav = createDivWithClass('menu__item', 'history__nav')
    historyNav.innerHTML = `
        <div class=" icon__small">
            <i class="ri-history-line"></i>
        </div>
        <span>History</span>`
    appendChildren(menuTop, [createProjectList(), historyNav])
    
    const menuBot = createDivWithClass('menu__bot', 'icon__big')
    menuBot.innerHTML = '<i class="ri-sun-line"></i>'

    appendChildren(menu, [menuTop, menuBot])

    return menu
}

function createProjectList(){
    const projectListDiv = createDivWithClass('menu__item', 'project__list')
    projectListDiv.innerHTML = `
        <div class="project__nav ">
            <div class="icon__small">
                <i class="ri-archive-line"></i>
            </div>
            <span>Project</span>
            <div class="arrow icon__small">
                <i class="ri-arrow-up-s-line"></i>
            </div>
        </div>`

    const projectList = document.createElement('ul')
    projectList.classList.add('project__list-items', 'd-off')
    const projects = projectContainerObj.getAllItem()
    projects.forEach(prj => {
        if(prj.getValue().title !== 'Inbox' && prj.getValue().title !== 'Today'){
            const projectLi = document.createElement('li')
            projectLi.classList.add('project__list-item')
            projectLi.innerHTML = `<span>${prj.getValue().title}</span>`
            const buttonDiv = createDivWithClass('buttons')
            const editBtn = createButtonWithClass('edit__btn', 'ri-edit-box-line')
            const deleteBtn = createButtonWithClass('delete__btn', 'ri-delete-bin-6-line')
            appendChildren(buttonDiv, [editBtn, deleteBtn])
            projectLi.appendChild(buttonDiv)
            projectList.appendChild(projectLi)
        }
    })

    const addBtnLi = document.createElement('li')
    addBtnLi.classList.add('project__add-btn')
    const addBtn = document.createElement('button')
    addBtn.textContent = `+`
    addBtnLi.appendChild(addBtn)

    projectList.appendChild(addBtnLi)
    projectListDiv.appendChild(projectList)
    return projectListDiv
}
