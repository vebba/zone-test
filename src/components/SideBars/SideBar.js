import React from "react";
import * as actionCreators from './actions'
import {ReduxContainerHOC} from '../HOC'

const SideBar = ({children, isOpen,onSideBarClicked }) => {
    return (
        <div className="w3-mobile w3-sidebar w3-bar-block w3-collapse w3-card w3-border-right w3-animate-left" id="mySidebar"
             style={{display: isOpen ? "block": "none" ,width:"220px" , zIndex: "3"}}>
            <button onClick={onSideBarClicked} className="w3-button w3-right-align w3-hide-large w3-bar-item w3-xlarge">Close &times;</button>
            {children}
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        isOpen: state.sideBar.isOpen
    }
};

export default ReduxContainerHOC(SideBar, mapStateToProps, actionCreators)
