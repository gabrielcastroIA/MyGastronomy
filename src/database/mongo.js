import { MongoClient } from 'mongodb';

export const Mongo = {
    async connect({ mongoConnectrionString, mongoDbName }) {
        try {
            const client = new MongoClient(mongoConnectrionString)

            await client.connect()

            const db = client.db(mongoDbName)

            this.client = client
            this.db = db

            return 'Conexão com o MongoDB estabelecida com sucesso!'


        } catch (error) {
            return { text: 'Erro durante a conexão com o MongoDB', err: error }
        }
    }

}