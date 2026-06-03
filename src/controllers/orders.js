import OrdersDataAccess from '../dataAccess/orders.js'
import { ok, serverError } from '../helpers/httpResponse.js'

export default class OrdersControllers {
    constructor() {
        this.OrdersDataAccess = new OrdersDataAccess()
    }

    async getOrders() {
        try {
            const orders = await this.OrdersDataAccess.getOrders()

            return ok(orders)
        } catch (error) {
            return serverError(error)
        }
    }

        async getOrdersByUserId(userId) {
        try {
            const orders = await this.OrdersDataAccess.getOrdersByUserId(userId)

            return ok(orders)
        } catch (error) {
            return serverError(error)
        }
    }



    async addOrder(orderData) {
        try {
            const result = await this.OrdersDataAccess.addOrder(orderData)

            return ok(result)

        } catch (error) {
            return serverError(error)
        }
    }

    async deleteOrders(ordersId) {
        try {
            const result = await this.OrdersDataAccess.deleteOrders(ordersId)

            return ok(result)

        } catch (error) {
            return serverError(error)
        }
    }

    async updateOrder(ordersId, ordersData) {
        try {
            const result = await this.OrdersDataAccess.updateOrder(ordersId, ordersData)

            return ok(result)

        } catch (error) {
            return serverError(error)
        }
    }
}