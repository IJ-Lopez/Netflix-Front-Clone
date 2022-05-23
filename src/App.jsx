import {createContext, useReducer} from "react";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import LandingPage from "./pages/LandingPage";
import {authReducer, authInitialState} from "./reducers/authReducer";
import Home from "./pages/Home";
export const AppContext = createContext();

function App() {

  const [authState, authDispatcher] = useReducer(authReducer, authInitialState);

  return (
    <AppContext.Provider value={{authState, authDispatcher}}>
      <ProtectedRoutes>
        <Home></Home>
      </ProtectedRoutes>
    </AppContext.Provider>
  );
}

export default App;
