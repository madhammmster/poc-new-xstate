import {EventObject} from "xstate";

export enum ViewEventType {
    MENU_SELECTED = 'MENU_SELECTED',
    COLLECT_SELECTED = 'COLLECT_SELECTED',
    RETURN_AND_SHIPPING_SELECTED = 'RETURN_AND_SHIPPING_SELECTED',
}

interface MenuSelectedEvent extends EventObject {
    type: ViewEventType.MENU_SELECTED
}

interface CollectSelectedEvent extends EventObject {
    type: ViewEventType.COLLECT_SELECTED
}

interface ReturnAndShippingSelectedEvent extends EventObject {
    type: ViewEventType.RETURN_AND_SHIPPING_SELECTED
}


export type ViewEvent = MenuSelectedEvent | CollectSelectedEvent | ReturnAndShippingSelectedEvent;