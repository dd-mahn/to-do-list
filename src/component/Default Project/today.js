import project from "../../static/project";
import format from 'date-fns'


const today = () => {
    const todayObj = Object.create(project())
    const curDate = format(new Date())
}

export default today