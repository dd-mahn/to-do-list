export default function header(){
    const header = document.createElement('header')

    const menuBtn = document.createElement('div')
    menuBtn.classList.add('menu__btn icon__big')
    menuBtn.innerHTML = `<i class="ri-menu-line></i>`

    const logo = document.createElement('div')
    logo.classList.add('logo')
    logo.innerHTML = `
        <i class="ri-stack-line"></i>
        <span>Tasko</span>`

    const addBtn = document.createElement('div')
    addBtn.classList.add('add__btn icon__big')
    addBtn.innerHTML = `<i class="ri-add-line"></i>`

    header.appendChild(menuBtn)
    header.appendChild(logo)
    header.appendChild(addBtn)

}