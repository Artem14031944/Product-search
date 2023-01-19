import { FC } from 'react';
import ProductSearch from '../src/pages/ProductSearch/ProductSearch';
import style from  './App.module.css';

const App: FC = () => {
  return (
    <div className={style.wrapper}>
      <ProductSearch/>
    </div>
  );
}

export default App;
