import {connect} from 'react-redux';
import Header from './Header';
import {menuOpen} from './actions';


const stateProps = state => (
    {
        header: state.header
    }
);
const dispatchProps = dispatch => ({
    onMenuClick(menu) {
        dispatch(menuOpen(menu));
    }
});

export default connect(stateProps,dispatchProps)(Header);
