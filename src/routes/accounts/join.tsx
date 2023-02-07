import PlatformJoinBtnBox from "components/Accounts/Join/PlatformJoin/PlatformJoinBox";
import QuestionDiv from "components/Common/Auth/QuestionDiv";
import Dividing from "components/Home/Dividing";
import Logo from "components/Home/Logo";

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
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <div>
            <span>
              저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Imjagram에
              업로드했을 수도 있습니다. 더 알아보기
            </span>
          </div>
          <button>가입</button>
        </div>
        <QuestionDiv question="계정이 있으신가요?" anwser="로그인" link="/" />
      </div>
    </div>
  );
};

export default Join;
