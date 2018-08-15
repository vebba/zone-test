import React from 'react';
import {filterByRate} from "../../actions";
import {connect} from 'react-redux';
import {currentRate} from "../../reducers/selectors";
import * as styles from './PopularityFilter.css';

const PopularityFilter = ({onChange, rate=3}) => {
    return (
        <div className={styles.container}>

                <span>Average votes</span>
                <input value={rate} type="range" min="0" max="10" step="0.5" onChange={e=>onChange(e.target.value)}/>
                <span className={styles.rate}>{rate}</span>
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
