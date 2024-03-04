import project from "../project";

function history(){
    const history = Object.create(project())
    history.changeValue('History', 'You can see all your finished todos here')

    return history
}

const historyObj = history()
export default historyObj