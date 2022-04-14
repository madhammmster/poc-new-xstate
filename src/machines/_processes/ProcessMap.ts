import {collectService} from "./Collect/Collect";
import {returnService} from "./Return/Return";
import {shippingService} from "./Shipping/Shipping";
import {Process} from "./Process";

const ProcessMap= {
    [Process.COLLECT] : collectService,
    [Process.RETURN] : returnService,
    [Process.SHIPPING] : shippingService,
}


export {ProcessMap}