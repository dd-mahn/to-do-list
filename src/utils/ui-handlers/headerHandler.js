import executeWithAnimation from "../common/executeWithAnimation"
import itemDialogHandler from "./itemDialogHandler"
import { closeMenu, openMenu } from "./menuHandler"

export default function headerHandler(){
    const header = document.querySelector('header')
    const menuBtn = header.querySelector('.menu__btn')
    const addBtn = header.querySelector('.add__btn')
    const menu = document.querySelector('.menu')
    const navBar = document.querySelector('.nav__bar')

    menuBtn.addEventListener('click', () => {
        if(menu.classList.contains('d-off')){
            executeWithAnimation(navBar, () => {
                openMenu(true)
            })          
        }else{
            executeWithAnimation(menu, () => {
                closeMenu()
            })
        }
    })

    addBtn.addEventListener('click', () => {
        const itemDialog = document.getElementById('item__add-dialog')
        itemDialog.showModal()
        itemDialogHandler()
    })
}
