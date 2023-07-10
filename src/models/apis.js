import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema(
    {
        Banda: { type: String, required: true},
        integrantes: { type: Number, required: true},
        musicaDoMomento: { type: String, required: true}
    }
)


const apis = mongoose.model('apis', apiSchema);

module.exports = apis;