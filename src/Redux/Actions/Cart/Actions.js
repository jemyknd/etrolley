import {COUNTRY,DESCRIPTION,ZIPCODE,REGION} from "./Constatnts";

export const selectCountry = (country) => ({
    type: COUNTRY,
    payload:country
})

export const selectRegion = (region) => ({
    type: REGION,
    payload: region
})

export const zipCode = (zip) => ({
    type: ZIPCODE,
    payload: zip
})

export const description = (desc) => ({
    type: DESCRIPTION,
    payload: desc
})