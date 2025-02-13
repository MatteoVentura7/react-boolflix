import SearchBar from "./SearchBar";
export default function Header() {
  return (
    <header>
      <div className="container-header">
        <img className="md-respo w-40" src="public\img\logo.png" alt="" />
        <SearchBar />
      </div>
    </header>
  );
}
