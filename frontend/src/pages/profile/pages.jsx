import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import authServices from "../../services/auth"
import useOrderServices from "../../services/order"
import styles from '../profile/pages.module.css'
import { LuLogOut, LuTimer, LuCircleAlert, LuCircleCheckBig } from "react-icons/lu";


export default function Profile() {

    const { logout } = authServices()
    const { getUserOrders, orderLoading, refectOrders, ordersList } = useOrderServices()
    const navigate = useNavigate()
    const authData = JSON.parse(localStorage.getItem('auth'))


    useEffect(() => {

        if (!authData) {
            navigate('/auth')
        } else if (refectOrders) {
            getUserOrders(authData?.user?._id)
        }

    }, [authData, refectOrders])

    if (orderLoading) {
        return (<h1>Carregando...</h1>)
    }


    const handleLogout = () => {
        logout()
        navigate('/home')
    }

    console.log(ordersList)

    return (
        <div className={styles.pageContainer}>
            <div>
                <h1>{authData?.user?.fullname}</h1>
                <h3>{authData?.user?.email}</h3>

            </div>

            <button onClick={handleLogout}>Logout<LuLogOut /></button>

            {ordersList.length > 0 ?
                <div className={styles.ordersContainer}>
                    {ordersList.map((order => (
                        <div key={order._id} className={styles.orderContainer}>
                            {order.pickupStatus === 'pending' ? <p className={`${styles.pickupStatus} ${styles.pending}`}><LuTimer/>{order.pickupStatus}</p> : null}
                            {order.pickupStatus === 'complete' ? <p className={`${styles.pickupStatus} ${styles.completed}`}><LuCircleCheckBig />{order.pickupStatus}</p> : null}
                            {order.pickupStatus === 'canceled' ? <p className={`${styles.pickupStatus} ${styles.canceled}`}><LuCircleAlert />{order.pickupStatus}</p> : null}
                            <h3>{order.pickupTime}</h3>
                            {order.orderItems.map((item) => (
                                <div key={(item._id)}>
                                    <h4>{item.itemDetails[0]?.nome}</h4>
                                    <p>quantidade: {item.quantity}</p>
                                </div>
                            ))}
                        </div>
                    )))}
                </div>
                :
                <div>
                    Você ainda não tem ordens
                </div>
            }
        </div>
    )
}