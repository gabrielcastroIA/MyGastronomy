import styles from '../footer/footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <img src="/imgs/logo.png" alt="logo" />
            <div>
                <h2> Links Importantes </h2>
                <div className={styles.linksContainer}>
                    <Link className={styles.link} to={'/'}>HomePage</Link>
                    <Link className={styles.link} to={'/plates'}>Pratos</Link>
                    <Link className={styles.link} to={'/profile'}>Pratos</Link>
                </div>
            </div>
            <div>
                Desenvolvido por Gabriel Castro
                <a href="" target='_blank' className={styles.link}>Veja meus projetos!</a>
            </div>
        </footer>
    )
}