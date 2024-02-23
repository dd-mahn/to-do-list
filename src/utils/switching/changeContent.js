import createContent from "../../component/Layout/createContent"

export default function changeContent(obj){
    const container = document.querySelector('.container')
    const oldContent = container.querySelector('.content')
    const newContent = createContent(obj)

    container.removeChild(oldContent)
    container.appendChild(newContent)

}