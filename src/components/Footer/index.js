import styles from './Footer.module.css'

import { ReactComponent as Trademark } from 'assets/trademark.svg'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Trademark />

            Desenvolvido por Alura.
        </footer>
    )
}

export default Footer