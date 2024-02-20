import project from '../project'
import {format} from 'date-fns'


const today = () => {
    const todayObj = Object.create(project())
    const curDate = format(new Date(), 'MM/dd/yyyy')

    todayObj.changeValue('Today', 'You will see all today todos here')

    return todayObj
}

export default today