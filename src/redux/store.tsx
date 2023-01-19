import { createStore, combineReducers} from 'redux';
import productSearchReducer from '../redux/reducers/productSearchReducer';


const rootReducer = combineReducers({
    productSearchReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
