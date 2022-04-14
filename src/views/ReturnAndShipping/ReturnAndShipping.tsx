import {useActor} from "@xstate/react";
import {mainService} from "../../machines/Main/Main";
import {MainEventType} from "../../machines/Main/events";
import {Process} from "../../machines/_processes/Process";

function ReturnAndShippingView() {

    const [state, send] = useActor(mainService);

    return (
        <div>
            Return and Shipping View
            <button
                onClick={() => {
                    send({
                        type: MainEventType.RESET,
                    })
                }}
            >
                RESET
            </button>
        </div>
    )
}

export {ReturnAndShippingView}