// import React from 'react';
import style from './Opportunities.module.css'

const Opportunities = () => {
    return (
        <div className={style.container}>
            <div className={style.textContainer}>
                <div className={style.mainTitle}>
                    Возможности, которые вам понравятся
                </div>
                <div className={style.secondaryTitleContainer}>
                    <div className={style.secondaryTitle}>
                        Узнайте, почему любители музыки выбирают SoundWave для
                    </div>
                    <div className={style.secondaryTitle}>
                        своих музыкальных впечатлений
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.row}>
                    <div className={style.block}>
                        <img className={style.img} src={'./headphone.svg'} alt="headphone"/>
                        <div className={style.comment}>
                            <div className={style.mainTitleComment}>
                                Высокое качество звука
                            </div>
                            <div className={style.titleComment}>
                                Наслаждайтесь звуком студийного качества с нашим HD аудио-стримингом
                            </div>
                        </div>
                    </div>
                    <div className={style.block}>
                        <img className={style.img} src={'./time.svg'} alt="time"/>
                        <div className={style.comment}>
                            <div className={style.mainTitleComment}>
                                Без рекламы
                            </div>
                            <div className={style.titleComment}>
                                Слушайте музыку без перерывов с нашим премиум-сервисом без рекламы                            </div>
                        </div>
                    </div>
                    <div className={style.block}>
                        <img className={style.img} src={'svgrepo.svg'} alt="VectorOpportunities"/>
                        <div className={style.comment}>
                            <div className={style.mainTitleComment}>
                                Офлайн-прослушивание
                            </div>
                            <div className={style.titleComment}>
                                Загружайте любимые треки для прослушивания без доступа к интернету                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.block}>
                        <img className={style.img} src={'./earth.svg'} alt="earth"/>
                        <div className={style.comment}>
                            <div className={style.mainTitleComment}>
                                Мировая коллекция
                            </div>
                            <div className={style.titleComment}>
                                Доступ к музыке со всего мира на одной платформе
                            </div>
                        </div>
                    </div>
                    <div className={style.block}>
                        <img className={style.img} src={'./music-note.svg'} alt="headphone"/>
                        <div className={style.comment}>
                            <div className={style.mainTitleComment}>
                                Персональные плейлисты
                            </div>
                            <div className={style.titleComment}>
                                Получайте индивидуальные плейлисты на основе ваших музыкальных предпочтений
                            </div>
                        </div>
                    </div>
                    <div className={style.block}>
                        <img className={style.img} src={'./radio-station.svg'} alt="radio-station"/>
                        <div className={style.comment}>
                            <div className={style.mainTitleComment}>
                                Радиостанции
                            </div>
                            <div className={style.titleComment}>
                                Доступ к тысячам радиостанций со всего мира
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Opportunities;