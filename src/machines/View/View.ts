import {createMachine, interpret, MachineConfig} from "xstate";
import {Views} from "../../views/Views";
import {ViewEvent, ViewEventType} from "./events";

interface ViewContext{}

const viewMachineConfig: MachineConfig<ViewContext, any, ViewEvent> = {
    id: 'view',
    initial: Views.MENU,
    states: {
        [Views.MENU]: {},
        [Views.COLLECT]: {},
        [Views.RETURN_AND_SHIPPING]: {},
    },
    on: {
        [ViewEventType.MENU_SELECTED]: {
            target: [Views.MENU]
        },
        [ViewEventType.COLLECT_SELECTED]: {
            target: [Views.COLLECT]
        },
        [ViewEventType.RETURN_AND_SHIPPING_SELECTED]: {
            target: [Views.RETURN_AND_SHIPPING]
        },
    }
};

const viewMachineOptions = {}

const viewMachine = createMachine(viewMachineConfig, viewMachineOptions);

const viewService = interpret(viewMachine, { devTools: true });

viewService.start()

export {viewService}