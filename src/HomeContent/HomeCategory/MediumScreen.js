import React from 'react';
import {connect} from 'react-redux';
import Content from './Content';
import  { showMencat,hideMencat,showWomencat,hideWomencat,showAccessoriesncat,hideAccessoriesncat} from '../../Redux/Actions/HomeContent/HomeCategory/Actions'
import "./css/meduimscreen.css";

const mapDispatchToProps = (dispatch) => ({
    showMencat : () => dispatch(showMencat()),
    hideMencat : () => dispatch(hideMencat()),
    showWomencat : () => dispatch(showWomencat()),
    hideWomencat: () => dispatch(hideWomencat()),
    showAccessoriesncat : () => dispatch(showAccessoriesncat()),
    hideAccessoriesncat: () => dispatch(hideAccessoriesncat()),
 })
 
 const mapStateToProps = (state) => ({
     menCatState : state.homeCategory.menCatState,
     womenCatState: state.homeCategory.womenCatState,
     accessoriesCatState: state.homeCategory.accessoriesCatState
   });
const MediumScreen = ({showMencat,hideMencat,showWomencat,hideWomencat,showAccessoriesncat,hideAccessoriesncat,menCatState,womenCatState,accessoriesCatState}) => (
    <div className="bg-purple MCgrid-Container" >
        <div className="MCgrid-item" onMouseEnter={showMencat} onMouseLeave={hideMencat}>
        <Content  category="WOMEN'S" links={['Shirts','Troggies','Sweaters','Socks','Caps','Gloves']} selectedState={menCatState} />
        </div>
        <div className="MCgrid-item" onMouseEnter={showWomencat} onMouseLeave={hideWomencat}>
        <Content  category="MEN'S" links={['Shirts','Troggies','Sweaters','Socks','Caps','Gloves']} selectedState={womenCatState} />
        </div>
        <div className="MCgrid-item" onMouseEnter={showAccessoriesncat} onMouseLeave={hideAccessoriesncat}>
        <Content  category="CATEGORIES" links={['Shirts','Troggies','Sweaters','Socks','Caps','Gloves']} selectedState={accessoriesCatState} />
        </div>
    </div>
)

export default connect(mapStateToProps,mapDispatchToProps)(MediumScreen);