import styles from '../../pages/home/pages.module.css'
import Dessert from '../../pages/home/homepage/dessert'
import NaturalfFood from '../../pages/home/homepage/naturalFood'
import Vegetable from '../../pages/home/homepage/vegetable'
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa'



export default function Home() {
    return (
        <div className={styles.pageContainer}>
            <section>
                <h1>Bem vindo ao My Gastonomy.</h1>
                <p>Sistema de pedidos de restaurantes e mesas para melhorar o dia a dia de trabalho colinario!</p>
            </section>
            <section className={styles.foodSection}>
                <div>
                    <i><Dessert /></i>
                    <h4>Excelência no Cotidiano</h4>
                    <p>Descubra nossa seleção diária de pratos únicos para trazer um toque fresco e refinado à sua mesa</p>
                </div>
                <div>
                    <i><NaturalfFood /></i>
                    <h4>Ingredientes Naturais</h4>
                    <p>Utilizamos apenas ingredientes frescos e naturais, selecionados diariamente para garantir o melhor sabor em cada prato.</p>
                </div>
                <div>
                    <i><Vegetable /></i>
                    <h4>Opções Vegetarianas</h4>
                    <p>Pratos vegetarianos elaborados com criatividade e cuidado, perfeitos para uma alimentação saudável e saborosa.</p>
                </div>
            </section>
            <section className={styles.contactSection}>
                <h1>Fique por Dentro!</h1>
                <p>
                    Entre no mundo da Minha Gastronomia seguindo-nos nas redes sociais.
                    Você estará sempre atualizado sobre nossas criações culinárias, eventos especiais
                    e surpresas gastronômicas. Não perca nenhum detalhe!
                </p>
                <div className={styles.socialButtonsContainer}>
                    <button className={styles.socialButton}><FaInstagram /> Instagram</button>
                    <button className={styles.socialButton}><FaFacebookSquare /> Facebook</button>
                    <button className={styles.socialButton}><FaWhatsapp /> WhatsApp</button>
                    <button className={styles.socialButton}><FaMapMarkerAlt /> Localização</button>
                </div>
            </section>
        </div>
    )
}