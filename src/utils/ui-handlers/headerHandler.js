import closeThis from "../common/closeThis"
import openThis from "../common/openThis"
import itemDialogHandler from "./itemDialogHandler"

export default function headerHandler(){
    const header = document.querySelector('header')
    const menuBtn = header.querySelector('.menu__btn')
    const addBtn = header.querySelector('.add__btn')
    const menu = document.querySelector('.menu')
    const navBar = document.querySelector('.nav__bar')

    menuBtn.addEventListener('click', () => {
        if(menu.classList.contains('d-off')){
            navBar.setAttribute('closing','')
            navBar.addEventListener('animationend', () => {
                navBar.removeAttribute('closing')
                closeThis(navBar)
                openThis(menu)
            }, {once: true})
            
            
        }else{
            menu.setAttribute('closing','')
            menu.addEventListener('animationend', () => {
                menu.removeAttribute('closing')
                closeThis(menu)
                openThis(navBar)
            }, {once: true})
        }
    })

    addBtn.addEventListener('click', () => {
        const itemDialog = document.getElementById('item__add-dialog')
        itemDialog.showModal()
        itemDialogHandler()
    })
}
