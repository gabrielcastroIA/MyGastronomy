import styles from './navbar.module.css'
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { Drawer } from '@mui/material'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarItems}>
                <img className={styles.logo} src="/imgs/logo.png" alt="Logo" />
                <div className={styles.navbarLinksContainer}>
                    <Link to="/" className={styles.navbarlink}>Home</Link>
                    <Link to="/plates" className={styles.navbarlink}>Pratos</Link>
                    <Link to="/cart" className={styles.navbarlink}><LuShoppingCart /></Link>
                    <Link to="/profile" className={styles.navbarlink}><FaRegUserCircle /></Link>
                </div>
            </div>


            <div className={styles.mobileNavbarItems}>
                <img className={styles.logo} src="/imgs/logo.png" alt="Logo" />
                <div className={styles.mobileNavbarBtns}>
                    <Link to="/cart" className={styles.navbarlink}><LuShoppingCart /></Link>
                    <LuMenu className={styles.navbarlink} onClick={handleOpenMenu} />

                </div>
            </div>

            <Drawer
                anchor='right'
                open={openMenu}
                onClose={handleOpenMenu}

            >
                <div className={styles.drawer}>
                    <Link to="/" className={styles.navbarlink} onClick={handleOpenMenu}>Home</Link>
                    <Link to="/plates" className={styles.navbarlink} onClick={handleOpenMenu}>Pratos</Link>
                    <Link to="/profile" className={styles.navbarlink} onClick={handleOpenMenu} >Perfil</Link>
                </div>
            </Drawer>

        </nav>
    )
}