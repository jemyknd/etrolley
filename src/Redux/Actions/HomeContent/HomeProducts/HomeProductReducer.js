import {HEARTFILLED,HEARTOUTLINED,DOBUTTONICON,BUTTONICON,SELECTCOLOR,UNSELECTCOLOR,UNSELESIZE,SELECTSIZE,IN_IMAGE_BUTTON,OUT_IMAGE_BUTTON} from './Constants';
import update from 'immutability-helper';

const initialState = {
    newProductsData : [
        {
          imageURL: "show background product image1",
          heartFill: false,
          btnIcon: false,
          discountTimer: true,
          timerValue:100 * 70000,
          imageButtons: false,
          hot:false,
          new:true,
          discounted: true,
          discountPercentage:10,
          currency:"UGX ",
          realPrice: 50000,
          dicountedPrice:40000,
          lable: "Levi's",
          productName: "Jacket with hood",
          rate: true,
          rateValue:3,
          colors: [{color:"pink",selected:false},{color:"orange",selected:false},{color:"purple",selected:false},{color:"brown",selected:false}],
          sizes:[{size:"32",selected:true},{size:"34",selected:false},{size:"17",selected:false},{size:"22",selected:false}],
          id: 'one',
        },
        {
          imageURL: "show background product image2",
          heartFill: false,
          btnIcon: false,
          discountTimer: false,
          timerValue:0,
          imageButtons: false,
          hot:true,
          new:false,
          discounted: false,
          rate: true,
          discountPercentage:10,
          currency:"UGX ",
          realPrice: 20000,
          dicountedPrice: 10000,
          lable: "Prada",
          productName: "Trainers with heel detail",
          rateValue:2,
          colors: [{color:"pink",selected:false},{color:"orange",selected:false},{color:"purple",selected:false},{color:"brown",selected:false}],
          sizes:[{size:"12",selected:true},{size:"55",selected:false},{size:"37",selected:false},{size:"24",selected:false}],
          id: 'two',
        },
        {
          imageURL: "show background product image3",
          heartFill: false,
          btnIcon: false,
          discountTimer: false,
          timerValue:0,
          imageButtons: false,
          hot:false,
          new:false,
          discounted: true,
          rate: false,
          discountPercentage:50,
          currency:"UGX ",
          realPrice:35000,
          dicountedPrice: 175000,
          lable: "Lacoste",
          productName: "Belted chino trousers polo",
          rateValue:2,
          colors: [{color:"pink",selected:false},{color:"orange",selected:false},{color:"purple",selected:false},{color:"brown",selected:false}],
          sizes:[{size:"32",selected:true},{size:"34",selected:false}],
          id: 'three',
        },
        {
          imageURL: "show background product image4",
          heartFill: false,
          btnIcon: false,
          discountTimer: true,
          timerValue:10 * 550000,
          imageButtons: false,
          hot:false,
          new:false,
          discounted: true,
          rate: true,
          discountPercentage:20,
          currency:"UGX ",
          realPrice: 70000,
          dicountedPrice: 100000,
          lable: "Zara",
          productName: "Skinny mid-rise trousers",
          rateValue:5,
          colors: [{color:"pink",selected:false},{color:"orange",selected:false},{color:"purple",selected:false},{color:"brown",selected:false}],
          sizes:[{size:"32",selected:true},{size:"34",selected:false},{size:"17",selected:false},{size:"22",selected:false}],
          id:'four',
        },
        {
          imageURL: "show background product image5",
          heartFill: false,
          btnIcon: false,
          discountTimer: false,
          timerValue:0,
          imageButtons: false,
          hot:true,
          new:false,
          discounted: false,
          rate: false,
          discountPercentage:30,
          currency:"UGX ",
          realPrice:5000,
          dicountedPrice: 20000,
          lable: "Calvin Klein",
          productName: "Round neck sweater",
          rateValue:0,
          colors: [{color:"pink",selected:false},{color:"orange",selected:false},{color:"purple",selected:false},{color:"brown",selected:false}],
          sizes:[{size:"22",selected:true},{size:"34",selected:false},{size:"27",selected:false},{size:"22",selected:false}],
          id: 'five',
        },
        {
          imageURL: "show background product image6",
          heartFill: false,
          btnIcon: false,
          discountTimer: false,
          timerValue:0,
          imageButtons: false,
          hot:false,
          new:true,
          discounted: true,
          rate: true,
          discountPercentage:40,
          currency:"UGX ",
          realPrice:230000,
          dicountedPrice:780000,
          lable: "Dior",
          productName: "Grown cotton T-shirt with print",
          rateValue:3,
          colors: [{color:"pink",selected:false},{color:"orange",selected:false},{color:"purple",selected:false},{color:"brown",selected:false}],
          sizes:[{size:"11",selected:true},{size:"17",selected:false},{size:"20",selected:false}],
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
        case IN_IMAGE_BUTTON: 
            return update(state,{newProductsData:{[action.payload]:{imageButtons:{$set: true}}}})
        case OUT_IMAGE_BUTTON:
            return update(state,{newProductsData:{[action.payload]:{imageButtons:{$set: false}}}})
        default:
            return state;
    }
}