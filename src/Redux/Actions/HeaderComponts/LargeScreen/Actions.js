import {CHIDE,CSHOW,MHIDE,MSHOW,WHIDE,WSHOW,DSHOW,LDHIDE,LDSHOW,DHIDE,TOP_DRAWER_SEARCHFIELD} from './Constants'
//Action creators

export const topDrawerSearchField = (text) => {
    return({
        type: TOP_DRAWER_SEARCHFIELD,
        payload: text
    })
}
export const showCategory = () => {
return ({
    type: CSHOW,
})
}

export const hideCategory = () =>{
 return(
     {
         type: CHIDE
     }
 )
}
export const showMen = () => {
    return ({
        type: MSHOW,
    })
    }
    
    export const hideMen = () =>{
     return(
         {
             type: MHIDE
         }
     )
    }

    export const showWomen = () => {
        return ({
            type: WSHOW,
        })
        }
        
        export const hideWomen = () =>{
         return(
             {
                 type: WHIDE
             }
         )
        }
        export const showTopDrawer = () => {
            return ({
                type: DSHOW,
            })
            }
            
            export const hideTopDrawer = () =>{
             return(
                 {
                     type: DHIDE
                 }
             )
            }
            export const showLeftDrawer = () => {
                return ({
                    type: LDSHOW,
                })
                }
                
                export const hideLeftDrawer = () =>{
                 return(
                     {
                         type: LDHIDE
                     }
                 )
                }