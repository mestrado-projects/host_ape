import logo from "../../common/assets/logo.png";
import { ContainerCenterPage, InitContent } from "../../common/styles/StyleInitPages";
import LoginForm from "../../components/inputs/LoginForm";


export default function SignIn() {
  return (
    <InitContent>
      <img src={logo} alt="logo" />
      <ContainerCenterPage>
        <h2>Login</h2>

        <LoginForm />
      </ContainerCenterPage>
    </InitContent>
  );
}
