import appendChildren from "../../utils/common/appendChildren"
import createDivWithClass from "../../utils/common/createDivWithClass"

export default function createDetail(obj) {
    const detail = obj.getValue()
    const title = detail.title
    const description = detail.description

    const detailDiv = createDivWithClass('detail', 'd-off')

    const titleH1 = document.createElement('h1')
    titleH1.innerHTML = title

    const descriptionP = document.createElement('p')
    descriptionP.innerHTML = description

    const detailList = document.createElement('div')
    for (let item in detail) {
        if (item !== 'title' && item !== 'description') {
            const detailItem = document.createElement('span')
            detailItem.innerHTML = `<strong>${item}: </strong> ${detail[item]}`
            detailList.appendChild(detailItem)
        }
    }

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('btn')
    deleteBtn.innerHTML = `Delete`

    appendChildren(detailDiv, [titleH1, descriptionP, detailList, deleteBtn])

    return detailDiv
}

