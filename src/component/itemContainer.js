export default function ItemContainer() {
    const arr = []

    const addItem = (item) => {
        arr.push(item)
    }

    const getItem = (index) => {
        if(index >= 0 && index < arr.length) return arr[index]
    }

    const getAllItem = () => {
        return arr
    }

    const deleteItem = (index) => {
        if(index >= 0 && index < arr.length) arr.splice(index,index)
    }

    return{
        addItem,
        getItem,
        getAllItem,
        deleteItem
    }
}