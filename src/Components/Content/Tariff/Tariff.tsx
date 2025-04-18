import style from './Tariff.module.css'
import Button from "../../Button/Button.tsx";
import { useState } from 'react';

type ButtonColor = 'primary' | 'secondary' | 'tertiary';

const Tariff = () => {
    const [selectedTariff, setSelectedTariff] = useState('premium');

    const getButtonProps = (tariffType: string) => {
        const isSelected = selectedTariff === tariffType;
        return {
            color: (isSelected ? 'primary' : 'tertiary') as ButtonColor,
            text: isSelected ? 'Попробовать бесплатно' : 'Начать'
        };
    };

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.textContainer}>
                    <div className={style.mainContent}>
                        Выберите свой идеальный тариф
                    </div>
                    <div className={style.secondaryTitleContainer}>
                        <div className={style.secondaryTitle}>
                            Подберите тариф, который подходит именно вам. Все тарифы
                        </div>
                        <div className={style.secondaryTitle}>
                            включают 14-дневный бесплатный период.
                        </div>
                    </div>
                </div>
                <div className={style.tarifsContainer}>
                    <div className={style.tariffs}>
                        <div className={`${style.tariffs1} ${selectedTariff === 'basic' ? style.selected : ''}`} 
                             onMouseEnter={() => setSelectedTariff('basic')}
                             onMouseLeave={() => setSelectedTariff('premium')}>
                            <div className={style.headerTarifs1}>
                                <div className={style.mainTitleHeader}>
                                    Базовый
                                </div>
                                <div className={style.priceContainer}>
                                    <div className={style.price}>
                                        399 ₽
                                    </div>
                                    <div className={style.period}>
                                        в месяц
                                    </div>
                                </div>
                                <div className={style.text}>
                                    Идеально для случайных слушателей
                                </div>
                            </div>
                            <div className={style.advantages}>
                                <div className={style.advantage}>
                                    <img src={'./advantage.svg'} className={style.advantageIcon}/>
                                    <div className={style.advantageText}>
                                        Музыка без рекламы
                                    </div>
                                </div>
                                <div className={style.advantage}>
                                    <img src={'./advantage.svg'} className={style.advantageIcon}/>
                                    <div className={style.advantageText}>
                                        Стандартное качество звука
                                    </div>
                                </div>
                                <div className={style.advantage}>
                                    <img src={'./advantage.svg'} className={style.advantageIcon}/>
                                    <div className={style.advantageText}>
                                        Прослушивание на мобильных устройствах и ПК
                                    </div>
                                </div>
                                <div className={style.advantage}>
                                    <img src={'./advantage.svg'} className={style.advantageIcon}/>
                                    <div className={style.advantageText}>
                                        Базовые персонализированные плейлисты
                                    </div>
                                </div>
                            </div>
                            <div className={style.btn}>
                                <Button size={'medium'} color={getButtonProps('basic').color}>
                                    {getButtonProps('basic').text}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={style.tariffs}>
                        <div className={`${style.tariffs1} ${selectedTariff === 'premium' ? style.selected : ''}`}
                             onMouseEnter={() => setSelectedTariff('premium')}
                             onMouseLeave={() => setSelectedTariff('premium')}>
                            <div className={style.headerTarifs2}>
                                <div className={style.mainTitleHeader}>
                                    Премиум
                                </div>
                                <div className={style.priceContainer}>
                                    <div className={style.price}>
                                        699 ₽
                                    </div>
                                    <div className={style.period}>
                                        в месяц
                                    </div>
                                </div>
                                <div className={style.text}>
                                    Для настоящих ценителей музыки
                                </div>
                            </div>
                            <div className={style.advantages}>
                                <div className={style.advantage}>
                                    <img src={'./advantage.svg'} className={style.advantageIcon}/>
                                    <div className={style.advantageText}>
                                        Всё, что в Базовом
                                    </div>
                                </div>
                                <div className={style.advantage}>
                                    <img src={'./advantage.svg'} className={style.advantageIcon}/>
                                    <div className={style.advantageText}>
                                        HD качество звука
                                    </div>
                                </div>
                                <div className={style.advantage}>
                                    <img src={'./advantage.svg'} className={style.advantageIcon}/>
                                    <div className={style.advantageText}>
                                        Загрузка треков офлайн
                                    </div>
                                </div>
                                <div className={style.advantage}>
                                    <img src={'./advantage.svg'} className={style.advantageIcon}/>
                                    <div className={style.advantageText}>
                                        Расширенные персонализированные плейлисты
                                    </div>
                                </div>
                                <div className={style.advantage}>
                                    <img src={'./advantage.svg'} className={style.advantageIcon}/>
                                    <div className={style.advantageText}>
                                        Прослушивание на всех устройствах
                                    </div>
                                </div>
                            </div>
                            <div className={style.btn}>
                                <Button size={'medium'} color={getButtonProps('premium').color}>
                                    {getButtonProps('premium').text}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={style.tariffs}>
                        <div className={`${style.tariffs1} ${selectedTariff === 'family' ? style.selected : ''}`}
                             onMouseEnter={() => setSelectedTariff('family')}
                             onMouseLeave={() => setSelectedTariff('premium')}>
                            <div className={style.headerTarifs3}>
                                <div className={style.mainTitleHeader}>
                                    Семейный
                                </div>
                                <div className={style.priceContainer}>
                                    <div className={style.price}>
                                        999 ₽
                                    </div>
                                    <div className={style.period}>
                                        в месяц
                                    </div>
                                </div>
                                <div className={style.text}>
                                    Делитесь с близкими
                                </div>
                            </div>
                            <div className={style.advantages}>
                                <div className={style.advantage}>
                                    <img src={'./advantage.svg'} className={style.advantageIcon}/>
                                    <div className={style.advantageText}>
                                        Всё, что в Премиум
                                    </div>
                                </div>
                                <div className={style.advantage}>
                                    <img src={'./advantage.svg'} className={style.advantageIcon}/>
                                    <div className={style.advantageText}>
                                        До 6 аккаунтов
                                    </div>
                                </div>
                                <div className={style.advantage}>
                                    <img src={'./advantage.svg'} className={style.advantageIcon}/>
                                    <div className={style.advantageText}>
                                        Семейные микс-плейлисты
                                    </div>
                                </div>
                                <div className={style.advantage}>
                                    <img src={'./advantage.svg'} className={style.advantageIcon}/>
                                    <div className={style.advantageText}>
                                        Родительский контроль
                                    </div>
                                </div>
                                <div className={style.advantage}>
                                    <img src={'./advantage.svg'} className={style.advantageIcon}/>
                                    <div className={style.advantageText}>
                                        Общий платеж
                                    </div>
                                </div>
                            </div>
                            <div className={style.btn}>
                                <Button size={'medium'} color={getButtonProps('family').color}>
                                    {getButtonProps('family').text}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tariff;