//NO ACTIONS YET
import {HEARTFILLEDS,HEARTOUTLINEDS,SHOW_ARROW,HIDE_ARROW,DOBUTTONICONS,BUTTONICONS,SELECTCOLORS,UNSELECTCOLORS,UNSELESIZES,SELECTSIZES,IN_IMAGE_BUTTONS,OUT_IMAGE_BUTTONS} from './Constants';
import {scrollproducts} from "../../../DB";
import update from 'immutability-helper';



const initialState = {
   homeScrollProducts : scrollproducts,
   sideArrows:false
}

export const HomeProductScrollReducer = (state = initialState , action) => {
    switch(action.type){
        case HEARTFILLEDS: 
        return update(state,{homeScrollProducts:{[action.payload]:{heartFill:{$set: true}}}})
    case HEARTOUTLINEDS:
        return update(state,{homeScrollProducts:{[action.payload]:{heartFill:{$set: false}}}})
    case DOBUTTONICONS: 
        return update(state,{homeScrollProducts:{[action.payload]:{btnIcon:{$set: true}}}})
    case BUTTONICONS:
        return update(state,{homeScrollProducts:{[action.payload]:{btnIcon:{$set: false}}}})
    case SELECTCOLORS: 
        return update(state,{homeScrollProducts:{[action.payload1]:{colors:{[action.payload2]:{selected:{$set: true}}}}}})
    case UNSELECTCOLORS:
        return update(state,{homeScrollProducts:{[action.payload1]:{colors:{[action.payload2]:{selected:{$set: false}}}}}})
    case SELECTSIZES: 
        return update(state,{homeScrollProducts:{[action.payload1]:{sizes:{[action.payload2]:{selected:{$set: true}}}}}})
    case UNSELESIZES:
        return update(state,{homeScrollProducts:{[action.payload1]:{sizes:{[action.payload2]:{selected:{$set: false}}}}}})
    case IN_IMAGE_BUTTONS: 
        return update(state,{homeScrollProducts:{[action.payload]:{imageButtons:{$set: true}}}})
    case OUT_IMAGE_BUTTONS:
        return update(state,{homeScrollProducts:{[action.payload]:{imageButtons:{$set: false}}}})
    case SHOW_ARROW:
        return update(state,{sideArrows:{$set: true}})
    case HIDE_ARROW:
        return update(state,{sideArrows:{$set: false}})
        default:
            return state
    }
}