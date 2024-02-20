import project from "../project";

export default function history(){
    const historyObj = Object.create(project())
    historyObj.changeValue('History', 'You can see all your finished/deleted todos here')

    return historyObj
}