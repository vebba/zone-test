import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'

export default function (ComposedComponent, mapStateToProps, actionCreators) {
    class ReduxContainer extends React.PureComponent {
        constructor(props) {
            super(props);
            const {dispatch} = props;
            this.boundActionCreators = bindActionCreators(actionCreators, dispatch)
        }

        render() {
            return (
                <ComposedComponent
                    {...this.props}
                    {...this.boundActionCreators}
                />
            )
        }
    }

    ReduxContainer.propTypes = {
        dispatch: PropTypes.func
    };
    ReduxContainer.defaultProps = {
        dispatch: () => {
        }
    };
    return connect(mapStateToProps)(ReduxContainer)
}
