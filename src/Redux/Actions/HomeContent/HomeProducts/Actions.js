import {HEARTFILLED,HEARTOUTLINED,DOBUTTONICON,BUTTONICON,SELECTCOLOR,UNSELECTCOLOR,FEATURED_PRODUCTS,NEW_PRODUCTS,SPECIAL_PRODUCTS,UNSELESIZE,SELECTSIZE,IN_IMAGE_BUTTON,OUT_IMAGE_BUTTON} from './Constants';

export const newProducts = () =>({
    type : NEW_PRODUCTS,
})
export const specialProducts = () => ({
    type: SPECIAL_PRODUCTS,
})
export const featuredProducts = () => ({
    type: FEATURED_PRODUCTS,
})
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
export const animateInButton = (id) =>({
    type:IN_IMAGE_BUTTON,
    payload:id

})

export const animateOutButton = (id) =>({
    type:OUT_IMAGE_BUTTON,
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