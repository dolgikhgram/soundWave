import style from './MainMenu.module.css'
import Button from "../../Button/Button.tsx";


const MainMenu = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.textContent}>
                    <div className={style.mainTitle}>
                        Музыка без
                        границ
                    </div>
                    <div className={style.secondaryTitle}>
                        Ощутите музыку без ограничений. Слушайте любимые песни в любое время и в любом месте с нашим
                        премиум-сервисом.
                    </div>
                    <div className={style.btnContainer}>
                        <Button size={'large'}>
                            Попробовать бесплатно
                        </Button>
                        <Button size={'large'}>
                            Посмотреть тарифы
                        </Button>
                    </div>
                    <div className={style.userContainer}>
                        <img className={style.img} src={'./UsersMainMenu.svg'} alt={'users'}/>
                        <div className={style.overPeople}>
                            К нам присоединились
                            <div className={style.over100000}>
                                более 100,000
                            </div>
                            любителей музыки
                        </div>
                    </div>
                </div>
                <img className={style.OrangeMen} src={'./OrangeMen.png'}/>
            </div>
        </div>
    );
};

export default MainMenu;