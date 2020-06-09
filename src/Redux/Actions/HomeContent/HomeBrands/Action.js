import {SHOW_BORDER,HIDE_BORDER,ARROW,NOARROW} from "./Constants";

export const showBorder = (id) => ({

    type:SHOW_BORDER,
    payload:id,
})
export const hideBorder = (id) => ({

    type :HIDE_BORDER,
    payload:id,
})
export const arrow = () => ({
    type:ARROW
})
export const noArrow = () => ({
    type:NOARROW
})