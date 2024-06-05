import { Schema } from "mongoose";


const ResultSchema = new Schema({
    roundId: { type: Number, required: true },
    encryptedServerSeed: { iv: { type: String }, content: { type: String } },
    serverSeedHash: { type: String },
    clientSeeds: { type: Array, default: [] },
    mergeClientSeed: { type: String },
    mergeSeed: { type: String },
    finalHash: { type: String },
    time: { type: Date, default: new Date() },
});

export default ResultSchema;
