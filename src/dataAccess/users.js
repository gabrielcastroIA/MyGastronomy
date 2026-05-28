import { Mongo } from "../database/mongo.js";
import { ObjectId } from "mongodb";
import crypto from "crypto";

const collectionName = 'users'

export default class UsersdataAccess {
    async getUsers() {
        const result = await Mongo.db
            .collection(collectionName)
            .find({})
            .toArray()

        console.log(result)
        return result;
    }

    async deleteUser(userId) {
        const result = await Mongo.db
            .collection(collectionName)
            .findOneAndDelete({ _id: new ObjectId(userId) })

        return result;
    }

    async updateUser(UserId, userData) {
        if (userData.password) {

            const salt = crypto.randomBytes(16)


            crypto.pbkdf2(userData.password, salt, 310000, 16, 'sha256', async (err, hashedPasswordBuffer) => {
                if (err) {
                    throw new error('Erro Durante a atualização da senha')

                }

                userData = { ...userData, password: hashedPasswordBuffer, salt }


                const result = await Mongo.db
                    .collection(collectionName)
                    .insertOne({
                        email: userData.email,
                        password: hashedPasswordBuffer,
                        salt: salt
                    })
            })


        } else {
            const result = await Mongo.db
                .collection(collectionName)
                .findOneAndUpdate(
                    { _id: new ObjectId(UserId) },
                    { $set: userData }
                )

            return result;
        }




    }
}