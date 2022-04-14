import {createMachine, interpret} from "xstate";
import {Process} from "../Process";
import {viewService} from "../../View/View";
import {ViewEventType} from "../../View/events";


enum ShippingStates{
    IDLE= 'IDLE'
}

const shippingMachine = createMachine({
    id: Process.SHIPPING,
    initial: ShippingStates.IDLE,
    states: {
        [ShippingStates.IDLE]: {
            entry: [() => {
                viewService.send({type: ViewEventType.RETURN_AND_SHIPPING_SELECTED})
            }]
        }
    }
})

const shippingService = interpret(shippingMachine, { devTools: true })

export {shippingService}