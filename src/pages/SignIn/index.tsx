import { ContainerCenterPage, InitContent } from "../../common/styles/StyleInitPages";
import Footer from "../../components/Footer";
import LoginForm from "../../components/inputs/LoginForm";
import MainImage from "../../components/MainImage";


export default function SignIn() {
  return (
    <>
      <InitContent>
        <MainImage />
        <ContainerCenterPage>
          <h2>Login</h2>

          <LoginForm />
        </ContainerCenterPage>
      </InitContent>
      <Footer />
    </>
  );
}
