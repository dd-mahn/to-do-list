import inboxObj from './Default Project/inbox'
import todayObj from './Default Project/today'
function projectContainer() {
    const arr = []

    const addItem = (prj) => {
        arr.push(prj)
    }

    const getItem = (index) => {
        if(index >= 0 && index < arr.length) return arr[index]
    }

    const getAllItem = () => {
        return arr
    }

    const deleteItem = (index) => {
        if(index === 0){
            arr.splice(0,1)
        }else{
            arr.splice(index, index)
        }
    }

    return{
        addItem,
        getItem,
        getAllItem,
        deleteItem
    }
}

const projectContainerObj = projectContainer()
projectContainerObj.addItem(inboxObj)
projectContainerObj.addItem(todayObj)

export default projectContainerObj