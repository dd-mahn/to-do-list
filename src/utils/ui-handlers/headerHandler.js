import closeThis from "../closeThis"
import openThis from "../openThis"

export default function headerHandler(){
    const header = document.querySelector('header')
    const menuBtn = header.querySelector('.menu__btn')
    const addBtn = header.querySelector('.add__btn')
    const menu = document.querySelector('.menu')
    const navBar = document.querySelector('.nav__bar')

    menuBtn.addEventListener('click', () => {
        if(menu.classList.contains('d-off')){
            closeThis(navBar)
            openThis(menu)
        }else{
            closeThis(menu)
            openThis(navBar)
        }
    })

    addBtn.addEventListener('click', () => {
        
    })
}
