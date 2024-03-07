import note from "../component/note"
import project from "../component/project"
import { projectContainer } from "../component/projectContainer"
import todo from "../component/todo"

export function saveToLocalStorage(key, value) {
    const serializedValue = JSON.stringify(serialize(value))
    console.log(serializedValue)
    localStorage.setItem(key, serializedValue)
}

function serialize(inputObj){
    if (inputObj.getType()) {
        const data = []
        for (const prop in inputObj) {
            let arr
            if ((typeof inputObj[prop] === 'function' && prop !== 'getAllItem') || prop === 'type') continue // Skip functions
            if (prop === 'getAllItem'){
                arr = inputObj.getAllItem()
            }
            if(Array.isArray(arr)){
                arr.forEach(obj => {
                    if (obj.getType() === 'todo' || obj.getType() === 'note'){
                        data.push({
                            type: obj.getType(),
                            value: obj.getValue()
                        })
                    }else{
                        data.push({
                            type: obj.getType(),
                            value: obj.getValue(),
                            data: obj.getAllItem().map(item => {
                                return {
                                    type: item.getType(),
                                    value: item.getValue()
                                }
                            })
                        })
                    }
                })
            }
        }
        if(inputObj.getValue !== undefined && inputObj !== 'todo' && inputObj !== 'note'){
            return {
                type: inputObj.getType(),
                value: inputObj.getValue(),
                data: data        
            }
        }
        return {
            type: inputObj.getType(),
            data: data
        }
    }else{
        return null
    }
}

export function loadFromLocalStorage(key) {
    const loaded = JSON.parse(localStorage.getItem(key))
    console.log(loaded)
    switch (loaded.type) { 
        case 'projectContainer':
            return createProjectContainer(loaded.data)
        case 'project':
            return createProject(loaded)
        default:
            return createComponent(loaded.type, loaded.data)
    }
}



function createProjectContainer(data) {
    const obj = projectContainer()
    for (const prj in data) {
        obj.addItem(createProject(data[prj]))
    }
    return obj
}

function createProject(data) {
    const obj = project()
    obj.changeValue(data.value.title, data.value.description)
    data.data.forEach(item => {
        obj.addItem(createComponent(item.type, item.value))
    })
    return obj
}

function createNote(data) {
    const obj = note()
    obj.changeValue(data.title, data.description)
    return obj
}

function createTodo(data) {
    const obj = todo()
    obj.changeValue(data.title, data.description, data.startDate, data.dueDate)
    obj.changePriority(data.priority)
    if(data.status){
        obj.changeStatus()
    }
    return obj
}

function createComponent(type, data) {
    switch (type) {
        case 'note':
            return createNote(data)
        case 'todo':
            return createTodo(data)
        default:
            return null
    }
}


// const data = JSON.parse(localStorage.getItem(key), (_key, value) => {
//     if (value.type) {
//         let obj
//         switch (value.type) {
//             case 'projectContainer':
//                 obj = createProjectContainer(value.data)
//                 break
//             case 'project':
//                 obj = createProject(value.data)
//                 break
//             case 'note':
//                 obj = createNote(value.data)
//                 break
//             case 'todo':
//                 obj = createTodo(value.data)
//                 break
//             default:
//                 obj = value
//         }
//         console.log('right')
//         return obj
//     }
//     console.log('wrong')
//     return value
// })
// return data