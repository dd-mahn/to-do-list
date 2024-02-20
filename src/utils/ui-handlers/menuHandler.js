import inbox from "../../component/Default Project/inbox"
import closeThis from "../closeThis"
import openThis from "../openThis"
import today from "../../component/Default Project/today"
import history from "../../component/Default Project/history"
import changeContent from "../../component/Layout/changeContent"

export default function menuHandler(){
    const menu = document.querySelector('.menu')
    const inboxNav = menu.querySelector('.inbox__nav')
    const todayNav = menu.querySelector('.today__nav')
    const projectNav = menu.querySelector('.project__nav')
    const historyNav = menu.querySelector('.history__nav')
    
    inboxNav.addEventListener('click', () => changeContent(inbox()))
    todayNav.addEventListener('click', () => changeContent(today()))
    projectNav.addEventListener('click', () => {
        const list = menu.querySelector('ul')
        if(list.classList.contains('d-off')){
            openProjectList()
        }else{
            closeProjectList()
        }
    })
    historyNav.addEventListener('click', () => changeContent(history()))

}

function openProjectList(){
    const menu = document.querySelector('.menu')
    const list = menu.querySelector('ul')
    const arrow = menu.querySelector('.arrow')

    list.classList.remove('d-off')
    arrow.classList.add('rotate-180')
}

function closeProjectList(){
    const menu = document.querySelector('.menu')
    const list = menu.querySelector('ul')
    const arrow = menu.querySelector('.arrow')

    list.classList.add('d-off')
    arrow.classList.remove('rotate-180')
}