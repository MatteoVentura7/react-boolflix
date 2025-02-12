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
            <div className="movie" key={movie.id}>
              {" "}
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                alt="nuul"
                style={{
                  obejctFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
              <div className="overlay">
                {" "}
                title: {movie.title} <br /> title original:{" "}
                {movie.original_title} <br />
                Voto: {Math.ceil(movie.vote_average / 2)} <br />
                overview: {movie.overview}
                {langs.includes(movie.original_language) ? (
                  <img
                    className="flag-img"
                    src={`/img/${movie.original_language}.png`}
                    alt={movie.original_language}
                  />
                ) : (
                  <p>Lingua: {movie.original_language}</p>
                )}{" "}
              </div>
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
            <div className="movie" key={serie.id}>
              {" "}
              <img
                src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
                alt="null"
                style={{
                  obejctFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
              <div className="overlay">
                {" "}
                title: {serie.title} <br /> title original:{" "}
                {serie.original_title} <br />
                Voto: {Math.ceil(serie.vote_average / 2)} <br />
                overview: {serie.overview}
                {langs.includes(serie.original_language) ? (
                  <img
                    className="flag-img"
                    src={`/img/${serie.original_language}.png`}
                    alt={serie.original_language}
                  />
                ) : (
                  <p>Lingua: {serie.original_language}</p>
                )}{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
