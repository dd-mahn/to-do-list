export default function projectContainer() {
    const arr = []

    const addItem = (item) => {
        arr.push(item)
    }

    const displayItem = (index) => {
        if(index >= 0 && index < arr.length) clg(arr[index].displayAllItem())
    }

    const displayAllItem = () => {
        arr.forEach(item , () => {
            console.log(item.displayAllItem())
        })
    }

    const deleteItem = (index) => {
        if(index >= 0 && index < arr.length) arr.splice(index,index)
    }

    return{
        addItem,
        displayItem,
        displayAllItem,
        deleteItem
    }
}