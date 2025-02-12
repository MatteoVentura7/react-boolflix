import { useAppDataContext } from "../contexts/AppDataContext";

export default function Main() {
  const { movies } = useAppDataContext();
  const { series } = useAppDataContext();
  const langs = ["it", "us", "gb", "es", "fr", "en"];

  return (
    <main>
      <div className="container-title">
        <h2 className="text-white">LISTA FILMS</h2>
      </div>

      <div className="container-main">
        <div className="grid grid-cols-3 gap-8">
          {movies.map((movie) => (
            <div key={movie.id}>
              {" "}
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                alt="nuul"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container-title">
        <h2 className="text-white">LISTA SERIE TV</h2>
      </div>

      <div className="container-main">
        <div className="grid grid-cols-3 gap-8">
          {series.map((serie) => (
            <div key={serie.id}>
              {" "}
              <img
                src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
                alt="null"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
