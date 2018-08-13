import React from 'react';
import {filterByRate} from "../actions";
import {connect} from 'react-redux';
import {currentRate} from "../reducers/selectors";
import * as styles from './PopularityFilter.css'

const PopularityFilter = ({onChange, rate=3}) => {
    return (
        <div className={styles.container}>
            <h4>{`Minimum Rating: ${rate}`} </h4>
            <input list="tickmarks" value={rate} type="range" min="0" max="10" step="0.5" onChange={e=>onChange(e.target.value)}/>
            <datalist id="tickmarks">
                <option value="0" label="0"/>
                <option value="1"/>
                <option value="2"/>
                <option value="3"/>
                <option value="4"/>
                <option value="5" label="5"/>
                <option value="6"/>
                <option value="7"/>
                <option value="8"/>
                <option value="9"/>
                <option value="10" label="10"/>
            </datalist>
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
