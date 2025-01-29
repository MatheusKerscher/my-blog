import LinkMenu from './LinkMenu'
import styles from './Menu.module.css'

const Menu = () => {
    return(
        <header>
            <nav className={styles.navigation}>
                <LinkMenu 
                    to='/' 
                >
                    Início
                </LinkMenu>

                <LinkMenu 
                    to='/about-me' 
                >
                    Sobre mim
                </LinkMenu>
            </nav>
        </header>
    )
}

export default Menu