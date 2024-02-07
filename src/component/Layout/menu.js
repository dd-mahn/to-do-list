export default function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu', 'd-off');

    const menuTop = document.createElement('div');
    menuTop.classList.add('menu__top');

    const menuItemsHTML = `
        <div class="search__bar">
            <input type="text">
            <div class="search__icon icon__small">
                <i class="ri-search-line"></i>
            </div>
        </div>
        <div class="menu__item">
            <div class="inbox__nav icon__small">
                <i class="ri-inbox-2-line"></i>
            </div>
            <span>Inbox</span>
        </div>
        <div class="menu__item">
            <div class="today__nav icon__small">
                <i class="ri-calendar-line"></i>
            </div>
            <span>Today</span>
        </div>
        <div class="menu__item project__list">
            <div class="">
                <div class="project__nav icon__small">
                    <i class="ri-archive-line"></i>
                </div>
                <span>Project</span>
                <div class="arrow icon__small">
                    <i class="ri-arrow-up-s-line"></i>
                </div>
            </div>
            <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li class="project__add-btn">
                    <button>+</button>
                </li>
            </ul>
        </div>
        <div class="menu__item">
            <div class="history__nav icon__small">
                <i class="ri-history-line"></i>
            </div>
            <span>History</span>
        </div>
    `;
    menuTop.innerHTML = menuItemsHTML;

    const menuBot = document.createElement('div');
    menuBot.classList.add('menu__bot', 'icon__big');
    menuBot.innerHTML = '<i class="ri-sun-line"></i>';

    menu.appendChild(menuTop);
    menu.appendChild(menuBot);

    return menu;
}
