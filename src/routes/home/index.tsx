import QuestionDiv from "components/Common/Auth/QuestionCard";
import LoginCard from "components/Accounts/Login/LoginForm/LoginCard";
import MainImg from "components/Home/MainImg";
import "styles/Home/index.css";

const Home = () => {
  return (
    <div className="flex justify-center space-x-1 mx-auto">
      <MainImg />
      <div className="w-[350px] flex flex-col space-y-1">
        <LoginCard />
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
