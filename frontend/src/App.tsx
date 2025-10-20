import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/home/auth-callback/AuthCallbackPage";
import { axiosInstance } from "./lib/axios";
// import { axiosInstance } from "./lib/axios";

function App() {
  // token =>
  // axiosInstance.get()

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
      </Routes>
    </div>
  );
}

export default App;
