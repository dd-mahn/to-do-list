import {format} from 'date-fns'

export default function todo(){
    const type = 'todo'
    let title, description, dueDate, priority
    const startDate = format(new Date(), 'MM/dd/yyyy')
    let status = false

    const changeValue = (tit,des,due,pri) => {
        title = tit
        description = des
        dueDate = format(due, 'MM/dd/yyyy')
        priority = pri
    }

    const changeStatus = () => {
        status === false ? true : false
    }
    
    const getType = () => type

    const getValue = () => {
        return{
            title,
            description,
            startDate,
            dueDate,
            priority,
            status
        }
    }

    return{
        changeValue,
        changeStatus,
        getType,
        getValue
    }
}