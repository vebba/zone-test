import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import * as actionCreators from './actions'
import {ReduxContainerHOC} from '../HOC'

class SimpleButton extends PureComponent {

    render() {
        return (
            <div onClick={() => this.props.onButtonClick(this.props.buttonType)}>
                {this.props.children}
            </div>)
    }
}

SimpleButton.propTypes = {
    onButtonClick: PropTypes.func,
    buttonType: PropTypes.string
};
export default ReduxContainerHOC(SimpleButton, null, actionCreators)
