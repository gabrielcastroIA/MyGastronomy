import { useState } from "react"


export default function useOrderServices() {

    const [orderLoading, setOrderLoading] = useState(false)
    const [refectOrders, setRefectOrders] = useState(true)
    const [ordersList, setOrdersList ] = useState([])

    const url = 'http://localhost:3000/orders'


    const getUserOrders = (userId) => {

        setOrderLoading(true)

        fetch(`${url}/userorders/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin': '*'
            },
        })
            .then((response) => response.json())
            .then((result) => {

                if(result.success){
                    setOrdersList(result.body)
                } else {
                    console.log(result)
                }

                console.log(result)

            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setOrderLoading(false)
                setRefectOrders(false)
            })
    }

    return {
        getUserOrders,
        orderLoading,
        refectOrders,
        ordersList
    }
}