import header from './createHeader'
import navBar from './createNavigation'
import menu from './createMenu'
import createContent from './createContent'
import inbox from '../Default/inbox'
import appendChildren from '../../utils/appendChildren'

export default function createLayout(){
    const body = document.querySelector('body')

    const container = document.createElement('section')
    container.classList.add('container')

    const content = createContent(inbox())

    appendChildren(body, [header(), container])
    appendChildren(container, [navBar(), menu(), content])
}