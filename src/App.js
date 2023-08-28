import React from "react";
import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieContextProvider from "./context/MovieContext";

const App = () => {
  return (
    <div className="dark:bg-[#23242a] min-h-screen">
      <AuthContextProvider>
        <MovieContextProvider>
          <ToastContainer/>
          <AppRouter/>
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
