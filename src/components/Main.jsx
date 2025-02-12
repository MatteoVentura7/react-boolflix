import { useAppDataContext } from "../contexts/AppDataContext";

export default function Main() {
  const { movies } = useAppDataContext();
  const { series } = useAppDataContext();
  const langs = ["it", "us", "gb", "es", "fr", "en"];

  return (
    <main>
      <h2>Lista Films</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {" "}
            <img
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt=""
            />
            title: {movie.title} <br /> title original: {movie.original_title}{" "}
            <br />{" "}
            {langs.includes(movie.original_language) ? (
              <img
                src={`/img/${movie.original_language}.png`}
                alt={movie.original_language}
              />
            ) : (
              <p>Lingua: {movie.original_language}</p>
            )}{" "}
            <br />
            Voto: {Math.ceil(movie.vote_average / 2)}
            <i class="fa-solid fa-star"></i>
          </li>
        ))}
      </ul>
      <h2>Lista serie</h2>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
              alt=""
            />
            title: {serie.name} <br /> title original: {serie.original_name}{" "}
            <br />{" "}
            {langs.includes(serie.original_language) ? (
              <img
                src={`/img/${serie.original_language}.png`}
                alt={serie.original_language}
              />
            ) : (
              <p>Lingua: {serie.original_language}</p>
            )}{" "}
            <br />
            Voto: {Math.ceil(serie.vote_average / 2)}
            <i class="fa-solid fa-star"></i>
          </li>
        ))}
      </ul>
    </main>
  );
}
