import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserLoginProvider from "./common/contexts/UserToken";
import { StyleGlobal } from "./common/styles/StyleGlobal";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <> 
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <StyleGlobal />
        <UserLoginProvider>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </UserLoginProvider>
      </BrowserRouter>
      <Toaster toastOptions={{ className: "toastThemed" }} />
    </>
  );
}

export default App;
