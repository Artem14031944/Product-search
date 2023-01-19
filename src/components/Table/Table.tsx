import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Iitem } from '../../redux/types/types';
import NotFound from '../NotFound/NotFound';
import style from './Table.module.css';


const Table: FC = () => {
  const { data } = useSelector((data: RootState) => data.productSearchReducer);
  return (
    <>
      {data.length ? 
      <div className={style.container}> 
        <table>
          <thead className={style.head}>
            <tr>
              <th>№</th>
              <th>ID</th>
              <th>АРТИКУЛ</th>
              <th>НАЗВАНИЕ</th>
              <th>БРЕНД</th>
              <th>ЦЕНА, RUB</th>
              <th>КОЛИЧЕСТВО</th>
            </tr>
          </thead>
          <tbody className={style.body}>
            {data?.map((item: Iitem, index: number) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.brand.id}</td>
                <td>{item.article}</td>
                <td>{item.name}</td>
                <td>{item.brand.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
           ))}
          </tbody>
        </table> 
      </div>
      : <NotFound/>}
    </>
  )
};

export default Table;