import Header from "./components/Header";
import Main from "./components/Main";
// contexts
import { AppDataProvider } from "./contexts/AppDataContext";

export default function App() {
  return (
    <AppDataProvider>
      <Header />
      <Main />
    </AppDataProvider>
  );
}
