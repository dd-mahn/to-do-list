import inbox from "../../component/Default Project/inbox"
import closeThis from "../closeThis"
import openThis from "../openThis"
import today from "../../component/Default Project/today"
import history from "../../component/Default Project/history"
import changeContent from "../../component/Layout/changeContent"

export default function navHandler(){
    const navBar = document.querySelector('.nav__bar')
    const searchNav = navBar.querySelector('.search__nav')
    const inboxNav = navBar.querySelector('.inbox__nav')
    const todayNav = navBar.querySelector('.today__nav')
    const projectNav = navBar.querySelector('.project__nav')
    const historyNav = navBar.querySelector('.history__nav')

    searchNav.addEventListener('click', () => openMenu())
    
    inboxNav.addEventListener('click', () => changeContent(inbox()))
    todayNav.addEventListener('click', () => changeContent(today()))
    projectNav.addEventListener('click', () => openMenu())
    historyNav.addEventListener('click', () => changeContent(history()))

}

function openMenu(){
    const navBar = document.querySelector('.nav__bar')
    const menu = document.querySelector('.menu')

    closeThis(navBar)
    openThis(menu)
}