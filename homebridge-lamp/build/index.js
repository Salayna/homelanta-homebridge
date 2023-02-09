"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homelanta_lamp_accessory_1 = require("./homelanta_lamp.accessory");
exports.default = (api) => {
    api.registerAccessory("homelanta-lamp", homelanta_lamp_accessory_1.HomelantaLampAccessory);
};
