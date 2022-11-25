import { useForm } from "react-hook-form";
import AuthButton from "../../Components/AuthButton/AuthButton";
import { API } from "../../services/api";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

const RegUserPage = () => {
    
  return (
    <div>
        <LoginPage></LoginPage>
          <RegisterPage></RegisterPage>
           <AuthButton></AuthButton>
    </div>
  )
}

export default RegUserPage