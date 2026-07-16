import usePlatesServices from "../../services/plates"
import { useEffect, useState } from "react"
import Loading from "../loading/pages"
import PlateCard from "../../components/plateCard/plateCard"
import styles from './pages.module.css'
import PlatePopup from "../../components/platePopup/platePopup"

export default function Plates() {

    const { getAvailablePlates, platesList, platesLoading, refectPlates } = usePlatesServices()
    const [plateSelected, setPlateSelected] = useState(null)

    useEffect(() => {
        if (refectPlates) {
            getAvailablePlates()
        }

    }, [refectPlates])

    const hendlePlateSelected = (plate) => {
        setPlateSelected(plate)
    }

    const handleClosePopup = () => {
        setPlateSelected(null)
    }

    const handleAddToCart = (itemToAdd) => {
        console.log(itemToAdd)
    }

    if (platesLoading) {
        return (<Loading />)
    }

    console.log(platesList)

    return (
        <>
            <div>
                {platesList.map((plate) => (
                    <div key={plate._id} className={styles.cardContainer} onClick={() => { hendlePlateSelected(plate) }} >

                        <PlateCard plateData={plate} />
                    </div>
                ))}
            </div>
            {plateSelected && (
                <PlatePopup
                    plateData={plateSelected}
                    onClose={handleClosePopup}
                    onAddToCart={handleAddToCart}
                />
            )}
        </>
    )
}