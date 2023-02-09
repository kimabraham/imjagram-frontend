import Dividing from "../../../Common/Dividing";
import LinkText from "../../../Common/LinkSpan";
import Logo from "../../../Common/Logo";
import PlatformLoginBox from "../PlatformLogin/PlatformLoginBox";
import LoginForm from "./LoginForm";

const LoginCard = () => {
  return (
    <div className="border-[1px] bg-white border-neutral-300 p-5">
      <Logo />
      <LoginForm />
      <Dividing />
      <PlatformLoginBox />
      <LinkText content="비밀번호를 잊으셨나요?" link="/account/password" />
    </div>
  );
};

export default LoginCard;
