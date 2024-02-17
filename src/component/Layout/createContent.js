export default function createContent(prj){

    const title = prj.getValue().title

    const contentDiv = document.createElement('div')
    content.classList.add('content')

    const titleH1 = document.createElement('h1')
    titleDiv.innerHTML=title
    titleDiv.classList.add('content__title')

    const itemDiv = document.createElement('div')
    itemDiv.classList.add('content__items')

    contentDiv.appendChild(titleH1)
    contentDiv.appendChild(itemDiv)

    return contentDiv
}