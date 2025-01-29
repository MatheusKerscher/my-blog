import { NavLink } from 'react-router-dom'

import styles from './LinkMenu.module.css'

const LinkMenu = ({children, to, pathName}) => {
    return (
        <NavLink 
            to={to}
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles['link--active'] : ""}
            `}
            end
        >
            {children}
        </NavLink>
    )
}

export default LinkMenu