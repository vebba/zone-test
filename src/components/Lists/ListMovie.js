import React from 'react';
import ListMovieItem from './ListMovieItem';

const ListMovie = ({items, genres}) => {
    const grouped = chunkArray(items,4);

    return grouped.map((group, index) => {
        return (
               <div key={index} className="w3-row-padding">
                   {group.map((item, index) => (
                       <div key={index} className="w3-col m6 l3 w3-margin-bottom">
                           <ListMovieItem genres={genres} key={index} movie={item}/>
                       </div>
                   ))}
               </div>
        );
    })

};
function chunkArray(myArray, chunk_size){
    let results = [];

    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }

    return results;
}
export default ListMovie;
