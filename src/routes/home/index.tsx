import QuestionDiv from "components/Common/Auth/QuestionDiv";
import Dividing from "components/Home/Dividing";
import FindPassword from "components/Home/FindPassword";
import LoginForm from "components/Home/LoginForm/LoginForm";
import Logo from "components/Home/Logo";
import PlatformLoginBox from "components/Home/PlatformLogin/PlatformLoginBox";
import "styles/Home/index.css";

const Home = () => {
  return (
    <div className="flex justify-center space-x-2 mx-auto">
      <div className="md:block hidden">
        <img
          src="/images/main2.jpg"
          alt="mainImage"
          className="w-[300px] brightness-125"
        />
      </div>
      <div className="w-[350px] flex flex-col space-y-2">
        <div className="border-[1px] bg-white border-neutral-300 p-5">
          <Logo />
          <LoginForm />
          <Dividing />
          <PlatformLoginBox />
          <FindPassword />
        </div>
        <QuestionDiv
          question="계정이 없으신가요?"
          anwser="가입하기"
          link="/accounts/signup"
        />
      </div>
    </div>
  );
};

export default Home;
