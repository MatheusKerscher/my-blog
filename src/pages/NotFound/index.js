import PrimaryButton from 'components/PrimaryButton'
import styles from './NotFound.module.css'

import error404Image from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles['not-found-container']}>
                <span className={styles['text-404']}>404</span>

                <h1 className={styles['not-found-title']}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles['not-found-paragraph']}>
                    Tem certeza de que era isso que você estava procurando?
                </p>

                <p className={styles['not-found-paragraph']}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div 
                    className={styles['not-found-button-container']}
                    onClick={() => navigate(-1)}
                >
                    <PrimaryButton size='lg'>
                        Voltar
                    </PrimaryButton>
                </div>

                <img
                    className={styles['not-found-dog-image']}
                    src={error404Image}
                    alt="Cachorro de óculos e vestido como humano"
                />
            </div>
            
            <div className={styles['not-found-blank-space']}></div>
        </>
    )
}

export default NotFound