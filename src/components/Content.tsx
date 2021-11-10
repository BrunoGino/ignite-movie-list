import { MovieCard } from "./MovieCard";
import { GenreResponseProps } from "./SideBar";
import { MovieProps } from "../App";
import { GenreHeader } from "./GenreHeader";
import '../styles/content.scss';
interface ContentProps {
  genre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content({ genre, movies }: ContentProps) {
  return (
    <div className="container">
      <GenreHeader genreName={genre.title} />
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}