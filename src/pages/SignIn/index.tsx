import logo from "../../common/assets/home.svg";
import { ContainerCenterPage, InitContent } from "../../common/styles/StyleInitPages";
import Footer from "../../components/Footer";
import LoginForm from "../../components/inputs/LoginForm";


export default function SignIn() {
  return (
    <>
      <InitContent>
        <img height={300} width={300} src={logo} alt="logo" />
        <ContainerCenterPage>
          <h2>Login</h2>

          <LoginForm />
        </ContainerCenterPage>
      </InitContent>
      <Footer />
    </>
  );
}
