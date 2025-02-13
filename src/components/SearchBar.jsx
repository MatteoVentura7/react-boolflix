import { useState } from "react";
import { useAppDataContext } from "../contexts/AppDataContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { setMovies } = useAppDataContext();
  const { setSeries } = useAppDataContext();

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "cbd270e659f0872844ade5cf92879963",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setMovies(res.data.results));
    axios

      .get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: "cbd270e659f0872844ade5cf92879963",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setSeries(res.data.results));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        name="search"
        type="search"
        placeholder="Cerca..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass color: #ffffff"></i>
      </button>
      <img className="avatar" src="public\img\Netflix-avatar.png" alt="" />
    </form>
  );
}
