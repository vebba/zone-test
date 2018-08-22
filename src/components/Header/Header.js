import React from 'react';
import PropTypes from 'prop-types';
import {ReduxContainerHOC} from '../HOC';
import * as actionCreators from './actions'
import * as styles from './Header.css';
import {getGenresForIDs} from "./selectors";

const Header = ({onMenuClick, selectedGenres}) => {
    return (
        <div className={`${styles.header} w3-top w3-hide-large`}>
            <div className="w3-bar w3-white w3-xlarge">
                <div onClick={onMenuClick} className="w3-bar-item w3-button w3-hide-large w3-left">☰</div>
                <div className="w3-bar-item">Selected genres : <span>{selectedGenres}</span></div>
            </div>
        </div>
    );
};

Header.propTypes = {
    selectedGenres: PropTypes.string,
    onMenuClick: PropTypes.func
};

const mapStateToProps = state =>  (
    {
        selectedGenres : getGenresForIDs(state)
    }
);
export default ReduxContainerHOC(Header,mapStateToProps,actionCreators);

