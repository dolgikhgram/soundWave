import * as React from "react";
import style from './Button.module.css'

type ButtonPropsType = {
    children: React.ReactNode;
    size?: "small" | "medium" | "large";
    color: "primary" | "secondary" | "tertiary";
}

const widthSize = {
    "small": '153px',
    "medium": '400px',
    "large": '520px',
}

const heightSize = {
    "small": '96px',
    "medium": '67px',
    "large": '88px',
}

const Button: React.FC<ButtonPropsType> = ( {children, size='medium', color='primary'}) => {
    return (
        <div>
            <button
                style={{width:widthSize[size], height:heightSize[size]}}
                className={`${style.btnContainer} ${style[color]}`}>
                <div className={`${style.text} ${style[color]}`}>
                    {children}
                </div>
            </button>
        </div>
    );
};

export default Button;