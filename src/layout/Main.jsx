import React from "react";
import { MoviesList } from '../components/MoviesList'
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

// Вытаскиваем переменную с ключом
const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    // Деструктуризация позволяет разбивать объект или массив на переменные при присвоении. Cвойство prop объекта object здесь должно быть присвоено переменной varName . Если в объекте отсутствует такое свойство, переменной varName присваивается значение по умолчанию.

    state = {
        movies: [],
        loading: true, //при старте страницы 
    }

    // Каждый компонент React проходит несколько стадий в процессе своей жизни: он создается, затем добавляется в DOM, получает пропсы, и, наконец, удаляется из дерева. Этот процесс называют жизненным циклом компонента (Component Lifecycle). React предоставляет набор методов, которые позволяют встроиться в этот процесс.

    componentDidMount() {
        // fetch('http://www.omdbapi.com/?apikey=c98ebacb&s=marvel')
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=marvel`)
            .then(response => response.json()) //преобрзовать 
            .then(data => this.setState({ movies: data.Search, loading: false })) //получение данных из запроса
    }

    // Обновление фильмов при поиске
    searchMovies = (str, type = 'all') => {
        // При начале загрузки - 
        this.setState({ loading: true });
        // принимает поисковую строку
        // fetch(`http://www.omdbapi.com/?apikey=c98ebacb&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            // передаем строку , которая была передана
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }


    render() {
        const { movies, loading } = this.state;
        return <main className="content">
            <Search searchMovies={this.searchMovies} />
            {/* проверка */}
            {
                loading ? (
                    <Preloader />
                ) : (
                    <MoviesList movies={movies} />
                )
            }

        </main>
    }
}

export { Main }