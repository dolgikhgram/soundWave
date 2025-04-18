import style  from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={style.content}>
                <div className={style.soundWaveContainer}>
                    <div className={style.soundWave}>
                        <img src={'./headphone.svg'} alt={'headphone'}/>
                        <div className={style.soundWaveText}>
                            SoundWave
                        </div>
                    </div>
                    <div className={style.soundWaveSecondaryText}>
                        Доставляем музыку без границ слушателям по всему миру.
                    </div>
                    <img className={style.socialNetworks} src={'./socialNetworks.svg'}/>
                </div>
                <div className={style.QuickLinksContainer}>
                    <div className={style.QuickLinks}>
                        Быстрые ссылки
                    </div>
                    <div className={style.mainContainer}>
                        <div className={style.mainPoint}>
                            Главная
                        </div>
                        <div className={style.mainPoint}>
                            Возможности
                        </div>
                        <div className={style.mainPoint}>
                            Тарифы
                        </div>
                        <div className={style.mainPoint}>
                            Вопросы
                        </div>
                        <div className={style.mainPoint}>
                            Блог
                        </div>
                    </div>
                </div>
                <div className={style.supportContainer}>
                    <div className={style.support}>
                        Поддержка
                    </div>
                    <div className={style.mainContainer}>
                        <div className={style.mainPoint}>
                            Центр помощи
                        </div>
                        <div className={style.mainPoint}>
                            Связаться с нами
                        </div>
                        <div className={style.mainPoint}>
                            Условия использования
                        </div>
                        <div className={style.mainPoint}>
                            Политика конфиденциальности
                        </div>
                        <div className={style.mainPoint}>
                            Правовая информация
                        </div>
                    </div>
                </div>
                <div className={style.mailingContainer}>
                    <div className={style.mailing}>
                        Рассылка
                    </div>
                    <div className={style.mainContainer}>
                        <div className={style.subscription}>
                            Подпишитесь, чтобы получать обновления о новых функциях и релизах.
                        </div>
                        <div className={style.inputContainer}>
                            <input 
                                className={style.input}
                                placeholder="Введите email"
                            />
                            <div className={style.btnInput}>
                                <img className={style.btnInputIcon} src={'./tg.svg'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.line}></div>
            <div className={style.reviewsContainer}>
                <div className={style.reviewsText}>
                    © 2025 SoundWave Серенада. Все права защищены.
                </div>
                <div className={style.reviewsText}>
                    Способы оплаты:
                </div>
            </div>
        </div>
    );
};

export default Footer;