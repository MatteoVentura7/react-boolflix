import { createContext, useContext, useState } from "react";

// 1️⃣ Creo il contesto
const AppDataContext = createContext();

// 2️⃣ Definisco un custom Provider (ovvero colui che trasmette i dati da condividere)
function AppDataProvider({ children }) {
  // aggiungere lo stato movies e series da condividere
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  return (
    <AppDataContext.Provider value={{ movies, setMovies, series, setSeries }}>
      {children}
    </AppDataContext.Provider>
  );
}

// 3️⃣ creo un custom hook (una funzione) per consumare facilemente questo contesto
// servirà per recuperare i dati dal contesto
function useAppDataContext() {
  return useContext(AppDataContext);
}

// 4️⃣ esporto sia il provider che l'hook per consumare il contesto
export { AppDataProvider, useAppDataContext };
