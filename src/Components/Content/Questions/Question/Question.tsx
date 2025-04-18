import style from './Question.module.css'
import * as React from "react";

type QuestionPropsType = {
    id: number,
}

type QuestionsType = {
    [key: number]: string;
}

const questions: QuestionsType = {
    0 : 'Какие способы оплаты принимаете?',
    1 : 'Могу ли я отменить подписку в любое время?',
    2 : 'Есть ли бесплатный пробный период?',
    3 : 'Какое качество звука по сравнению с другими сервисами?',
    4 : 'Могу ли я поделиться своим аккаунтом с другими?',
    5 : 'Сколько песен я могу скачать для прослушивания онлайн?',
}

const answer: QuestionsType = {
    0 : 'Мы принимаем все основные кредитные карты, PayPal и Apple Pay. Для некоторых регионов мы также поддерживаем местные способы оплаты.',
    1 : 'Да, вы можете отменить подписку в любое время. Ваш доступ будет продолжаться до конца текущего платежного периода, и после этого с вас не будет взиматься плата.',
    2 : 'Абсолютно! Мы предлагаем 14-дневный бесплатный пробный период для всех новых пользователей. В течение этого периода вы можете опробовать все функции без каких-либо ограничений.',
    3 : 'Мы предлагаем высококачественный стриминг до 320 кбит/с для пользователей Премиум, что является одним из самых высоких в отрасли.',
    4 : 'Индивидуальные учетные записи предназначены только для личного использования. Семейный тариф позволяет иметь до 6 учетных записей по сниженной цене.',
    5 : 'Подписчики тарифов Премиум и Семейный могут загрузить до 10 000 песен для прослушивания офлайн на 5 устройствах.',
}

const Question : React.FC<QuestionPropsType> = ({id}) => {
    const [open, setOpen] = React.useState(false);
    const openQuestionHandler = () =>{
        setOpen((prev) => !prev);
    }
    return (
        <div>
            <div onClick={openQuestionHandler} className={style.containerQuestion}>
                <div className={style.containerTitle}>
                    <div className={style.title}>
                        {questions[id]}
                    </div>
                    <div>
                        {
                            open ?
                                <img  className={style.icon} src={'closeQuestion.svg'}/>
                                :
                                <img  className={style.icon} src={'openQuestion.svg'}/>
                        }
                    </div>
                </div>
                {
                    open ?
                        <div className={style.answer}>
                            {answer[id]}
                        </div>
                        : null
                }
            </div>
        </div>
    );
};

export default Question;