import LoginErrHeader from "components/Accounts/Error/LoginErrHeader";
import AuthBtn from "components/Common/Auth/AuthBtn";
import AuthInput from "components/Common/Auth/AuthInput";
import Dividing from "components/Common/Dividing";
import LinkHead from "components/Common/LinkHead";

const LoginError = () => {
  return (
    <div className="flex flex-col justify-center self-center w-[350px]">
      <div className="flex flex-col bg-white border-[1px] border-neutral-300 p-5">
        <LoginErrHeader />
        <AuthInput
          label="이메일, 전화번호, 사용자 이름"
          type="text"
          name="id"
          onChange={() => console.log(`hi`)}
        />
        <AuthBtn title="로그인 링크 보내기" />
        <Dividing />
        <div className="text-center pb-12">
          <LinkHead content="새 계정 만들기" link="/accounts/signup" />
        </div>
      </div>
      <div className="p-3 bg-neutral-100 border-[1px] border-t-0 border-neutral-300 text-center">
        <LinkHead content="로그인으로 돌아가기" link="/" />
      </div>
    </div>
  );
};

export default LoginError;
