export default class RoundQuery {
    /**
     * @param {mongoose.Model} roundsRepository
     */
    constructor(roundsRepository: mongoose.Model, resultsRepository: mongoose.Model);
    roundsRepository: mongoose.Model;
    resultsRepository: mongoose.Model;
    convertSettlementResult(roundResult: any): void;
    convertResult(round: any): void;
    getList(limit: number, projections?: any): Promise<any>;
    getOne(
        id: any,
        projections?: {
            _id: boolean;
        }
    ): Promise<any>;
    getRoundPF(id: any): Promise<any>;
}
