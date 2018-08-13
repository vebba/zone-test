import {connect} from 'react-redux';
import ListComponent from "./ListComponent";
import {getFilteredMovies} from "../reducers/selectors";

const mapStateToProps = state => (
    {
        items: getFilteredMovies(state),
        genres: state.genres
    }
);

export default connect(mapStateToProps)(ListComponent);
