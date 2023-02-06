import InputBox from "components/Home/InputBox";
import LoginBtn from "components/Home/LoginBtn";
import "styles/Home/index.css";

const Home = () => {
  return (
    <div className="bg-neutral-100 flex flex-col h-[100vh] justify-center">
      <div className="w-7/12 flex space-x-8 mx-auto">
        <div className="w-1/2">
          <img src="/images/main.jpg" alt="mainImage" className="w-[100%]" />
        </div>
        <div className="w-1/2">
          <div className="border-[1px] bg-white border-neutral-300 p-8">
            <div>
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div className=" flex flex-col">
              <form className="flex flex-col">
                <InputBox
                  label="전화번호,사용자 이름 또는 이메일"
                  type="text"
                />
                {/* <InputBox label="비밀번호" type="password" /> */}
                {/* <LoginBtn /> */}
              </form>
            </div>
            <fieldset className="border-t border-slate-400">
              <legend className="mx-auto px-4 text-neutral-400 text-sm font-semibold">
                또는
              </legend>
            </fieldset>
            <div className="flex justify-center">
              <button>
                <img
                  src="/images/kakaoBtn/kakaotalk_sharing_btn_medium.png"
                  alt="kakao_login_large_wide"
                  className="w-6"
                />
              </button>
              <span>카카오톡으로 로그인</span>
            </div>
            <div className="flex justify-center">
              <button>
                <img
                  src="/images/kakaoBtn/facebook_original_logo_icon_146526.png"
                  alt="facebook_login_large_wide"
                  className="w-6"
                />
              </button>
              <span>페이스북으로 로그인</span>
            </div>
            <div className="flex justify-center">
              <button>
                <img
                  src="/images/kakaoBtn/google_icon-icons.com_62736.png"
                  alt="facebook_login_large_wide"
                  className="w-6"
                />
              </button>
              <span>구글로 로그인</span>
            </div>
            <div>비밀번호를 잊으셨나요?</div>
          </div>
          <div>
            <div>가입하시겠습니까?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
