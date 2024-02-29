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

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=marvel`)
            .then(response => response.json()) //преобрзовать 
            .then(data => this.setState({ movies: data.Search, loading: false })) //получение данных из запроса
            .catch(err => {
                console.log(err);
                this.setState({ loading: false });
            })
    }

    // Обновление фильмов при поиске
    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            // передаем строку , которая была передана
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
            .catch(err => {
                console.log(err);
                this.setState({ loading: false });
            })
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