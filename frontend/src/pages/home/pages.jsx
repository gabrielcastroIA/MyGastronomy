import styles from './pages.module.css'
import Dessert from '../../../public/imgs/homepage/dessert'
import NaturalfFood from '../../../public/imgs/homepage/naturalFood'
import Vegetable from '../../../public/imgs/homepage/vegetable'



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
        </div>
    )
}