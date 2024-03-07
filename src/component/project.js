import {format} from 'date-fns'

export default function project(){
    const arr = []
    const type = 'project'
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
        if(index === 0){
            arr.splice(0,1)
        }else{
            arr.splice(index, 1)
        }
    }

    const getItem = (index) => {
        return arr[index]
    }
    const getAllItem = () => {
        return arr
    }

    const getType = () => type
    

    return{
        changeValue,
        getValue,
        addItem,
        deleteItem,
        getItem,
        getAllItem,
        getType
    }
}