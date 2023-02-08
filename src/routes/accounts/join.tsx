import JoinInputBox from "components/Accounts/Join/JoinInputBox";
import PlatformJoinBtnBox from "components/Accounts/Join/PlatformJoin/PlatformJoinBox";
import QuestionCard from "components/Common/Auth/QuestionCard";
import Dividing from "components/Common/Dividing";
import Logo from "components/Common/Logo";

const Join = () => {
  return (
    <div className="flex justify-center">
      <div className="space-y-2">
        <div className="w-[350px] border-[1px] bg-white border-neutral-300 p-5">
          <Logo />
          <div className="p-2 text-center">
            <span className="text-lg font-semibold text-neutral-500">
              친구들의 사진과 동영상을 보려면 가입하세요.
            </span>
          </div>
          <PlatformJoinBtnBox />
          <Dividing />
          <JoinInputBox />
        </div>
        <QuestionCard question="계정이 있으신가요?" anwser="로그인" link="/" />
      </div>
    </div>
  );
};

export default Join;
