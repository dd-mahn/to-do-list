import header from './createHeader'
import navBar from './createNavigation'
import menu from './createMenu'

export default function addLayout(){
    const body = document.querySelector('body')
    const container = document.createElement('section')
    container.classList.add('container')

    body.appendChild(header())
    body.appendChild(container)
    container.appendChild(navBar())
    container.appendChild(menu())
}