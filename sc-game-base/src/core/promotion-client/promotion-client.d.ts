export default class PromotionClient {
    constructor({ appConfigs }: { appConfigs: {
        promotionApiSettings: any
    } });

    instance(): any;
    isAvailable(): boolean;
}
