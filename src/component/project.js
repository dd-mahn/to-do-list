import {format} from 'date-fns'
import itemContainer from './itemContainer'

export default function project(){
    const arr = []
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
        arr.push(item)
    }

    const deleteItem = (index) => {
        arr.splice(index, index)
    }

    const getItem = (index) => {
        return arr[index]
    }
    const getAllItem = () => {
        return arr
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