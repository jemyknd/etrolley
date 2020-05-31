import React from 'react';
import './css/phonescreen.css';
import { connect } from "react-redux";
import {
  newProducts,
  specialProducts,
  featuredProducts
} from "../../Redux/Actions/HomeContent/HomeProducts/Actions";

const mapDispatchToProps = (dispatch) => ({
  newProducts: () => dispatch(newProducts()),
  specialProducts: () => dispatch(specialProducts()),
  featuredProducts: () => dispatch(featuredProducts())
});

const PhoneScreen = ({newProducts,specialProducts,featuredProducts }) => (
    <div className="w-100 flex flex-row justify-center mt4 ">
        <div className="w-90 justify-around flex flex-row flex-wrap mfs">
        <div className="sf fw4 hover-black pointer" onClick={newProducts}>New Products</div>
    <div className="sf fw4 hover-black pointer" onClick={specialProducts}>Special Products</div>
    <div className="sf fw4 hover-black pointer" onClick={featuredProducts}>Featured Products</div>
        </div>
    </div>
);
export default connect(null, mapDispatchToProps)(PhoneScreen);


