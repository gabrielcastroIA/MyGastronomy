import PlatesDataAccess from '../dataAccess/plates.js'
import { ok, serverError } from '../helpers/httpResponse.js'

export default class PlatesControllers {
    constructor() {
        this.PlateDataAccess = new PlatesDataAccess()
    }

    async getPlates() {
        try {
            const plates = await this.PlateDataAccess.getPlates()

            // console.log(plates)


            return ok(plates)
        } catch (error) {
            return serverError(error)
        }
    }

    async getAvailablePlates() {
        try {
            const plates = await this.PlateDataAccess.getAvailablePlates()

            return ok(plates)

        } catch (error) {
            return serverError(error)
        }
    }

        async addPlate(plateData) {
        try {
            const result = await this.PlateDataAccess.addPlate(plateData)

            return ok(result)

        } catch (error) {
            return serverError(error)
        }
    }

    async deletePlates(platesId) {
        try {
            const result = await this.PlateDataAccess.deletePlates(platesId)

            return ok(result)

        } catch (error) {
            return serverError(error)
        }
    }

    async updatePlate(platesId, platesData) {
        try {
            const result = await this.PlateDataAccess.updatePlate(platesId, platesData)

            return ok(result)

        } catch (error) {
            return serverError(error)
        }
    }
}