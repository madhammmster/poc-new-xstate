import {useActor} from "@xstate/react";
import {mainService} from "../../machines/Main/Main";
import {MainEventType} from "../../machines/Main/events";
import {Process} from "../../machines/_processes/Process";

function MenuView() {
    const [state, send] = useActor(mainService);

    return (
        <div>
            <button
                onClick={() => {
                    send({
                        type: MainEventType.PROCESS_SELECTED,
                        process: Process.COLLECT
                    })
                }}
            >
                Odbieram
            </button>

            <button
                onClick={() => {
                    send({
                        type: MainEventType.PROCESS_SELECTED,
                        process: Process.SHIPPING
                    })
                }}
            >
                Wysyłam
            </button>

            <button
                onClick={() => {
                    send({
                        type: MainEventType.PROCESS_SELECTED,
                        process: Process.RETURN
                    })
                }}
            >
                Zwracam
            </button>
        </div>
    )
}

export {MenuView}