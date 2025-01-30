import styles from './PrimaryButton.module.css'

const PrimaryButton = ({children, size}) => {
    return (
        <button className={`${styles['primary-button']} ${styles[size]}`}>
            { children }
        </button>
    )
}

export default PrimaryButton