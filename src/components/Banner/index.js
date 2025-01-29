import styles from "./Banner.module.css";
import colorfulCircle from 'assets/colorful-circle.png'
import myPicture from 'assets/my-picture.png'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div>
        <h1 className={styles.title}>Olá, Mundo!</h1>

        <p className={styles.paragraph}>
          Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de
          Front-end da Alura. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo :)
        </p>
      </div>

      <div className={styles.images}>
        <img
          className={styles['colorful-circle']}
          src={colorfulCircle}
          aria-hidden={true}
          alt='Circulo colorido'
        />

        <img
          className={styles['my-picture']}
          src={myPicture}
          alt="Foto do Antônio Evaldo sorrindo"
        />
      </div>
    </div>
  );
};

export default Banner;
