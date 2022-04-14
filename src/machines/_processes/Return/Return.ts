import {createMachine, interpret} from "xstate";
import {Process} from "../Process";
import {viewService} from "../../View/View";
import {ViewEventType} from "../../View/events";


enum ReturnStates{
    IDLE= 'IDLE'
}

const returnMachine = createMachine({
    id: Process.RETURN,
    initial: ReturnStates.IDLE,
    states: {
        [ReturnStates.IDLE]: {
            entry: [() => {
                viewService.send({type: ViewEventType.RETURN_AND_SHIPPING_SELECTED})
            }]
        }
    }
})

const returnService = interpret(returnMachine, { devTools: true })

export {returnService}