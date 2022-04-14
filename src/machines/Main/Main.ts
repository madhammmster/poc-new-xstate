import {createMachine, interpret, MachineConfig, MachineOptions} from "xstate";
import {Process} from "../_processes/Process";
import {MainEvent, MainEventType} from "./events";
import {selectProcess, unselectProcess, sendEvent} from "./actions";
import {viewService} from "../View/View";
import {ViewEventType} from "../View/events";

enum MainStates {
    IDLE = 'IDLE',
    IN_PROCESS = 'IN_PROCESS'
}

export interface MainContext {
    currentProcess?: Process;
}

const mainMachineConfig: MachineConfig<MainContext, never, MainEvent> = {
    id: 'main',
    initial: MainStates.IDLE,
    context: {
        currentProcess: undefined
    },
    states: {
        [MainStates.IDLE]: {},
        [MainStates.IN_PROCESS]: {},
    },
    on: {
        [MainEventType.PROCESS_SELECTED]: {
            actions: ['selectProcess'],
            target: MainStates.IN_PROCESS
        },
        [MainEventType.PROCESS_UNSELECTED]: {
            actions: ['unselectProcess'],
            target: MainStates.IDLE
        },
        [MainEventType.EVENT_RECEIVED]: {
            actions: ['sendEvent']
        },
        [MainEventType.RESET]: {
            actions: [() => {
                viewService.send({type: ViewEventType.MENU_SELECTED})
            }, 'unselectProcess'],
            target: MainStates.IDLE
        }
    }
}

const mainMachineOptions: Partial<MachineOptions<MainContext, MainEvent>> = {
    actions: {
        selectProcess,
        unselectProcess,
        sendEvent
    }
}

const mainMachine = createMachine(mainMachineConfig, mainMachineOptions);

const mainService = interpret(mainMachine, {devTools: true})

mainService.start()

export {mainService}