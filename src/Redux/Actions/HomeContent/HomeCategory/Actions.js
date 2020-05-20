import {MENSHOW,MENHIDE,WOMENSHOW,WOMENHIDE,ACCESSORIESSHOW,ACCESSORIESHIDE} from './Constants';

export const showMencat = () =>({
    type:MENSHOW,
})
export const hideMencat = () =>({
    type:MENHIDE,
})
export const showWomencat = () =>({ 
    type:WOMENSHOW,
})
export const hideWomencat = () =>({
    type:WOMENHIDE,
})
export const showAccessoriesncat = () =>({
    type:ACCESSORIESSHOW,
})
export const hideAccessoriesncat = () =>({
    type:ACCESSORIESHIDE,
})