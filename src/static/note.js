import {format} from 'date-fns'

export default function note(){
    let title, description, date

    const changeValue = (tit,des) => {
        title = tit
        description = des
        date = format(new Date(), 'MM/dd/yyyy')
    }

    const getValue = () => {
        title,
        description,
        date
    }

    return{
        changeValue,
        getValue
    }
}