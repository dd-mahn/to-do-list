import appendChildren from "../../utils/common/appendChildren"
import createDivWithClass from "../../utils/common/createDivWithClass"

export default function createMenu() {
    const menu = createDivWithClass('menu', 'd-off')

    const menuTop = createDivWithClass('menu__top')
    const menuItemsHTML = `
        <div class="search__bar">
            <input type="text">
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
        <div class="menu__item project__list">
            <div class="project__nav ">
                <div class="icon__small">
                    <i class="ri-archive-line"></i>
                </div>
                <span>Project</span>
                <div class="arrow icon__small">
                    <i class="ri-arrow-up-s-line"></i>
                </div>
            </div>
            <ul class="d-off">
                <li class="project__add-btn">
                    <button>+</button>
                </li>
            </ul>
        </div>
        <div class="menu__item history__nav">
            <div class=" icon__small">
                <i class="ri-history-line"></i>
            </div>
            <span>History</span>
        </div>
    `
    menuTop.innerHTML = menuItemsHTML

    const menuBot = createDivWithClass('menu__bot', 'icon__big')
    menuBot.innerHTML = '<i class="ri-sun-line"></i>'

    appendChildren(menu, [menuTop, menuBot])

    return menu
}