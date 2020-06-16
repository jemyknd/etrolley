import {COUNTRY,DESCRIPTION,ZIPCODE,REGION} from "./Constatnts";
import update from 'immutability-helper';


 const initialState = {
    country: '',
    region: '',
    zipcode:'',
    description:'',
}

export const cartReducer = (state = initialState , action) => {
    switch(action.type){
    case COUNTRY:
        return update(state,{country:{$set: action.payload}})
    case DESCRIPTION:
        return update(state,{description:{$set: action.payload}})
        case ZIPCODE:
        return update(state,{zipcode:{$set: action.payload}})
        case REGION:
        return update(state,{region:{$set: action.payload}})
    default:
        return state;
    }

}