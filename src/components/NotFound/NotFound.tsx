import { FC } from 'react';
import style from './NotFound.module.css';

const NotFound: FC = () => (
    <div className={style.container}>
        <h2 className={style.title}>Не найдено</h2>
    </div>
);

export default NotFound;