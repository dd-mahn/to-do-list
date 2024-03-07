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
            switch(item){
                case 'date':
                    detailItem.innerHTML = `<strong>Date created: </strong> ${detail[item]}`
                    break
                case 'startDate':
                    detailItem.innerHTML = `<strong>Start date: </strong> ${detail[item]}`
                    break
                case 'dueDate':
                    detailItem.innerHTML = `<strong>Due date: </strong> ${detail[item]}`
                    break
                case 'priority':
                    detailItem.innerHTML = `<strong>Priority: </strong> ${detail[item]}`
                    break
                case 'status':
                    if(detail[item] === true){
                        detailItem.innerHTML = `<strong>Status: </strong> Finished`
                    }else{
                        detailItem.innerHTML = `<strong>Status: </strong> On-going`
                    }
                    break
            }
            detailList.appendChild(detailItem)
        }
    }

    const closeBtn = document.createElement('button')
    closeBtn.classList.add('close__btn')
    closeBtn.innerHTML = `<i class="ri-close-line"></i>`

    appendChildren(detailDiv, [closeBtn, titleH1, descriptionP, detailList])

    return detailDiv
}

