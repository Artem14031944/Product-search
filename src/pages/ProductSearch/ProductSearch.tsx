import { FC } from 'react'
import Search from '../../components/Search/Search';
import Table from '../../components/Table/Table';
import style from './ProductSearch.module.css';

const ProductSearch: FC = () => {
  return (
    <div className={style.container}>
      <Search/>
      <Table/>
    </div>
  )
};

export default ProductSearch;