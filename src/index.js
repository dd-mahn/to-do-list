import './style/style.css'
import { setCurrentState } from './utils/state'
import renderLayout from './utils/render'
import inbox from './component/Default Project/inbox'

function ScreenController(){
    setCurrentState(inbox())
    renderLayout()
}

ScreenController()


