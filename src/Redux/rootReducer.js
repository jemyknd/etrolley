import { combineReducers } from 'redux';
import {HeaderReducer} from './Actions/HeaderComponts/LargeScreen/HeaderReducer';
import {homeCategoryReducer} from './Actions/HomeContent/HomeCategory/HomeCategoryreducer'



//combines all reducers so that they can be put in the store as rootReducer
const rootReducer = combineReducers({
    header: HeaderReducer,
    homeCategory: homeCategoryReducer
    // men: menReducer
});

export default rootReducer;