import {format} from 'date-fns'

export default function note(){
    let title, description 
    const date = format(new Date(), 'MM/dd/yyyy')

    const changeValue = (tit,des) => {
        title = tit
        description = des
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