import { useAppDataContext } from "../contexts/AppDataContext";

export default function Main() {
  const { movies } = useAppDataContext();
  const { series } = useAppDataContext();
  const langs = ["it", "us", "gb", "es", "fr"];

  return (
    <main>
      <h2>Lista Films</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            title: {movie.title} <br /> title original: {movie.original_title}{" "}
            <br />{" "}
            {langs.includes(movie.original_language) ? (
              <img
                src={`/img/${movie.original_language}.png`}
                alt={movie.original_language}
                className="w-25 rounded-pill"
              />
            ) : (
              <p>Lingua: {movie.original_language}</p>
            )}{" "}
            <br />
            Voto: {movie.vote_average}
          </li>
        ))}
      </ul>
      <h2>Lista serie</h2>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>
            title: {serie.name} <br /> title original: {serie.original_name}{" "}
            <br />{" "}
            {langs.includes(serie.original_language) ? (
              <img
                src={`/img/${serie.original_language}.png`}
                alt={serie.original_language}
                className="w-25 rounded-pill"
              />
            ) : (
              <p>Lingua: {serie.original_language}</p>
            )}{" "}
            <br />
            Voto: {serie.vote_average}
          </li>
        ))}
      </ul>
    </main>
  );
}
