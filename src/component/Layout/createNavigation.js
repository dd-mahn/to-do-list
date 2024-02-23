import appendChildren from "../../utils/common/appendChildren"
import createDivWithClass from "../../utils/common/createDivWithClass"

export default function createNavigationBar() {
    const navBar = createDivWithClass('nav__bar')

    const navItems = createDivWithClass('nav__items')
    const navItemHTML = `
        <div class="nav__item icon__big search__nav">
            <i class="ri-search-line"></i>
        </div>
        <div class="nav__item icon__big inbox__nav">
            <i class="ri-inbox-2-line"></i>
        </div>
        <div class="nav__item icon__big today__nav">
            <i class="ri-calendar-line"></i>
        </div>
        <div class="nav__item icon__big project__nav">
            <i class="ri-archive-line"></i>
        </div>
        <div class="nav__item icon__big history__nav">
            <i class="ri-history-line"></i>
        </div>
    `
    navItems.innerHTML = navItemHTML

    const appearanceMode = createDivWithClass('appearance__mode', 'icon__big')
    appearanceMode.innerHTML = '<i class="ri-sun-line"></i>'

    appendChildren(navBar, [navItems, appearanceMode])

    return navBar
}
