import {HEARTFILLED,HEARTOUTLINED,DOBUTTONICON,NEW_PRODUCTS,SPECIAL_PRODUCTS,FEATURED_PRODUCTS,BUTTONICON,SELECTCOLOR,UNSELECTCOLOR,UNSELESIZE,SELECTSIZE,IN_IMAGE_BUTTON,OUT_IMAGE_BUTTON} from './Constants';
import {newProductsData,specialProductsData,featuredProductsData} from '../../../DB'
import update from 'immutability-helper';

const initialState = {
    newProductsData : newProductsData,

}

export const HomeProductReducer = (state = initialState , action) => {

    switch(action.type){
        
        case HEARTFILLED: 
            return update(state,{newProductsData:{[action.payload]:{heartFill:{$set: true}}}})
        case HEARTOUTLINED:
            return update(state,{newProductsData:{[action.payload]:{heartFill:{$set: false}}}})
        case DOBUTTONICON: 
            return update(state,{newProductsData:{[action.payload]:{btnIcon:{$set: true}}}})
        case BUTTONICON:
            return update(state,{newProductsData:{[action.payload]:{btnIcon:{$set: false}}}})
        case SELECTCOLOR: 
            return update(state,{newProductsData:{[action.payload1]:{colors:{[action.payload2]:{selected:{$set: true}}}}}})
        case UNSELECTCOLOR:
            return update(state,{newProductsData:{[action.payload1]:{colors:{[action.payload2]:{selected:{$set: false}}}}}})
        case SELECTSIZE: 
            return update(state,{newProductsData:{[action.payload1]:{sizes:{[action.payload2]:{selected:{$set: true}}}}}})
        case UNSELESIZE:
            return update(state,{newProductsData:{[action.payload1]:{sizes:{[action.payload2]:{selected:{$set: false}}}}}})
        case IN_IMAGE_BUTTON: 
            return update(state,{newProductsData:{[action.payload]:{imageButtons:{$set: true}}}})
        case OUT_IMAGE_BUTTON:
            return update(state,{newProductsData:{[action.payload]:{imageButtons:{$set: false}}}})
        case NEW_PRODUCTS:
              return update(state,{newProductsData:{$set: newProductsData}})
        case SPECIAL_PRODUCTS:
                return update(state,{newProductsData:{$set: specialProductsData}})
        case FEATURED_PRODUCTS:
                  return update(state,{newProductsData:{$set: featuredProductsData}})
        default:
            return state;
    }
}