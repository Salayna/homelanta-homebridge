"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomelantaLampAccessory = void 0;
class HomelantaLampAccessory {
    constructor(log, config, api) {
        this.log = log;
        this.config = config;
        this.api = api;
        this.log.info("homelanta-lamp is running!");
        const informationService = new api.hap.Service.AccessoryInformation();
        informationService.setCharacteristic(api.hap.Characteristic.Manufacturer, "homelanta-lamp")
            .setCharacteristic(api.hap.Characteristic.Model, "Lamp");
        this.informationService = informationService;
        //Déclaration du service de la lampe
        this.lampService = new api.hap.Service.Lightbulb("homelanta-lamp");
        this.lampService.getCharacteristic(api.hap.Characteristic.On)
            .onGet(this.getOnHandler.bind(this))
            .onSet(this.setOnHandler.bind(this));
    }
    getOnHandler() {
        return __awaiter(this, void 0, void 0, function* () {
            // Implémenter le code pour le  get de l'état de la lampe
            this.log.info('Getting switch state');
            const value = false;
            return value;
        });
    }
    setOnHandler(value) {
        return __awaiter(this, void 0, void 0, function* () {
            // Implémenter le code pour le  set de l'état de la lampe
            this.log.info('Setting switch state to:', value);
        });
    }
    getServices() {
        return [
            this.informationService,
            this.lampService
        ];
    }
    getControllers() {
        return [];
    }
}
exports.HomelantaLampAccessory = HomelantaLampAccessory;
