import React from 'react';
import {filterByRate} from "../../actions";
import {connect} from 'react-redux';
import {currentRate} from "../../reducers/selectors";

const PopularityFilter = ({onChange, rate=3}) => {
    return (
        <div className={`w3-container w3-padding-16`}>
                <h1 className={`w3-block w3-padding-16`}>Filer by votes</h1>
                <input value={rate} type="range" min="0" max="10" step="0.5" onChange={e=>onChange(e.target.value)}/>
                <span className={`w3-tag w3-round-xlarge w3-red w3-right`} style={{width:"40px"}}>{rate}</span>
        </div>

    )
};
const mapDispatchToProps = dispatch => ({
    onChange(rate) {
        dispatch(filterByRate(rate))
    }
});
const mapStateToProps = state => ({rate: currentRate(state)});
export default connect(mapStateToProps, mapDispatchToProps)(PopularityFilter);
