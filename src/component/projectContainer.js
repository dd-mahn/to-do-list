function projectContainer() {
    const arr = []

    const addProject = (prj) => {
        arr.push(prj)
    }

    const getProject = (index) => {
        if(index >= 0 && index < arr.length) return arr[index]
    }

    const getAllProject = () => {
        return arr
    }

    const deleteProject = (index) => {
        if(index >= 0 && index < arr.length) arr.splice(index,index)
    }

    return{
        addItem,
        getItem,
        getAllItem,
        deleteItem
    }
}

const projectContainerObj = projectContainer()
export default projectContainerObj