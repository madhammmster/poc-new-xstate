import {MainEventType} from "../../machines/Main/events";
import {useActor} from "@xstate/react";
import {mainService} from "../../machines/Main/Main";

function CollectView() {
    const [state, send] = useActor(mainService);

    return (
        <div>
            Collect View

            <button
                onClick={() => {
                    send({
                        type: MainEventType.EVENT_RECEIVED,
                        event: {
                            type: 'WORKING_SELECTED'
                        }
                    })
                }}
            >
                WORKING
            </button>

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

export {CollectView}