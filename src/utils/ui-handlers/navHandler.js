import inbox from "../../component/Default Project/inbox"
import today from "../../component/Default Project/today"
import history from "../../component/Default Project/history"
import { setCurrentState } from "../state"
import renderLayout from "../render"
import { openMenu, openProjectList } from "./menuHandler"

export default function navHandler(){
    const navBar = document.querySelector('.nav__bar')
    const searchNav = navBar.querySelector('.search__nav')
    const inboxNav = navBar.querySelector('.inbox__nav')
    const todayNav = navBar.querySelector('.today__nav')
    const projectNav = navBar.querySelector('.project__nav')
    const historyNav = navBar.querySelector('.history__nav')

    searchNav.addEventListener('click', () => openMenu())
    
    inboxNav.addEventListener('click', () => {
        setCurrentState(inbox)
        renderLayout()
    })
    todayNav.addEventListener('click', () => {
        setCurrentState(today)
        renderLayout()
    })
    projectNav.addEventListener('click', () => {
        openMenu()
        openProjectList()
    })
    historyNav.addEventListener('click', () => {
        setCurrentState(history)
        renderLayout()
    })

}

