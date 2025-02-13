import { useAppDataContext } from "../contexts/AppDataContext";

export default function Main() {
  const { movies } = useAppDataContext();
  const { series } = useAppDataContext();
  const langs = ["it", "us", "gb", "es", "fr", "en"];
  const voteInStars = (num) => {
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    }
    for (let i = num; i < 5; i++) {
      stars.push(<i key={i} className="fa-regular fa-star"></i>);
    }
    return stars;
  };

  return (
    <main>
      <div className="container-title text-gray-400">
        <h2 className="text-white">Film</h2>
        {movies.length ? null : (
          <p>
            Non ci sono film corrispondenti
            <i
              className="fa-solid fa-face-frown"
              style={{ marginLeft: "8px", color: "#99A1AF" }}
            ></i>
          </p>
        )}
      </div>

      <div className="container-main">
        <div className="grid gap-8 movie-card">
          {movies.map((movie) => (
            <div className="movie" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                onError={(e) => (e.target.src = "/img/placeholder.jpg")}
                alt="nuul"
                style={{
                  obejctFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
              <div className="overlay text-wrap">
                {" "}
                <h1>{movie.title}</h1>{" "}
                <p className="text-gray-500">{movie.original_title}</p>
                <div className="stars">
                  {voteInStars(Math.ceil(movie.vote_average / 2))}
                </div>
                <p className="text-wrap pt-2.5">{movie.overview}</p>
                {langs.includes(movie.original_language) ? (
                  <img
                    className="flag-img mt-2 mb-4"
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

      <div className="container-title text-gray-400">
        <h2 className="text-white">Serie</h2>
        {series.length ? null : (
          <p>
            Non ci sono serie tv corrispondenti
            <i
              className="fa-solid fa-face-frown"
              style={{ marginLeft: "8px", color: "#99A1AF" }}
            ></i>
          </p>
        )}
      </div>

      <div className="container-main">
        <div className="grid gap-8 movie-card">
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
              <div className="overlay text-wrap">
                {" "}
                <h1>{serie.name}</h1>{" "}
                <p className="text-gray-500">{serie.original_name}</p>
                <div className="stars">
                  {voteInStars(Math.ceil(serie.vote_average / 2))}
                </div>
                <p className="text-wrap pt-2.5">{serie.overview}</p>
                {langs.includes(serie.original_language) ? (
                  <img
                    className="flag-img mt-2 mb-4"
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
