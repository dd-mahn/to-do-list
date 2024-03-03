import inboxObj from './Default Project/inbox'
import todayObj from './Default Project/today'
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
        if(index === 0){
            arr.splice(0,1)
        }else{
            arr.splice(index, index)
        }
    }

    return{
        addProject,
        getProject,
        getAllProject,
        deleteProject
    }
}

const projectContainerObj = projectContainer()
projectContainerObj.addProject(inboxObj)
projectContainerObj.addProject(todayObj)
export default projectContainerObj