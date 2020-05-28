import { combineReducers } from 'redux';
import {HeaderReducer} from './Actions/HeaderComponts/LargeScreen/HeaderReducer';
import {homeCategoryReducer} from './Actions/HomeContent/HomeCategory/HomeCategoryreducer';
import {HomeProductReducer} from './Actions/HomeContent/HomeProducts/HomeProductReducer'



//combines all reducers so that they can be put in the store as rootReducer
const rootReducer = combineReducers({
    header: HeaderReducer,
    homeCategory: homeCategoryReducer,
    homeProducts: HomeProductReducer
});

export default rootReducer;