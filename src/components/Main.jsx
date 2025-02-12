import { useAppDataContext } from "../contexts/AppDataContext";

export default function Main() {
  const { movies } = useAppDataContext();
  const { series } = useAppDataContext();

  return (
    <main>
      <h2>Lista Films</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            title: {movie.title} <br /> title original: {movie.original_title}{" "}
            <br /> language: {movie.original_language} <br />
            Voto: {movie.vote_average}
          </li>
        ))}
      </ul>
      <h2>Lista serie</h2>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>
            title: {serie.name} <br /> title original: {serie.original_name}{" "}
            <br /> language: {serie.original_language} <br />
            Voto: {serie.vote_average}
          </li>
        ))}
      </ul>
    </main>
  );
}
