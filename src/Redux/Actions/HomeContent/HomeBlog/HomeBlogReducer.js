import {bARROW,NObARROW} from "./Constants";
import {blogs} from "../../../DB";
import update from 'immutability-helper';


const initialState = {
    blogs:blogs,
    bArrow:false
 }
 
 export const HomeBlogReducer = (state = initialState , action) => {
     switch(action.type){
        case bARROW:
            return update(state,{bArrow:{$set: true}})
        case NObARROW:
                return update(state,{bArrow:{$set: false}})
         default:
             return state
     }
 }