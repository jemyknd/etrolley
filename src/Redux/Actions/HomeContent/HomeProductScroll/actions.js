import {HEARTFILLEDS,HEARTOUTLINEDS,DOBUTTONICONS,SHOW_ARROW,HIDE_ARROW,BUTTONICONS,SELECTCOLORS,UNSELECTCOLORS,UNSELESIZES,SELECTSIZES,IN_IMAGE_BUTTONS,OUT_IMAGE_BUTTONS} from './Constants';

export const showArrow = () =>({
    type:SHOW_ARROW
})
export const hideArrow = () =>({
    type:HIDE_ARROW
})
export const filledHeart = (id) =>({
    type:HEARTFILLEDS,
    payload:id

})

export const outlinedHeart = (id) =>({
    type:HEARTOUTLINEDS,
    payload:id
})

export const animateInIcon = (id) =>({
    type:DOBUTTONICONS,
    payload:id

})

export const animateOutIcon = (id) =>({
    type:BUTTONICONS,
    payload:id
})
export const animateInButton = (id) =>({
    type:IN_IMAGE_BUTTONS,
    payload:id

})

export const animateOutButton = (id) =>({
    type:OUT_IMAGE_BUTTONS,
    payload:id
})
export const selectColor = (itemId,colorId) =>({
    type:SELECTCOLORS,
    payload1:itemId,
    payload2:colorId


})

export const unselectColor = (itemId,colorId) =>({
    type:UNSELECTCOLORS,
       payload1:itemId,
       payload2:colorId
    
})

export const selectSize = (itemId,sizeId) =>({
    type:SELECTSIZES,
    payload1:itemId,
    payload2:sizeId


})

export const unselectSize = (itemId,sizeId) =>({
    type:UNSELESIZES,
       payload1:itemId,
       payload2:sizeId
})