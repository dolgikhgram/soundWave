import styles from './Header.module.css'
import Button from "../Button/Button.tsx";


const Header = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={'SoundWave.svg'} alt="SoundWave" />
            <div className={styles.labelMenu}>
                <div className={styles.label}>Возможности</div>
                <div className={styles.label}>Тарифы</div>
                <div className={styles.label}>Вопросы</div>
            </div>
            <Button size={'small'}>
                Войти
            </Button>
        </div>
    );
};

export default Header;