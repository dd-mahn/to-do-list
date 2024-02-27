import {format} from 'date-fns'
import itemContainer from './itemContainer'

export default function project(){
    const container = itemContainer
    let title, description
    const date = format(new Date(), 'MM/dd/yyyy')

    const changeValue = (tit,des) => {
        title = tit
        description = des
    }

    const getValue = () => {
        return{title, description, date}
    }

    const addItem = (item) => {
        container.addItem(item)
    }

    const deleteItem = (index) => {
        container.deleteItem(index)
    }

    const getItem = (index) => {
        return container.getItem(index)
    }
    const getAllItem = () => {
        return container.getAllItem()
    }

    return{
        changeValue,
        getValue,
        addItem,
        deleteItem,
        getItem,
        getAllItem
    }
}