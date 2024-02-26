import createDetail from "../../component/Layout/createDetail"

export default function changeDetail(obj){
    const container = document.querySelector('.container')
    const oldDetail = container.querySelector('.detail')
    const newDetail = createDetail(obj)
    
    container.removeChild(oldDetail)
    container.appendChild(newDetail)
}