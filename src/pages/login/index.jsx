import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import CentralizedComponent from "../../components/CentralizedComponent";
import LoginArea from "../../components/LoginArea";
import * as animationData from "../../assets/json-animate/Login-animation.json";
import { FlexComponent } from "./styles";

const Login = () => {
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <CentralizedComponent loginArea={true} >
      <figure>
        <Lottie
          height={"auto"}
          options={defaultOptions}
        />
      </figure>
      <FlexComponent gap="1rem">
        <Link to="/">
          <h1>Your Money</h1>
        </Link>
        <h2>Login</h2>
        <LoginArea />
      </FlexComponent>
    </CentralizedComponent>
  );
}

export default Login;
