import {brands} from '../../../DB'
import {SHOW_BORDER,HIDE_BORDER,ARROW,NOARROW} from "./Constants";
import update from 'immutability-helper';

const initialState = {
   brands:brands,
   arrows: false
}


export const HomeBrandsReducer = (state = initialState , action) => {
    switch(action.type){
    case SHOW_BORDER:
        return update(state,{brands:{[action.payload]:{border:{$set: true}}}})
    case HIDE_BORDER:
        return update(state,{brands:{[action.payload]:{border:{$set: false}}}})
        case ARROW:
        return update(state,{arrows:{$set: true}})
        case NOARROW:
        return update(state,{arrows:{$set: false}})
    default:
        return state;
    }

}