import { FC, useState, useEffect, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { initialState } from '../../initialState';
import { getDataAC } from '../../redux/reducers/productSearchReducer';
import Error from '../Error/Error';
import axios from 'axios';
import style from './Search.module.css';

const Search: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const bearer = process.env.REACT_APP_BEARER || '';

  const onChange = (e: FormEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  const getData = () => {
    axios.post('https://germsp.ru/test-search-products', 
    {searchArticles : value.trim() ? value?.split('\n') : initialState},
    {headers: { Authorization: bearer }})
    .then(({ data }) => {
      if(error) {
        setError(false);
      }
      dispatch(getDataAC(data))
    })
    .catch(err => {
      console.log(err);
      setError(true);
    })
  };


  useEffect(() => {
    getData();
  }, [error]);

  return (
    <div className={style.container}>
      <h3 className={style.title}>Товары</h3>
      {error && <Error text="Внутренняя ошибка сервера. Попробуйте снова."/>}
      <textarea 
        className={style.field}
        placeholder="Для поиска введите один или несколько артукулов в столбик"
        value={value}
        onChange={onChange}
      />
      <button 
        className={style.button}
        onClick={getData}
      >
        Поиск
      </button>
    </div>
  )
};

export default Search;