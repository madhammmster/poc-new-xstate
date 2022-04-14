import {EventObject} from "xstate";
import {Process} from "../_processes/Process";

export enum MainEventType {
    PROCESS_SELECTED = 'PROCESS_SELECTED',
    PROCESS_UNSELECTED = 'PROCESS_UNSELECTED',
    RESET = 'RESET',
    EVENT_RECEIVED = 'EVENT_RECEIVED'
}

interface ProcessSelectedEvent extends EventObject {
    type: MainEventType.PROCESS_SELECTED,
    process: Process
}

interface ProcessUnselectedEvent extends EventObject {
    type: MainEventType.PROCESS_UNSELECTED
}

interface ResetEvent extends EventObject {
    type: MainEventType.RESET
}


interface EventReceivedEvent extends EventObject {
    type: MainEventType.EVENT_RECEIVED,
    event: any
}


export type MainEvent = ProcessSelectedEvent | ProcessUnselectedEvent | EventReceivedEvent | ResetEvent;