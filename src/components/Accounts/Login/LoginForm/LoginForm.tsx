import AuthInput from "../../../Common/Auth/AuthInput";
import AuthBtn from "../../../Common/Auth/AuthBtn";

const LoginForm = () => {
  return (
    <div>
      <form className="flex flex-col w-full">
        <AuthInput
          label="전화번호,사용자 이름 또는 이메일"
          type="text"
          name="id"
          onChange={() => console.log(`hi`)}
        />
        <AuthInput
          label="비밀번호"
          type="password"
          name="password"
          onChange={() => console.log(`hi`)}
        />
        <AuthBtn title="로그인" />
      </form>
    </div>
  );
};

export default LoginForm;
