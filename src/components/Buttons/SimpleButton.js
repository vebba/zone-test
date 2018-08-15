import React, { PureComponent } from 'react'
import * as actionCreators from './actions'
import {ReduxContainerHOC} from '../HOC'
class SimpleButton extends PureComponent {

    render() {
        return <div onClick={this.props.onButtonClick}>
            {this.props.children}
        </div>
    }

}
export default ReduxContainerHOC(SimpleButton, null, actionCreators)
