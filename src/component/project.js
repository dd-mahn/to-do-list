import {format} from 'date-fns'

export default function project(){
    const arr = []
    let title
    const date = format(new Date(), 'MM/dd/yyyy')

    const changeValue = (tit) => {
        title = tit
    }

    const getValue = () => {title, description, date}

    const addItem = (item) => {
        arr.push(item)
    }

    const deleteItem = (index) => {
        arr.splice(index,index)
    }

    const displayItem = (index) => {
        if(index >= 0 && index < arr.length){
            console.log(arr[index].getValue())
        }
    }
    const displayAllItem = () => {
        console.log(arr)
    }

    return{
        changeValue,
        getValue,
        addItem,
        deleteItem,
        displayItem,
        displayAllItem
    }
}