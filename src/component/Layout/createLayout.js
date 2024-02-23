import header from './createHeader'
import navBar from './createNavigation'
import menu from './createMenu'
import createContent from './createContent'
import createDetail from './createDetail'
import appendChildren from '../../utils/common/appendChildren'

export default function createLayout(obj){
    const body = document.querySelector('body')

    const container = document.createElement('section')
    container.classList.add('container')

    const content = createContent(obj)
    const detail = createDetail(obj)

    appendChildren(body, [header(), container])
    appendChildren(container, [navBar(), menu(), content, detail])
}