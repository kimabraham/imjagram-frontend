import Dividing from "components/Home/Dividing";
import FindPassword from "components/Home/FindPassword";
import LoginForm from "components/Home/LoginForm/LoginForm";
import PlatformLoginBox from "components/Home/PlatformLogin/PlatformLoginBox";
import "styles/Home/index.css";

const Home = () => {
  return (
    <div className="bg-neutral-100 flex flex-col h-[100vh] justify-center">
      <div className="flex justify-center space-x-2 mx-auto">
        <div className="md:block hidden">
          <img src="/images/main2.jpg" alt="mainImage" className="w-[300px]" />
        </div>
        <div className="w-[350px] flex flex-col space-y-2">
          <div className="border-[1px] bg-white border-neutral-300 p-5">
            <div>
              <img src="/images/logo.png" alt="logo" />
            </div>
            <LoginForm />
            <Dividing />
            <PlatformLoginBox />
            <FindPassword />
          </div>
          <div className="border-[1px] bg-white border-neutral-300 p-5 flex justify-center space-x-2">
            <span className="font-extralight text-sm">계정이 없으신가요?</span>
            <a
              href="/accounts/signup"
              className="text-sm font-semibold text-sky-800 hover:text-sky-600"
            >
              가입하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
