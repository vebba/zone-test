import React from 'react';
import {connect} from 'react-redux';
import {filterByGenre} from "../actions";
import * as styles from './Genres.css';

const GenreItem = ({name, id, onChange}) => (
    <label className={styles.genreItem}> {name}
        <input type="checkbox" id={id} name="genres"
               value={name} onChange={() => onChange(id)}/>
        <span className={styles.checkmark}/>
    </label>
);

const Genres = ({genres = [], onGenreSelected}) => (

    <div className={styles.genreList}>
        {genres.map(item => <GenreItem key={item.id} onChange={onGenreSelected} name={item.name} id={item.id}/>)}
    </div>

);

const mapDispatchToProps = dispatch => ({
    onGenreSelected(id) {
        dispatch(filterByGenre(id))
    }
});
const mapStateToProps = state => ({genres: state.genres});
export default connect(mapStateToProps, mapDispatchToProps)(Genres);
