import {HEARTFILLED,HEARTOUTLINED,DOBUTTONICON,BUTTONICON,SELECTCOLOR,UNSELECTCOLOR,UNSELESIZE,SELECTSIZE} from './Constants';
import update from 'immutability-helper';

const initialState = {
    newProductsData : [
        {
          imageURL: "show background product image1",
          heartFill: false,
          btnIcon: false,
          rate: true,
          rateValue:3,
          colors: [{color:"pink",selected:false},{color:"orange",selected:false},{color:"purple",selected:false},{color:"brown",selected:false}],
          sizes:[{size:"32",selected:false},{size:"34",selected:false},{size:"17",selected:false},{size:"22",selected:false}],
          id: 'one',
        },
        {
          imageURL: "show background product image2",
          heartFill: false,
          btnIcon: false,
          rate: true,
          rateValue:2,
          colors: [{color:"pink",selected:false},{color:"orange",selected:false},{color:"purple",selected:false},{color:"brown",selected:false}],
          sizes:[{size:"12",selected:false},{size:"55",selected:false},{size:"37",selected:false},{size:"24",selected:false}],
          id: 'two',
        },
        {
          imageURL: "show background product image3",
          heartFill: false,
          btnIcon: false,
          rate: false,
          rateValue:2,
          colors: [{color:"pink",selected:false},{color:"orange",selected:false},{color:"purple",selected:false},{color:"brown",selected:false}],
          sizes:[{size:"32",selected:false},{size:"34",selected:false}],
          id: 'three',
        },
        {
          imageURL: "show background product image4",
          heartFill: false,
          btnIcon: false,
          rate: true,
          rateValue:5,
          colors: [{color:"pink",selected:false},{color:"orange",selected:false},{color:"purple",selected:false},{color:"brown",selected:false}],
          sizes:[{size:"32",selected:false},{size:"34",selected:false},{size:"17",selected:false},{size:"22",selected:false}],
          id:'four',
        },
        {
          imageURL: "show background product image5",
          heartFill: false,
          btnIcon: false,
          rate: false,
          rateValue:0,
          colors: [{color:"pink",selected:false},{color:"orange",selected:false},{color:"purple",selected:false},{color:"brown",selected:false}],
          sizes:[{size:"22",selected:false},{size:"34",selected:false},{size:"27",selected:false},{size:"22",selected:false}],
          id: 'five',
        },
        {
          imageURL: "show background product image6",
          heartFill: false,
          btnIcon: false,
          rate: true,
          rateValue:3,
          colors: [{color:"pink",selected:false},{color:"orange",selected:false},{color:"purple",selected:false},{color:"brown",selected:false}],
          sizes:[{size:"11",selected:false},{size:"17",selected:false},{size:"20",selected:false}],
          id:'six',
        },
      ]
}

export const HomeProductReducer = (state = initialState , action) => {

    switch(action.type){
        
        case HEARTFILLED: 
            return update(state,{newProductsData:{[action.payload]:{heartFill:{$set: true}}}})
        case HEARTOUTLINED:
            return update(state,{newProductsData:{[action.payload]:{heartFill:{$set: false}}}})
        case DOBUTTONICON: 
            return update(state,{newProductsData:{[action.payload]:{btnIcon:{$set: true}}}})
        case BUTTONICON:
            return update(state,{newProductsData:{[action.payload]:{btnIcon:{$set: false}}}})
        case SELECTCOLOR: 
            return update(state,{newProductsData:{[action.payload1]:{colors:{[action.payload2]:{selected:{$set: true}}}}}})
        case UNSELECTCOLOR:
            return update(state,{newProductsData:{[action.payload1]:{colors:{[action.payload2]:{selected:{$set: false}}}}}})
        case SELECTSIZE: 
            return update(state,{newProductsData:{[action.payload1]:{sizes:{[action.payload2]:{selected:{$set: true}}}}}})
        case UNSELESIZE:
            return update(state,{newProductsData:{[action.payload1]:{sizes:{[action.payload2]:{selected:{$set: false}}}}}})

        default:
            return state;
    }
}