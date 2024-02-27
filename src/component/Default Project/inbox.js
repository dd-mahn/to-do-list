import project from "../project";
import todo from "../todo"
import note from "../note"

const todo1Date = new Date()
todo1Date.setFullYear(todo1Date.getFullYear() + 1)

const inbox = () => {
    const inboxObj = Object.create(project())
    inboxObj.changeValue('Inbox', 'Where you store all your new stuffs')

    const todo1 = todo()
    
    todo1.changeValue('Create your first project!', 'Click the add button on our menu', todo1Date, 'high')

    const note1 = note()
    note1.changeValue('Today is a wonderful day!', 'I love you <3')

    inboxObj.addItem(todo1)
    inboxObj.addItem(note1)

    return inboxObj
}

const inboxObj = inbox()

export default inboxObj