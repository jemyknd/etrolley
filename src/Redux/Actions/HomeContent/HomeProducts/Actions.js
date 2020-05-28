import {HEARTFILLED,HEARTOUTLINED,DOBUTTONICON,BUTTONICON,SELECTCOLOR,UNSELECTCOLOR,UNSELESIZE,SELECTSIZE} from './Constants';

export const filledHeart = (id) =>({
    type:HEARTFILLED,
    payload:id

})

export const outlinedHeart = (id) =>({
    type:HEARTOUTLINED,
    payload:id
})

export const animateInIcon = (id) =>({
    type:DOBUTTONICON,
    payload:id

})

export const animateOutIcon = (id) =>({
    type:BUTTONICON,
    payload:id
})
export const selectColor = (itemId,colorId) =>({
    type:SELECTCOLOR,
    payload1:itemId,
    payload2:colorId


})

export const unselectColor = (itemId,colorId) =>({
    type:UNSELECTCOLOR,
       payload1:itemId,
       payload2:colorId
    
})

export const selectSize = (itemId,sizeId) =>({
    type:SELECTSIZE,
    payload1:itemId,
    payload2:sizeId


})

export const unselectSize = (itemId,sizeId) =>({
    type:UNSELESIZE,
       payload1:itemId,
       payload2:sizeId
    
})