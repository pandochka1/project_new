// для получения пропсов
import React from "react";
import { Movie } from './Movie'

function MoviesList(props) {
    const { movies = [] } = props;

    return <div className="movies">

        {movies.length ? movies.map(movie => (
            <Movie key={Movie.id}{...movie} />
            // Оператор spread — это конструкция в JavaScript, которая позволяет передавать элементы массива или свойства объекта в виде отдельных аргументов. 
        )) : <h5>Nothing found</h5>

        }
    </div>

}

export { MoviesList }