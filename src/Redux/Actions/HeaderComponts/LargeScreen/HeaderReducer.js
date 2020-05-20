import {CHIDE,CSHOW,MSHOW,MHIDE,WHIDE,WSHOW,DHIDE,DSHOW,LDHIDE,LDSHOW,TOP_DRAWER_SEARCHFIELD} from './Constants';

// this is the initial state of the HeaderContainer section
const initialState = {
    categoryState: false,
    menState:false,
    womenState: false,
    topDrawerState:false,
    topDrawerSearchField:'',
    leftDrawerState :false,

}

export const HeaderReducer = (state = initialState , action) => {

    //when the actions are dispatched(depending on the type) the return will change state and the section will re-render
    switch(action.type){
        case TOP_DRAWER_SEARCHFIELD:
            return{
                ...state,
                topDrawerSearchField: action.payload
            }
        case CSHOW:
            return {
                ...state,
                categoryState:true,
                menState: false
            }
        case CHIDE:
            return{
                ...state,
                categoryState:false,
                menState: false
            }
            case MSHOW:
                return {
                    ...state,
                    menState:true,
                    categoryState: false
                }
            case MHIDE:
                return{
                    ...state,
                    menState: false,
                    categoryState : false
                }
                case WSHOW:
                    return {
                        ...state,
                        womenState:true,
                        menState: false,
                        categoryState: false
                    }
                case WHIDE:
                    return{
                        ...state,
                        menState: false,
                        categoryState : false,
                        womenState:false
                    } 
                case DSHOW: 
                    return{
                        ...state,
                        topDrawerState: true,
                        menState: false,
                        categoryState : false,
                        womenState:false
                    } 
                    case DHIDE: 
                    return{
                        ...state,
                        topDrawerSearchField:'',
                        topDrawerState: false,
                        menState: false,
                        categoryState : false,
                        womenState:false
                    } 
                    case LDSHOW:
                        return {
                            ...state,
                            leftDrawerState :true
                        } 
                        case LDHIDE:
                            return {
                                ...state,
                                leftDrawerState :false,
                                topDrawerSearchField:''
                            }            
        default:
            return state;
    }
}
