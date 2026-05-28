import UsersdataAccess from "../dataAccess/users.js";
import { ok, serverError } from '../helpers/httpResponse.js'

export default class UsersControllers {
    constructor() {
        this.UsersdataAccess = new UsersdataAccess()
    }

    async getUsers(req, res) {
        try {
            const users = await this.UsersdataAccess.getUsers()

            // console.log(users)


            return ok(users)
        } catch (error) {
            return serverError(error)
        }
    }

    async deleteUser(userId) {
        try {
            const result = await this.UsersdataAccess.deleteUser(userId)

            return ok(result)

        } catch (error) {
            return serverError(error)
        }
    }

    async updateUser(UserId, userData) {
        try {
            const result = await this.UsersdataAccess.updateUser(UserId, userData)

            return ok(result)
            
        } catch (error) {
            return serverError(error)
        }
    }
}