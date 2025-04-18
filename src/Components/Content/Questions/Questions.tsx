import style from "./Questions.module.css";
import Question from "./Question/Question.tsx";

const questionsID =  [0,1,2,3,4,5]

const Questions = () => {
    return (
        <div>
            <div className={style.titleContainer}>
                <div  className={style.mainTitle}>
                    Часто задаваемые вопросы
                </div>
                <div className={style.secondaryTitle}>
                    Есть вопросы? У нас есть ответы на самые распространенные вопросы.
                </div>
                <div className={style.questionsContainer}>
                    {
                        questionsID.map((id)=>{
                            return (
                                <div className={style.questionContainer}>
                                    <Question id={id}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Questions;