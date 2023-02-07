import InputBox from "./InputBox";
import LoginBtn from "./LoginBtn";

const LoginForm = () => {
  return (
    <div className="flex flex-col">
      <form className="flex flex-col">
        <InputBox label="전화번호,사용자 이름 또는 이메일" type="text" />
        <InputBox label="비밀번호" type="password" />
        <LoginBtn />
      </form>
    </div>
  );
};

export default LoginForm;
