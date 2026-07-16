import { useState } from "react"


export default function usePlatesServices() {

    const [platesLoading, setplatesLoading] = useState(false)
    const [refectPlates, setRefectPlates] = useState(true)
    const [platesList, setPlatesList ] = useState([])

    const url = 'http://localhost:3000/plates'


    const getAvailablePlates = (userId) => {

        setplatesLoading(true)

        fetch(`${url}/available`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-control-Allow-Origin': '*'
            },
        })
            .then((response) => response.json())
            .then((result) => {

                if(result.success){
                    setPlatesList(result.body)
                } else {
                    console.log(result)
                }

                console.log(result)

            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setplatesLoading(false)
                setRefectPlates(false)
            })
    }

    return {
        getAvailablePlates,
        platesLoading,
        refectPlates,
        platesList
    }
}