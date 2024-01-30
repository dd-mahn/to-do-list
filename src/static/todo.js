import {format} from 'date-fns'

export default function todo(){
    let title, description, startDate, dueDate, priority
    let status = false

    const changeValue = (tit,des,due,pri) => {
        title = tit
        description = des
        startDate = format(new Date(), 'MM/dd/yyyy')
        dueDate = format(due, 'MM/dd/yyyy')
        priority = pri
    }

    const changeStatus = () => {
        status === false ? true : false
    }

    const getValue = () => {
        title,
        description,
        startDate,
        dueDate,
        priority,
        status 
    }

    return{
        changeValue,
        changeStatus,
        getValue
    }
}