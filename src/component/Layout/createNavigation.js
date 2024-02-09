export default function createNavigationBar() {
    const navBar = document.createElement('div');
    navBar.classList.add('nav__bar');

    const navItems = document.createElement('div');
    navItems.classList.add('nav__items');

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
    `;
    navItems.innerHTML = navItemHTML;

    const appearanceMode = document.createElement('div');
    appearanceMode.classList.add('appearance__mode', 'icon__big');
    appearanceMode.innerHTML = '<i class="ri-sun-line"></i>';

    navBar.appendChild(navItems);
    navBar.appendChild(appearanceMode);

    return navBar;
}
