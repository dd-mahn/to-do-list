import header from './createHeader'
import navBar from './createNavigation'
import menu from './createMenu'
import createContent from './createContent'
import appendChildren from '../../utils/appendChildren'

export default function createLayout(obj){
    const body = document.querySelector('body')

    const container = document.createElement('section')
    container.classList.add('container')

    const content = createContent(obj)

    appendChildren(body, [header(), container])
    appendChildren(container, [navBar(), menu(), content])
}