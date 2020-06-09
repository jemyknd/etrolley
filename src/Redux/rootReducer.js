import { combineReducers } from 'redux';
import {HeaderReducer} from './Actions/HeaderComponts/LargeScreen/HeaderReducer';
import {homeCategoryReducer} from './Actions/HomeContent/HomeCategory/HomeCategoryreducer';
import {HomeProductReducer} from './Actions/HomeContent/HomeProducts/HomeProductReducer';
import {HomeBigCardsReducer} from './Actions/HomeContent/HomeBigCards/HomeBigCardsReducer';
import {HomeProductScrollReducer} from './Actions/HomeContent/HomeProductScroll/HomeProductScrollReducer';
import {HomeBrandsReducer} from './Actions/HomeContent/HomeBrands/HomeBrandsReducer';
import {HomeBlogReducer} from "./Actions/HomeContent/HomeBlog/HomeBlogReducer";


//combines all reducers so that they can be put in the store as rootReducer
const rootReducer = combineReducers({
    header: HeaderReducer,
    homeCategory: homeCategoryReducer,
    homeProducts: HomeProductReducer,
    homeBigCards: HomeBigCardsReducer,
    homeScrollProducts : HomeProductScrollReducer,
    homeBrands : HomeBrandsReducer,
    homeBlog:HomeBlogReducer,
});

export default rootReducer;