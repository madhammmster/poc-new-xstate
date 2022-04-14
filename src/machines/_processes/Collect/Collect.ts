import {createMachine, interpret} from "xstate";
import {Process} from "../Process";
import {viewService} from "../../View/View";
import {ViewEventType} from "../../View/events";

enum CollectStates {
    IDLE = 'IDLE',
    WORKING = 'WORKING'
}

const collectMachine = createMachine({
    id: Process.COLLECT,
    initial: CollectStates.IDLE,
    states: {
        [CollectStates.IDLE]: {
            entry: [() => {
                viewService.send({type: ViewEventType.COLLECT_SELECTED})
            }]
        },
        [CollectStates.WORKING]: {
        }
    },
    on: {
        'WORKING_SELECTED': {
            target: CollectStates.WORKING
        },
    }
})

const collectService = interpret(collectMachine, {devTools: true})

export {collectService}