import {useActor, useMachine} from "@xstate/react";
import {viewService} from "../machines/View/View";
import {CollectView} from "./Collect/Collect";
import {ReturnAndShippingView} from "./ReturnAndShipping/ReturnAndShipping";
import {Views} from "./Views";
import {MenuView} from "./Menu/Menu";

function AppView() {
    const [state] = useActor(viewService);

    if (state.matches(Views.MENU)) {
        return <MenuView/>
    }

    if (state.matches(Views.COLLECT)) {
        return <CollectView/>
    }

    if (state.matches(Views.RETURN_AND_SHIPPING)) {
        return <ReturnAndShippingView />
    }

    return <></>
}

export {
    AppView
}