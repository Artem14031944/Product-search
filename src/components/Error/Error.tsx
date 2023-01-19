import { FC } from 'react';
import icon_err from '../../assets/icon/error.svg';
import style from './Error.module.css';

interface Ierror {
    text: string;
}


const Error: FC<Ierror> = ({ text }) => {
  return (
    <div className={style.container}>
        <img alt="err" src={icon_err} className={style.img}/>
        <p className={style.text}>{text}</p>
    </div>
  )
};

export default Error;