import {connect} from 'react-redux';
import ListComponent from "./ListComponent";
import {moviesByPopularity} from "../reducers/selectors";

const mapStateToProps = state => (
    {
        items: moviesByPopularity(state),
        genres: state.genres
    }
);

export default connect(mapStateToProps)(ListComponent);
