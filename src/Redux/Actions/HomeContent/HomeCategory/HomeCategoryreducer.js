import {MENSHOW,MENHIDE,WOMENSHOW,WOMENHIDE,ACCESSORIESSHOW,ACCESSORIESHIDE} from './Constants';

const initialState = {
    menCatState: false,
    womenCatState: false,
    accessoriesCatState: false
}

export const homeCategoryReducer = (state = initialState , action) => {

    switch(action.type){
        
        case MENSHOW: 
            return{
                ...state,
                menCatState: true
            }
        case MENHIDE:
            return{
                ...state,
                menCatState:false
            }
        case WOMENSHOW:
            return{
                ...state,
                womenCatState: true
            }
        case WOMENHIDE:
            return{
                ...state,
                womenCatState: false
            }
        case ACCESSORIESSHOW:
            return{
                ...state,
                accessoriesCatState: true
            }
        case ACCESSORIESHIDE:
            return{
                ...state,
                accessoriesCatState: false
            }
        default:
            return state;
    }
}