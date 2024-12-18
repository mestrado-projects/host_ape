import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserLoginProvider from "./common/contexts/UserToken";
import { VariableFormProvider } from "../src/common/contexts/FormsVariablesContext";
import { StyleGlobal } from "./common/styles/StyleGlobal";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import Header from "./components/Header";
import FaqPage from "./pages/FaqPage";
import Property from "./pages/Property";
import AccountPage from "./pages/AccountPage";

const App: React.FC = () => {
  return (
    <> 
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <StyleGlobal />
        <UserLoginProvider>
          <VariableFormProvider>
            <Header />
            <Routes>
              <Route path="/login" element={<SignIn />} />
              <Route path="/cadastro" element={<SignUp />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/" element={<Home />} />
              <Route path="/propriedade/:id" element={<Property />} />
              <Route path="/faq" element={<FaqPage />} />
            </Routes>
          </VariableFormProvider>
        </UserLoginProvider>
      </BrowserRouter>
      <Toaster toastOptions={{ className: "toastThemed" }} />
    </>
  );
}

export default App;
