import {assign} from "xstate";
import {MainContext} from "./Main";
import {MainEvent, MainEventType} from "./events";
import {ProcessMap} from "../_processes/ProcessMap";

const selectProcess = assign<MainContext, MainEvent>({
    currentProcess: (ctx, event) => {
        if (event.type !== MainEventType.PROCESS_SELECTED) {
            return ctx.currentProcess
        }

        ProcessMap[event.process].start();

        return event.process;
    }
});

const unselectProcess = assign<MainContext, MainEvent>({
    currentProcess: (ctx, event) => {
        if (event.type !== MainEventType.PROCESS_UNSELECTED) {
            return ctx.currentProcess
        }

        ctx.currentProcess && ProcessMap[ctx.currentProcess].stop();

        return undefined;
    }
})


const sendEvent = (ctx: MainContext, event: MainEvent) => {
    if (event.type !== MainEventType.EVENT_RECEIVED) {
        return ctx.currentProcess
    }

    ctx.currentProcess && ProcessMap[ctx.currentProcess].send(event.event);

    return undefined;
}


export {selectProcess, unselectProcess, sendEvent}