import React from 'react';
import PropTypes from 'prop-types';
import {ReduxContainerHOC} from '../HOC';
import * as actionCreators from './actions'

const Pagination = ({onPageSelected, currentPage}) => {
    return (
        <div className="w3-center">
            <h1 className={"w3-left w3-padding"}>Pagination</h1>

                <div className="w3-bar">
                    <a className="w3-button">«</a>
                    <a onClick={() => onPageSelected("1")} className="w3-button w3-theme">1</a>
                    <a onClick={() => onPageSelected("2")} className="w3-button">2</a>
                    <a onClick={() => onPageSelected("3")} className="w3-button">3</a>
                    <a className="w3-button">»</a>
                </div>

        </div>
    );
};

Pagination.propTypes = {
    onPageSelected: PropTypes.func
};
const mapStateToProps = state =>  (
    {
        currentPage : state.pagination.currentPage
    }
);

export default ReduxContainerHOC(Pagination, mapStateToProps,actionCreators);
