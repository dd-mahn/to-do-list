import inbox from './Default Project/inbox'
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
        addProject,
        getProject,
        getAllProject,
        deleteProject
    }
}

const projectContainerObj = projectContainer()
projectContainerObj.addProject(inbox)
export default projectContainerObj