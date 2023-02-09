import  { AccessoryPlugin, Controller, ControllerServiceMap, Service, Logger, API} from 'homebridge' ;

export  class  HomelantaLampAccessory  implements  AccessoryPlugin  {
    private informationService: Service;
    public lampService: Service;
    constructor(public log: Logger, public config: any, public api: API) {
        this.log.info("homelanta-lamp is running!");
        const informationService = new api.hap.Service.AccessoryInformation()
        informationService.setCharacteristic(api.hap.Characteristic.Manufacturer, "homelanta-lamp")
        .setCharacteristic(api.hap.Characteristic.Model, "Lamp")
        this.informationService  = informationService;

        //Déclaration du service de la lampe
        this.lampService = new api.hap.Service.Lightbulb("homelanta-lamp");
        this.lampService.getCharacteristic(api.hap.Characteristic.On)
        .onGet(this.getOnHandler.bind(this))
        .onSet(this.setOnHandler.bind(this));

         
    }

    async getOnHandler() {
        // Implémenter le code pour le  get de l'état de la lampe
        this.log.info('Getting switch state');
        const value = false;
        return value;
      }
      
      async setOnHandler(value: any) {
        // Implémenter le code pour le  set de l'état de la lampe
        this.log.info('Setting switch state to:', value);
      }
    getServices(): Service[] {
        return [
            this.informationService,
            this.lampService
        ];
    }
    getControllers?(): Controller<ControllerServiceMap>[] {
      return [];
    }
}