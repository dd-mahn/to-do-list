import header from './createHeader'
import navBar from './createNavigation'
import menu from './createMenu'
import createContent from './createContent'
import createDetail from './createDetail'
import {createProjectDialog, createItemDialog, createConfirmDialog, createEditDialog, createMoveDialog} from './createDialogs'
import appendChildren from '../../utils/common/appendChildren'

export default function createLayout(obj){
    const body = document.querySelector('body')

    const container = document.createElement('section')
    container.classList.add('container')

    const content = createContent(obj)
    // const detail = createDetail(obj)
    const projectDialog = createProjectDialog()
    const itemDialog = createItemDialog()
    const editDialog = createEditDialog()
    const moveDialog = createMoveDialog()
    const confirmDialog = createConfirmDialog()

    appendChildren(body, [header(), container])
    appendChildren(container, [navBar(), menu(), content, projectDialog, itemDialog, editDialog, moveDialog, confirmDialog])
}