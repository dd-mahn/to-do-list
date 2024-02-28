import project from "../project";
import todo from "../todo"
import note from "../note"

const todo1StartDate = new Date()
const todo1DueDate = new Date()
todo1DueDate.setFullYear(todo1DueDate.getFullYear() + 1)

const inbox = () => {
    const inboxObj = Object.create(project())
    inboxObj.changeValue('Inbox', 'Where you store all your new stuffs')

    const todo1 = todo()
    
    todo1.changeValue('Create your first project!', 'Click the add button on our menu', todo1StartDate, todo1DueDate, 'high')

    const note1 = note()
    note1.changeValue('Today is a wonderful day!', 'Do something interesting today!')

    inboxObj.addItem(todo1)
    inboxObj.addItem(note1)

    return inboxObj
}

const inboxObj = inbox()

export default inboxObj