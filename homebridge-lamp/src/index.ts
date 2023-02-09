import { API } from "homebridge";
import { HomelantaLampAccessory } from "./homelanta_lamp.accessory";

export default (api: API) => {
    api.registerAccessory("homelanta-lamp", HomelantaLampAccessory);
}
