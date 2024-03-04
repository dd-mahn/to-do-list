import projectContainerObj from '../../component/projectContainer'
export default function searchAllItems(title){
    const searchResult = []
    const allProjects = projectContainerObj.getAllItem()
    allProjects.forEach(prj => {
        const allItems = prj.getAllItem()
        allItems.forEach(item => {
            if(item.getValue().title.toLowerCase().includes(title.toLowerCase())){
                searchResult.push(item)
            }
        })
    })

    return searchResult
}